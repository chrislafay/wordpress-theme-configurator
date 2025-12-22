const clampFromSizes = (sizes) =>
  Object.entries(sizes).map(([slug, value]) => ({
    slug,
    name: slug,
    size: `clamp(${value.min}, 2vw + 1rem, ${value.max})`
  }));

export const generateThemeJson = (state) => {
  const palette = state.colors.map((color) => ({
    slug: color.slug,
    color: color.hex,
    name: color.label
  }));

  const fontFamilies = [
    { fontFamily: state.typography.fonts.heading, slug: 'heading', name: 'Heading' },
    { fontFamily: state.typography.fonts.body, slug: 'body', name: 'Body' }
  ];

  const theme = {
    version: 2,
    settings: {
      appearanceTools: true,
      layout: {
        contentSize: state.spacing.contentSize || '1140px',
        wideSize: state.spacing.wideSize || '1140px'
      },
      color: {
        defaultPalette: false,
        palette
      },
      typography: {
        fontFamilies,
        fontSizes: clampFromSizes(state.typography.sizes)
      },
      spacing: {
        spacingScale: {
          steps: state.spacing.steps
        }
      }
    }
  };

  return JSON.stringify(theme, null, 2);
};

export const generateSCSS = (state) => {
  const spacingLines = Object.keys(state.spacing.steps)
    .sort((a, b) => Number(a) - Number(b))
    .map((key) => `$spacing-${key}: var(--wp--preset--spacing--${key});`)
    .join('\n');

  const contrastBlocks = state.colors
    .filter((color) => !color.locked)
    .map(
      (color) => `// ${color.label} Loop
.has-${color.slug}-background-color {
  background-color: var(--wp--preset--color--${color.slug}) !important;
  color: var(--wp--preset--color--${color.contrast}) !important;
}`
    )
    .join('\n\n');

  const textHelpers = state.colors
    .map(
      (color) =>
        `.has-${color.slug}-color { color: var(--wp--preset--color--${color.slug}) !important; }`
    )
    .join('\n');

  return `// 1. Color Variables
$primary: var(--wp--preset--color--primary);
$secondary: var(--wp--preset--color--secondary);
$tertiary: var(--wp--preset--color--tertiary);
$dark: var(--wp--preset--color--dark);
$light: var(--wp--preset--color--light);
$black: var(--wp--preset--color--black);
$white: var(--wp--preset--color--white);

// 2. Spacing Variables
${spacingLines}
$gap-default: var(--wp--preset--spacing--${state.spacing.defaultGap});

// 3. Custom Vars
$box-shadow: var(--custom--shadow);
$border-radius: var(--custom--radius);
$border-width: var(--custom--border-width);
$border-style: var(--custom--border-style);

// AUTOMATED CONTRAST CLASSES
// Based on Project Configuration

// Primary Loop
.has-primary-background-color {
  background-color: var(--wp--preset--color--primary) !important;
  color: var(--wp--preset--color--${state.colors.find((c) => c.slug === 'primary')?.contrast ?? 'white'}) !important;
}

// Secondary Loop
.has-secondary-background-color {
  background-color: var(--wp--preset--color--secondary) !important;
  color: var(--wp--preset--color--${state.colors.find((c) => c.slug === 'secondary')?.contrast ?? 'white'}) !important;
}

// Tertiary Loop
.has-tertiary-background-color {
  background-color: var(--wp--preset--color--tertiary) !important;
  color: var(--wp--preset--color--${state.colors.find((c) => c.slug === 'tertiary')?.contrast ?? 'white'}) !important;
}

// Dark Loop
.has-dark-background-color {
  background-color: var(--wp--preset--color--dark) !important;
  color: var(--wp--preset--color--${state.colors.find((c) => c.slug === 'dark')?.contrast ?? 'white'}) !important;
}

// Light Loop
.has-light-background-color {
  background-color: var(--wp--preset--color--light) !important;
  color: var(--wp--preset--color--${state.colors.find((c) => c.slug === 'light')?.contrast ?? 'white'}) !important;
}

${contrastBlocks}

// Generic Text Color Helpers
${textHelpers}
`;
};
