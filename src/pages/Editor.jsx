import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Download, Pencil } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import ColorControls from '../components/sidebar/ColorControls';
import TypographyControls from '../components/sidebar/TypographyControls';
import SpacingControls from '../components/sidebar/SpacingControls';
import CustomStyles from '../components/sidebar/CustomStyles';
import StyleInjector from '../components/editor/StyleInjector';
import PreviewTabs from '../components/editor/PreviewTabs';
import { generateSCSS, generateThemeJson } from '../utils/exporters';
import { slugify } from '../utils/slugify';
import { AccordionProvider } from '../components/sidebar/Accordion';

const cloneState = (data) =>
  typeof structuredClone === 'function' ? structuredClone(data) : JSON.parse(JSON.stringify(data));

const Editor = () => {
  const { projectId } = useParams();
  const { getProject, updateProject } = useAppContext();
  const project = getProject(projectId);

  const [editorState, setEditorState] = useState(null);
  const initialized = useRef(false);
  const [editingName, setEditingName] = useState(false);
  const [tempName, setTempName] = useState('');
  const [activeTab, setActiveTab] = useState('Fonts');
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);

  useEffect(() => {
    if (project) {
      setEditorState(cloneState(project.data));
      initialized.current = false;
    }
  }, [projectId, project]);

  useEffect(() => {
    if (!editorState) return;
    if (!initialized.current) {
      initialized.current = true;
      return;
    }
    const timer = setTimeout(() => updateProject(projectId, editorState), 500);
    return () => clearTimeout(timer);
  }, [editorState, projectId, updateProject]);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-center">
          <p className="text-lg font-semibold text-slate-800">Project not found.</p>
          <Link to="/dashboard" className="mt-3 inline-block text-blue-600 underline">
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  if (!editorState) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <p className="text-sm text-slate-600">Loading editor...</p>
      </div>
    );
  }

  const formatRelativeTime = (isoDate) => {
    const diffSeconds = Math.max(0, (Date.now() - new Date(isoDate).getTime()) / 1000);
    if (diffSeconds < 60) return 'Less than a minute ago';
    if (diffSeconds < 600) return 'Less than 10 minutes ago';
    if (diffSeconds < 3600) return `${Math.round(diffSeconds / 60)} minutes ago`;
    if (diffSeconds < 7200) return 'About an hour ago';
    if (diffSeconds < 86400) return `${Math.round(diffSeconds / 3600)} hours ago`;
    if (diffSeconds < 172800) return 'About a day ago';
    return `${Math.round(diffSeconds / 86400)} days ago`;
  };

  const startEditingName = () => {
    setTempName(editorState.project.name);
    setEditingName(true);
  };

  const saveName = () => {
    const nextName = tempName.trim() || 'Untitled Project';
    setEditorState((prev) => ({
      ...prev,
      project: { ...prev.project, name: nextName, slug: slugify(nextName) }
    }));
    setEditingName(false);
  };

  const handleNameKey = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      saveName();
    } else if (event.key === 'Escape') {
      setEditingName(false);
    }
  };

  const handleExport = (type) => {
    const content =
      type === 'theme'
        ? generateThemeJson({ ...editorState })
        : generateSCSS({ ...editorState });
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = type === 'theme' ? `${editorState.project.slug}-theme.json` : `${editorState.project.slug}.scss`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-100">
      <StyleInjector state={editorState} />
      <aside className="w-full max-w-md overflow-y-auto border-r border-slate-200 bg-white p-5">
        <div className="mb-2 flex items-start justify-between gap-3 border-b border-slate-200 pb-3">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Editor</p>
            <div className="mt-1 flex items-center gap-2">
              {editingName ? (
                <input
                  className="input"
                  autoFocus
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  onBlur={saveName}
                  onKeyDown={handleNameKey}
                />
              ) : (
                <>
                  <h2 className="text-lg font-semibold text-slate-900">{editorState?.project.name}</h2>
                  <button
                    type="button"
                    onClick={startEditingName}
                    className="text-slate-500 hover:text-slate-700"
                    aria-label="Edit project name"
                  >
                    <Pencil size={16} />
                  </button>
                </>
              )}
            </div>
            <p className="text-xs text-slate-500">
              Updated {formatRelativeTime(project.lastModified)}
            </p>
          </div>
          <Link to="/dashboard" className="btn btn-ghost flex items-center gap-2">
            <ArrowLeft size={16} />
            Dashboard
          </Link>
        </div>

        <AccordionProvider initialOpenId="colors">
          <ColorControls
            colors={editorState.colors}
            onChange={(colors) => setEditorState((prev) => ({ ...prev, colors }))}
          />
          <TypographyControls
            typography={editorState.typography}
            onChange={(typography) => setEditorState((prev) => ({ ...prev, typography }))}
          />
          <SpacingControls
            spacing={editorState.spacing}
            onChange={(spacing) => setEditorState((prev) => ({ ...prev, spacing }))}
          />
          <CustomStyles
            customStyles={editorState.customStyles}
            onChange={(customStyles) => setEditorState((prev) => ({ ...prev, customStyles }))}
          />
        </AccordionProvider>
      </aside>

      <main
        className="relative flex-1 overflow-y-auto"
        style={{ backgroundColor: 'var(--wp--preset--color--light)' }}
      >
        <div className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
          <div className="flex w-full items-center justify-between px-6 py-3">
            <span className="text-sm font-semibold text-slate-800">Live Preview</span>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-0">
                {['Fonts', 'Headers', 'Layouts', 'Components'].map((tab, index) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`border-l border-slate-200 px-3 py-2 text-sm font-semibold first:border-l-0 ${
                      activeTab === tab
                        ? 'rounded-md bg-slate-900 text-white'
                        : 'bg-transparent text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="relative">
                <button
                  onClick={() => setShowDownloadMenu((prev) => !prev)}
                  className="btn btn-secondary flex items-center gap-2"
                >
                  <Download size={16} />
                  Download
                </button>
                {showDownloadMenu && (
                  <div className="absolute right-0 mt-2 w-40 rounded-lg border border-slate-200 bg-white shadow-lg">
                    <button
                      className="block w-full px-3 py-2 text-left text-sm hover:bg-slate-100"
                      onClick={() => {
                        handleExport('theme');
                        setShowDownloadMenu(false);
                      }}
                    >
                      theme.json
                    </button>
                    <button
                      className="block w-full px-3 py-2 text-left text-sm hover:bg-slate-100"
                      onClick={() => {
                        handleExport('scss');
                        setShowDownloadMenu(false);
                      }}
                    >
                      SCSS
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <PreviewTabs state={editorState} activeTab={activeTab} />
        </div>
      </main>
    </div>
  );
};

export default Editor;
