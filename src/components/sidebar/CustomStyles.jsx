import Accordion from './Accordion';

const CustomStyles = ({ customStyles, onChange }) => (
  <Accordion title="Custom Styles">
    <div className="space-y-2">
      <label className="label">Shadow</label>
      <input
        className="input"
        value={customStyles.shadow}
        onChange={(e) => onChange({ ...customStyles, shadow: e.target.value })}
      />
    </div>
    <div className="space-y-2">
      <label className="label">Border Radius</label>
      <input
        className="input"
        value={customStyles.borderRadius}
        onChange={(e) => onChange({ ...customStyles, borderRadius: e.target.value })}
      />
    </div>
    <div className="space-y-2">
      <label className="label">Border Width</label>
      <input
        className="input"
        value={customStyles.borderWidth}
        onChange={(e) => onChange({ ...customStyles, borderWidth: e.target.value })}
      />
    </div>
    <div className="space-y-2">
      <label className="label">Border Style</label>
      <select
        className="input"
        value={customStyles.borderStyle}
        onChange={(e) => onChange({ ...customStyles, borderStyle: e.target.value })}
      >
        {['solid', 'dashed', 'dotted', 'none'].map((style) => (
          <option key={style} value={style}>
            {style.charAt(0).toUpperCase() + style.slice(1)}
          </option>
        ))}
      </select>
    </div>
  </Accordion>
);

export default CustomStyles;
