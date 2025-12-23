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

  const contrastVars = colors
    .map(
      (color) =>
        `  --contrast--${color.slug}: var(--wp--preset--color--${color.contrast});`
    )
    .join('\n');

  const fontVars = Object.entries(state.typography.sizes)
    .map(
      ([key, size]) =>
        `  --wp--preset--font-size--${key}: ${buildClamp(size.min, size.max)};`
    )
    .join('\n');

  const fontSizeClasses = Object.keys(state.typography.sizes)
    .map(
      (key) =>
        `.has-${key}-font-size { font-size: var(--wp--preset--font-size--${key}); }`
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
${contrastVars}
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

.vertical-space-small {
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--90);
}

body {
  background-color: var(--wp--preset--color--light);
}

.wp-block-button__link {
  padding: 1em;
  border-radius: var(--custom--radius);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

.ccc-testimonial-big-grid {
  column-count: 4;
  column-gap: var(--wp--preset--spacing--40);
  width: 100%;
  padding: var(--wp--preset--spacing--40);
}

@media (max-width: 1200px) {
  .ccc-testimonial-big-grid {
    column-count: 3;
  }
}

@media (max-width: 900px) {
  .ccc-testimonial-big-grid {
    column-count: 2;
  }
}

@media (max-width: 640px) {
  .ccc-testimonial-big-grid {
    column-count: 1;
  }
}

.ccc-testimonial-big-grid__single {
  break-inside: avoid;
  margin-bottom: var(--wp--preset--spacing--40);
  padding: var(--wp--preset--spacing--20);
  border-radius: var(--custom--radius);
  box-shadow: var(--custom--shadow);
  border-width: var(--custom--border-width);
  border-style: var(--custom--border-style);
  border-color: transparent;
  background-color: var(--wp--preset--color--white);
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--20);
}

.ccc-testimonial-big-grid__meta {
  display: flex;
  align-items: center;
  gap: var(--wp--preset--spacing--20);
  padding-top: var(--wp--preset--spacing--20);
  border-top-width: var(--custom--border-width);
  border-top-style: var(--custom--border-style);
  border-top-color: var(--wp--preset--color--light);
}

.ccc-testimonial-big-grid__meta img {
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  border-width: var(--custom--border-width);
  border-style: var(--custom--border-style);
  border-color: transparent;
  object-fit: cover;
}

.ccc-testimonial-big-grid__name {
  margin: 0;
  font-weight: 700;
}

.ccc-testimonial-big-grid__handle {
  margin: 0;
  font-size: var(--wp--preset--font-size--small);
}

.ccc-testimonial-big-grid__single strong > em,
.ccc-testimonial-big-grid__single em > strong {
  background-color: var(--wp--preset--color--secondary);
  color: var(--contrast--secondary);
  font-weight: 700;
  font-style: normal;
  padding: 2px 4px;
  border-radius: var(--custom--radius);
}

.ccc-testimonial-big-grid__single.is-featured {
  column-span: all;
}

.ccc-testimonial-big-grid__single.is-featured > p:first-of-type {
  font-size: var(--wp--preset--font-size--large);
}

.ccc-testimonial-big-grid__meta.is-featured-meta {
  justify-content: space-between;
  flex-wrap: wrap;
}

.ccc-testimonial-big-grid__person {
  display: flex;
  align-items: center;
  gap: var(--wp--preset--spacing--20);
}

.ccc-testimonial-big-grid__company {
  font-weight: 700;
}

.ccc-pricing-pods {
  display: grid;
  grid-template-columns: repeat(var(--pricing-columns, 3), minmax(0, 1fr));
  gap: var(--gap-default);
  padding: var(--wp--preset--spacing--40);
}

.ccc-pricing-pods__card {
  padding: var(--wp--preset--spacing--20);
  border-radius: var(--custom--radius);
  box-shadow: var(--custom--shadow);
  border-width: var(--custom--border-width);
  border-style: var(--custom--border-style);
  border-color: var(--wp--preset--color--light);
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--20);
  background-color: var(--wp--preset--color--light-alt);
}

.ccc-pricing-pods__description {
  font-size: var(--wp--preset--font-size--small);
  margin: 0;
}

.ccc-pricing-pods__price {
  font-size: var(--wp--preset--font-size--x-large);
  font-weight: 700;
  margin: 0;
}

.ccc-pricing-pods__features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--10);
}

.ccc-pricing-pods__features li {
  padding: var(--wp--preset--spacing--10) var(--wp--preset--spacing--10);
  border-bottom: 1px solid var(--wp--preset--color--light);
  display: flex;
  align-items: center;
  gap: var(--wp--preset--spacing--10);
}

.ccc-pricing-pods__features li.is-active {
  background-color: transparent;
  color: inherit;
  opacity: 1;
}

.ccc-pricing-pods__features li:not(.is-active) {
  background-color: transparent;
  color: inherit;
  opacity: 0.6;
}

.ccc-pricing-pods__features li.is-active i {
  color: var(--wp--preset--color--secondary);
}

.ccc-thin-cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--gap-default);
  gap: var(--wp--preset--spacing--20);
  border-radius: var(--custom--radius);
  box-shadow: var(--custom--shadow);
}

.ccc-thin-cta h2 {
  margin: 0;
}

.ccc-thin-cta .wp-block-buttons {
  margin: 0;
}

.ccc-medium-cta {
  display: flex;
  flex-wrap: nowrap;
  gap: var(--gap-default);
  padding: var(--gap-default);
  border-radius: var(--custom--radius);
  box-shadow: var(--custom--shadow);
  background-color: var(--wp--preset--color--light-alt);
}

.ccc-medium-cta__content {
  flex: 0 0 60%;
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--20);
}

.ccc-medium-cta__content h2 {
  margin: 0;
}



.ccc-medium-cta__image img {
  width: 100%;
  max-width: 420px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: var(--custom--radius);
}

@media (max-width: 768px) {
  .ccc-medium-cta {
    flex-direction: column;
    flex-wrap: wrap;
  }
  .ccc-medium-cta__image {
    order: -1;
    justify-content: center;
  }
  .ccc-medium-cta__content {
    order: 1;
  }
}

.ccc-large-CTA {
  padding: var(--gap-default);
  border-radius: var(--custom--radius);
  box-shadow: var(--custom--shadow);
  display: flex;
  justify-content: center;
}

.ccc-large-CTA__content {
  max-width: var(--wp--style--global--content-size);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--gap-default);
}

.ccc-large-CTA__content h2 {
  margin: 0;
}

.ccc-large-CTA__content p {
  margin: 0;
  line-height: 1.6;
}

${utilityClasses}
${fontSizeClasses}
    `}</style>
  );
};

export default StyleInjector;
