import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import ProjectSettings from '../components/sidebar/ProjectSettings';
import ColorControls from '../components/sidebar/ColorControls';
import TypographyControls from '../components/sidebar/TypographyControls';
import SpacingControls from '../components/sidebar/SpacingControls';
import CustomStyles from '../components/sidebar/CustomStyles';
import StyleInjector from '../components/editor/StyleInjector';
import PreviewTabs from '../components/editor/PreviewTabs';
import { generateSCSS, generateThemeJson } from '../utils/exporters';

const cloneState = (data) =>
  typeof structuredClone === 'function' ? structuredClone(data) : JSON.parse(JSON.stringify(data));

const Editor = () => {
  const { projectId } = useParams();
  const { getProject, updateProject } = useAppContext();
  const project = getProject(projectId);

  const [editorState, setEditorState] = useState(null);
  const initialized = useRef(false);

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
    <div className="flex min-h-screen bg-slate-100">
      <StyleInjector state={editorState} />
      <aside className="w-full max-w-md space-y-4 overflow-y-auto border-r border-slate-200 bg-white p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Editor</p>
            <h2 className="text-lg font-semibold text-slate-900">{editorState?.project.name}</h2>
          </div>
          <Link to="/dashboard" className="btn btn-ghost flex items-center gap-2">
            <ArrowLeft size={16} />
            Dashboard
          </Link>
        </div>

        <ProjectSettings
          project={editorState.project}
          lastModified={project.lastModified}
          onChange={(changes) =>
            setEditorState((prev) => ({ ...prev, project: { ...prev.project, ...changes } }))
          }
        />
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
      </aside>

      <main className="flex-1 overflow-y-auto p-6">
        <div className="mx-auto flex max-w-5xl items-center justify-between pb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Live Preview</p>
            <h1 className="text-2xl font-semibold text-slate-900">Configurator</h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleExport('theme')}
              className="btn btn-secondary flex items-center gap-2"
            >
              <Download size={16} />
              theme.json
            </button>
            <button onClick={() => handleExport('scss')} className="btn btn-primary flex items-center gap-2">
              <Download size={16} />
              SCSS
            </button>
          </div>
        </div>

        <div className="mx-auto max-w-5xl">
          <PreviewTabs state={editorState} />
        </div>
      </main>
    </div>
  );
};

export default Editor;
