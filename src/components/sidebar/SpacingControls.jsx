import Accordion from './Accordion';

const SpacingControls = ({ spacing, onChange }) => {
  const stepKeys = Object.keys(spacing.steps).sort((a, b) => Number(a) - Number(b));

  const updateStep = (key, value) => {
    onChange({
      ...spacing,
      steps: {
        ...spacing.steps,
        [key]: value
      }
    });
  };

  return (
    <Accordion title="Spacing">
      <div className="grid grid-cols-2 gap-3">
        {stepKeys.map((key) => (
          <div key={key} className="space-y-1">
            <label className="label">Step {key}</label>
            <input
              className="input"
              value={spacing.steps[key]}
              onChange={(e) => updateStep(key, e.target.value)}
            />
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <label className="label">Global Gap Size</label>
        <select
          className="input"
          value={spacing.defaultGap}
          onChange={(e) => onChange({ ...spacing, defaultGap: e.target.value })}
        >
          {stepKeys.map((key) => (
            <option key={key} value={key}>
              Step {key}
            </option>
          ))}
        </select>
      </div>
    </Accordion>
  );
};

export default SpacingControls;
