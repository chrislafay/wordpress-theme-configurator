import { useMemo } from 'react';
import { previewElements } from '../../data/previewElements';

const FontsPreview = () => (
  <div className="space-y-3">
    <h1 className="text-4xl font-bold">Heading 1 - The quick brown fox</h1>
    <h2 className="text-3xl font-semibold">Heading 2 - A design language</h2>
    <h3 className="text-2xl font-semibold">Heading 3 - Systemized</h3>
    <h4 className="text-xl font-semibold">Heading 4 - Typography</h4>
    <h5 className="text-lg font-semibold">Heading 5 - Harmony</h5>
    <h6 className="text-base font-semibold">Heading 6 - Details</h6>
    <p className="text-base leading-relaxed">
      Body text using the body font. Adjust min/max fluid sizes in the sidebar to see the fluid
      type ramp update instantly. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>
);

const buildTokenMap = (state) => {
  const map = {
    '{{DEFAULT_GAP}}': state.spacing.defaultGap
  };
  state.colors.forEach((color) => {
    map[`{{${color.slug.toUpperCase()}_HEX}}`] = color.hex;
    map[`{{${color.slug.toUpperCase()}_CONTRAST}}`] = color.contrast;
  });
  return map;
};

const hydrateTemplate = (template, state) => {
  let html = template;
  const tokens = buildTokenMap(state);
  Object.entries(tokens).forEach(([token, value]) => {
    html = html.replaceAll(token, value);
  });

  if (html.includes('{{BUTTONS}}')) {
    const buttons = state.colors
      .filter((color) => !color.locked)
      .map(
        (color) => `<button style="padding:12px 16px; font-weight:600; border-radius: var(--custom--radius); box-shadow: var(--custom--shadow); background-color: var(--wp--preset--color--${color.slug}); color: var(--wp--preset--color--${color.contrast}); border: 1px solid transparent;">
          ${color.label}
        </button>`
      )
      .join('');
    html = html.replaceAll('{{BUTTONS}}', buttons);
  }

  return html;
};

const PreviewTabs = ({ state, activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'Fonts':
        return <FontsPreview />;
      case 'Headers':
      case 'Layouts':
      case 'Components': {
        const elements = previewElements.filter(
          (element) => element.category === activeTab.toLowerCase()
        );
        return elements.map((element) => (
          <section
            key={element.slug}
            className="preview-element is-layout-constrained"
            aria-label={element.name}
            dangerouslySetInnerHTML={{
              __html: `<h2>${element.name}</h2><p style="margin:0 0 12px; font-size:0.95rem; font-style:italic;">${element.description}</p>${hydrateTemplate(element.html, state)}`
            }}
          />
        ));
      }
      default:
        return null;
    }
  };

  return <div className="wp-block-group vertical-space-small">{renderContent()}</div>;
};

export default PreviewTabs;
