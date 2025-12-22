import { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, LogOut, Pencil, Trash } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Dashboard = () => {
  const navigate = useNavigate();
  const { state, logout, createProject, deleteProject } = useAppContext();

  const sortedProjects = useMemo(
    () =>
      [...state.projects].sort(
        (a, b) => new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime()
      ),
    [state.projects]
  );

  const handleCreate = () => {
    const name = window.prompt('Project name?');
    if (!name) return;
    const project = createProject(name);
    navigate(`/editor/${project.id}`);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-sm uppercase tracking-widest text-slate-500">Dashboard</p>
            <h1 className="text-2xl font-semibold text-slate-900">My Projects</h1>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={handleCreate} className="btn btn-primary flex items-center gap-2">
              <Plus size={16} />
              Create New
            </button>
            <button onClick={logout} className="btn btn-ghost flex items-center gap-2">
              <LogOut size={16} />
              Log Out
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                    Project Name
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                    Slug
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                    Last Modified
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {sortedProjects.length === 0 && (
                  <tr>
                    <td className="px-4 py-6 text-center text-sm text-slate-500" colSpan={4}>
                      No projects yet. Create one to get started.
                    </td>
                  </tr>
                )}
                {sortedProjects.map((project) => (
                  <tr key={project.id} className="hover:bg-slate-50">
                    <td className="px-4 py-3 text-sm font-medium text-slate-900">
                      {project.data.project.name}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-600">
                      {project.data.project.slug}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-600">
                      {new Date(project.lastModified).toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Link
                          to={`/editor/${project.id}`}
                          className="btn btn-secondary flex items-center gap-1 px-3 py-1 text-xs"
                        >
                          <Pencil size={14} />
                          Edit
                        </Link>
                        <button
                          onClick={() => deleteProject(project.id)}
                          className="btn btn-ghost flex items-center gap-1 px-3 py-1 text-xs text-red-600 hover:bg-red-50 hover:text-red-700"
                        >
                          <Trash size={14} />
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
