import { useRef } from 'react';
import { Droplet, Lock } from 'lucide-react';
import Accordion from './Accordion';

const ContrastToggle = ({ value, onChange, disabled }) => (
  <div className="flex items-center gap-3">
    {['white', 'black'].map((option) => {
      const isActive = value === option;
      return (
        <button
          key={option}
          type="button"
          disabled={disabled}
          aria-label={`${option} text`}
          onClick={() => onChange(option)}
          className={`relative flex h-9 w-9 items-center justify-center rounded-full border border-black p-1 ${
            disabled ? 'opacity-50' : ''
          } ${isActive ? 'ring-2 ring-blue-400 ring-offset-1' : ''}`}
        >
          <span
            className="block h-full w-full rounded-full"
            style={{ backgroundColor: option === 'white' ? '#FFFFFF' : '#000000' }}
          />
        </button>
      );
    })}
  </div>
);

const ColorRow = ({ color, onChange }) => (
  <div
    className={`flex items-center justify-between gap-3 rounded-lg border px-3 py-3 ${
      color.locked ? 'bg-slate-50 border-slate-200' : 'bg-white border-slate-200'
    }`}
  >
    <ColorSwatch color={color} onChange={onChange} />
    <div className="flex items-center justify-between gap-4 flex-1">
      <div>
        <p className="text-sm font-semibold text-slate-800">{color.label}</p>
      </div>
      <div className="flex items-center gap-2">
        <ContrastToggle
          value={color.contrast}
          disabled={color.locked}
          onChange={(contrast) => onChange({ contrast })}
        />
        {color.locked && <Lock size={16} className="text-slate-400" aria-hidden />}
      </div>
    </div>
  </div>
);

const ColorSwatch = ({ color, onChange }) => {
  const inputRef = useRef(null);

  const handleOpenPicker = () => {
    if (color.locked) return;
    inputRef.current?.click();
  };

  return (
    <button
      type="button"
      onClick={handleOpenPicker}
      className="flex h-14 w-14 items-center justify-center rounded-lg border border-slate-200 shadow-sm"
      style={{ backgroundColor: color.hex }}
      aria-label={`${color.label} color swatch`}
      disabled={color.locked}
    >
      <Droplet
        size={18}
        className={color.contrast === 'white' ? 'text-white' : 'text-slate-900'}
        aria-hidden
      />
      <input
        ref={inputRef}
        type="color"
        className="sr-only"
        value={color.hex}
        onChange={(e) => onChange({ hex: e.target.value })}
      />
    </button>
  );
};

const ColorControls = ({ colors, onChange }) => {
  const updateColor = (slug, updates) => {
    onChange(colors.map((c) => (c.slug === slug ? { ...c, ...updates } : c)));
  };

  const editable = colors.filter((c) => !c.locked);
  const locked = colors.filter((c) => c.locked);

  return (
    <Accordion title="Colors" defaultOpen>
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
