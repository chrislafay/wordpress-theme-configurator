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
}

body, p { font-family: var(--wp--preset--font-family--body); }
h1, h2, h3, h4, h5, h6 { font-family: var(--wp--preset--font-family--heading); }

${utilityClasses}
    `}</style>
  );
};

export default StyleInjector;
