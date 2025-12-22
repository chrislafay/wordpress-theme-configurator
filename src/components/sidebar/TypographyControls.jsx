import Accordion from './Accordion';
import { curatedFonts } from '../../constants/designSystem';

const SizeRow = ({ label, size, onChange }) => {
  const handleChange = (field, raw) => {
    const value = raw.trim() === '' ? '' : raw.endsWith('rem') ? raw : `${raw}rem`;
    const minValue = field === 'min' ? value : size.min;
    const maxValue = field === 'max' ? value : size.max;
    const minNumber = parseFloat(minValue);
    const maxNumber = parseFloat(maxValue);
    const next = { ...size, [field]: value };
    if (!Number.isNaN(minNumber) && !Number.isNaN(maxNumber) && maxNumber < minNumber) {
      next.max = `${minNumber}rem`;
    }
    onChange(next);
  };

  return (
    <tr className="border-b border-slate-200">
      <td className="px-3 py-2 text-sm font-semibold text-slate-700">{label}</td>
      <td className="px-3 py-2">
        <input
          className="input"
          value={size.min}
          onChange={(e) => handleChange('min', e.target.value)}
          placeholder="1rem"
        />
      </td>
      <td className="px-3 py-2">
        <input
          className="input"
          value={size.max}
          onChange={(e) => handleChange('max', e.target.value)}
          placeholder="1.5rem"
        />
      </td>
    </tr>
  );
};

const TypographyControls = ({ typography, onChange }) => {
  const handleFontChange = (field, value) => {
    onChange({ ...typography, fonts: { ...typography.fonts, [field]: value } });
  };

  const handleSizeChange = (key, value) => {
    onChange({
      ...typography,
      sizes: {
        ...typography.sizes,
        [key]: value
      }
    });
  };

  return (
    <Accordion title="Typography">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="space-y-2">
          <label className="label">Heading Font</label>
          <select
            className="input"
            value={typography.fonts.heading}
            onChange={(e) => handleFontChange('heading', e.target.value)}
          >
            {curatedFonts.map((font) => (
              <option key={font} value={font}>
                {font}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label className="label">Body Font</label>
          <select
            className="input"
            value={typography.fonts.body}
            onChange={(e) => handleFontChange('body', e.target.value)}
          >
            {curatedFonts.map((font) => (
              <option key={font} value={font}>
                {font}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200">
        <table className="min-w-full">
          <thead className="bg-slate-100 text-left text-xs font-semibold uppercase text-slate-600">
            <tr>
              <th className="px-3 py-2">Size</th>
              <th className="px-3 py-2">Min Size (rem)</th>
              <th className="px-3 py-2">Max Size (rem)</th>
            </tr>
          </thead>
          <tbody className="bg-white text-sm text-slate-800">
            {Object.entries(typography.sizes).map(([key, size]) => (
              <SizeRow key={key} label={key} size={size} onChange={(v) => handleSizeChange(key, v)} />
            ))}
          </tbody>
        </table>
      </div>
    </Accordion>
  );
};

export default TypographyControls;
