import { slugify } from '../../utils/slugify';
import Accordion from './Accordion';

const ProjectSettings = ({ project, lastModified, onChange }) => (
  <Accordion title="Project Settings">
    <div className="space-y-2">
      <label className="label">Project Name</label>
      <input
        className="input"
        value={project.name}
        onChange={(e) =>
          onChange({
            name: e.target.value,
            slug: slugify(e.target.value)
          })
        }
      />
    </div>
    <div className="space-y-2">
      <label className="label">Slug</label>
      <input
        className="input"
        value={project.slug}
        onChange={(e) =>
          onChange({
            slug: slugify(e.target.value)
          })
        }
      />
    </div>
    <div className="rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-700">
      Last Modified: {new Date(lastModified).toLocaleString()}
    </div>
  </Accordion>
);

export default ProjectSettings;
