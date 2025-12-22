import { Lock, Sun } from 'lucide-react';
import Accordion from './Accordion';

const ContrastToggle = ({ value, onChange, disabled }) => (
  <div className="flex items-center gap-2">
    {['white', 'black'].map((option) => (
      <button
        key={option}
        type="button"
        disabled={disabled}
        onClick={() => onChange(option)}
        className={`rounded-lg border px-3 py-1 text-xs font-semibold capitalize ${
          value === option
            ? 'border-blue-500 bg-blue-50 text-blue-700'
            : 'border-slate-200 text-slate-600'
        } ${disabled ? 'opacity-50' : ''}`}
      >
        {option === 'white' ? 'White' : 'Black'}
      </button>
    ))}
  </div>
);

const ColorRow = ({ color, onChange }) => (
  <div
    className={`flex items-center justify-between gap-3 rounded-lg border px-3 py-3 ${
      color.locked ? 'bg-slate-50 border-slate-200' : 'bg-white border-slate-200'
    }`}
  >
    <div className="flex items-center gap-3">
      <span
        className="flex h-10 w-10 items-center justify-center rounded-lg border"
        style={{ backgroundColor: color.hex }}
      >
        <Sun size={16} className={color.contrast === 'white' ? 'text-white' : 'text-slate-900'} />
      </span>
      <div>
        <p className="text-sm font-semibold text-slate-800">{color.label}</p>
        <p className="text-xs text-slate-500 uppercase tracking-wide">#{color.slug}</p>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <input
        type="color"
        className="h-10 w-16 rounded border border-slate-200"
        value={color.hex}
        disabled={color.locked}
        onChange={(e) => onChange({ hex: e.target.value })}
      />
      <ContrastToggle
        value={color.contrast}
        disabled={color.locked}
        onChange={(contrast) => onChange({ contrast })}
      />
      {color.locked && <Lock size={16} className="text-slate-400" aria-hidden />}
    </div>
  </div>
);

const ColorControls = ({ colors, onChange }) => {
  const updateColor = (slug, updates) => {
    onChange(colors.map((c) => (c.slug === slug ? { ...c, ...updates } : c)));
  };

  const editable = colors.filter((c) => !c.locked);
  const locked = colors.filter((c) => c.locked);

  return (
    <Accordion title="Colors">
      <div className="space-y-3">
        {editable.map((color) => (
          <ColorRow
            key={color.slug}
            color={color}
            onChange={(updates) => updateColor(color.slug, updates)}
          />
        ))}
      </div>
      <div className="space-y-2 pt-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          System Locks
        </p>
        {locked.map((color) => (
          <ColorRow
            key={color.slug}
            color={color}
            onChange={(updates) => updateColor(color.slug, updates)}
          />
        ))}
      </div>
    </Accordion>
  );
};

export default ColorControls;
