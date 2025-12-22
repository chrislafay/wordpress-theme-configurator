const buildClamp = (min, max) => `clamp(${min}, 2vw + 1rem, ${max})`;

const StyleInjector = ({ state }) => {
  if (!state) return null;
  const colors = state.colors;
  const spacing = state.spacing.steps;
  const { heading, body } = state.typography.fonts;

  const fontFamilies = [heading, body].filter(Boolean);
  const fontImport =
    fontFamilies.length > 0
      ? `@import url('https://fonts.googleapis.com/css2?${fontFamilies
          .map((font) => `family=${encodeURIComponent(font).replace(/%20/g, '+')}:wght@400;600;700`)
          .join('&')}&display=swap');`
      : '';

  const colorVars = colors
    .map((color) => `  --wp--preset--color--${color.slug}: ${color.hex};`)
    .join('\n');

  const fontVars = Object.entries(state.typography.sizes)
    .map(
      ([key, size]) =>
        `  --wp--preset--font-size--${key}: ${buildClamp(size.min, size.max)};`
    )
    .join('\n');

  const spacingVars = Object.entries(spacing)
    .map(([key, value]) => `  --wp--preset--spacing--${key}: ${value};`)
    .join('\n');

  const utilityClasses = colors
    .map(
      (color) => `
.has-${color.slug}-background-color { background-color: var(--wp--preset--color--${color.slug}); color: var(--wp--preset--color--${color.contrast}); }
.has-${color.slug}-color { color: var(--wp--preset--color--${color.slug}); }`
    )
    .join('\n');

  return (
    <style>{`
${fontImport}
:root {
  --preview-padding: 0px;
${colorVars}
  --wp--preset--font-family--heading: "${heading}", sans-serif;
  --wp--preset--font-family--body: "${body}", sans-serif;
${fontVars}
${spacingVars}
  --custom--shadow: ${state.customStyles.shadow};
  --custom--radius: ${state.customStyles.borderRadius};
  --custom--border-width: ${state.customStyles.borderWidth};
  --custom--border-style: ${state.customStyles.borderStyle};
  --gap-default: var(--wp--preset--spacing--${state.spacing.defaultGap});
  --wp--style--global--content-size: ${state.spacing.contentSize};
  --wp--style--global--wide-size: ${state.spacing.wideSize};
}

body, p { font-family: var(--wp--preset--font-family--body); }
h1, h2, h3, h4, h5, h6 { font-family: var(--wp--preset--font-family--heading); }
h1 { font-size: var(--wp--preset--font-size--xx-large); }
h2 { font-size: var(--wp--preset--font-size--x-large); }
h3 { font-size: var(--wp--preset--font-size--large); }
h4 { font-size: var(--wp--preset--font-size--medium); }
h5 { font-size: var(--wp--preset--font-size--small); }
h6 { font-size: var(--wp--preset--font-size--x-small); }

/* Allow alignfull blocks to span the full preview width (inside padded container) */
.alignfull {
  width: 100%;
  margin-left: 0 !important;
  margin-right: 0 !important;
  max-width: none !important;
  display: block;
}

.is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)) {
  max-width: var(--wp--style--global--content-size);
  margin-left: auto !important;
  margin-right: auto !important;
}

${utilityClasses}
    `}</style>
  );
};

export default StyleInjector;
