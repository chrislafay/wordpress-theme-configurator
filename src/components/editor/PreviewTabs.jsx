import { useMemo } from 'react';

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

const HeadersPreview = ({ colors }) => {
  const primary = colors.find((c) => c.slug === 'primary');
  const primaryContrast = primary?.contrast || 'white';
  const secondary = colors.find((c) => c.slug === 'secondary');
  const secondaryContrast = secondary?.contrast || 'white';

  return (
    <>
      <div
        className="wp-block-group alignfull has-primary-background-color"
        style={{
          padding: '64px 24px',
          color: `var(--wp--preset--color--${primaryContrast})`,
          textAlign: 'center'
        }}
      >
        <p
          className="eyebrow"
          style={{
            margin: '0 auto 12px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontWeight: 600
          }}
        >
          Elevated headline
        </p>
        <h1 style={{ margin: '0 auto 12px', maxWidth: '840px' }}>Large Centered Text</h1>
        <p
          className="has-large-font-size"
          style={{
            margin: '0 auto 24px',
            maxWidth: '760px',
            opacity: 0.9,
            lineHeight: 1.5
          }}
        >
          A single WP Group with eyebrow, headline, supporting paragraph, and paired buttons. Uses
          the Primary background and respects your selected contrast color.
        </p>
        <div
          className="wp-block-buttons"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap'
          }}
        >
          <div className="wp-block-button">
            <a
              className="wp-block-button__link has-primary-background-color"
              style={{
                color: `var(--wp--preset--color--${primaryContrast})`,
                padding: '12px 20px',
                borderRadius: 'var(--custom--radius)',
                boxShadow: 'var(--custom--shadow)',
                border: '1px solid transparent'
              }}
            >
              Primary Button
            </a>
          </div>
          <div className="wp-block-button is-style-outline">
            <a
              className="wp-block-button__link"
              style={{
                color: `var(--wp--preset--color--${primaryContrast})`,
                padding: '12px 20px',
                borderRadius: 'var(--custom--radius)',
                boxShadow: 'var(--custom--shadow)',
                border: `1px solid var(--wp--preset--color--${primaryContrast})`
              }}
            >
              Outline Button
            </a>
          </div>
        </div>
      </div>

      <div className="has-primary-background-color rounded-2xl p-8 shadow-sm">
        <p className="text-sm uppercase tracking-[0.2em]">Layout A</p>
        <h2 className="mt-2 text-3xl font-bold">Bold hero using primary color</h2>
        <p
          className="mt-2 max-w-2xl text-lg"
          style={{ color: `var(--wp--preset--color--${primaryContrast})`, opacity: 0.9 }}
        >
          Buttons pull custom radius and shadow tokens for a consistent look across the system.
        </p>
        <button
          className="mt-4 px-4 py-2 font-semibold"
          style={{
            borderRadius: 'var(--custom--radius)',
            boxShadow: 'var(--custom--shadow)',
            backgroundColor: 'var(--wp--preset--color--dark)',
            color: 'var(--wp--preset--color--white)'
          }}
        >
          Primary Action
        </button>
      </div>

      <div
        className="grid gap-6 rounded-2xl p-6 shadow-sm md:grid-cols-2"
        style={{ backgroundColor: 'var(--wp--preset--color--light)' }}
      >
        <div
          className="h-full rounded-xl"
          style={{ backgroundColor: 'var(--wp--preset--color--light)', border: '1px solid var(--wp--preset--color--light)' }}
        />
        <div
          className="has-secondary-background-color rounded-xl p-6"
          style={{ color: `var(--wp--preset--color--${secondaryContrast})` }}
        >
          <p className="text-xs uppercase tracking-[0.2em]">Layout B</p>
          <h3 className="mt-2 text-2xl font-bold">Split hero with secondary</h3>
          <p className="mt-2" style={{ opacity: 0.9 }}>
            Content area inherits the text contrast you selected in the Colors section.
          </p>
          <button
            className="mt-4 px-4 py-2 font-semibold"
            style={{
              borderRadius: 'var(--custom--radius)',
              borderWidth: 'var(--custom--border-width)',
              borderStyle: 'var(--custom--border-style)',
              borderColor: 'var(--wp--preset--color--light)',
              color: 'var(--wp--preset--color--light)'
            }}
          >
            Ghost Button
          </button>
        </div>
      </div>
    </>
  );
};

const LayoutsPreview = ({ defaultGap }) => (
  <div className="rounded-2xl p-6 shadow-sm" style={{ backgroundColor: 'var(--wp--preset--color--light)' }}>
    <p className="text-sm font-semibold">3-Column Grid</p>
    <div
      className="mt-4 grid"
      style={{
        gap: 'var(--gap-default)',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))'
      }}
    >
      {[1, 2, 3].map((col) => (
        <div
          key={col}
          className="has-light-background-color rounded-xl p-4 shadow-sm"
          style={{
            boxShadow: 'var(--custom--shadow)',
            borderRadius: 'var(--custom--radius)',
            border: '1px solid var(--wp--preset--color--light)'
          }}
        >
          <h4 className="text-lg font-semibold">Column {col}</h4>
          <p className="text-sm">
            Gap uses spacing Step {defaultGap} configured in the sidebar.
          </p>
        </div>
      ))}
    </div>
  </div>
);

const ComponentsPreview = ({ colors }) => {
  const buttons = useMemo(() => colors.filter((c) => !c.locked), [colors]);

  return (
    <div className="space-y-4">
      <div className="rounded-2xl p-4 shadow-sm" style={{ backgroundColor: 'var(--wp--preset--color--light)' }}>
        <p className="text-sm font-semibold">Buttons</p>
        <div className="mt-3 flex flex-wrap gap-3">
          {buttons.map((color) => (
            <button
              key={color.slug}
              className="px-4 py-2 text-sm font-semibold"
              style={{
                backgroundColor: `var(--wp--preset--color--${color.slug})`,
                color: `var(--wp--preset--color--${color.contrast})`,
                borderRadius: 'var(--custom--radius)',
                boxShadow: 'var(--custom--shadow)'
              }}
            >
              {color.label}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-2xl p-4 shadow-sm" style={{ backgroundColor: 'var(--wp--preset--color--light)' }}>
        <p className="text-sm font-semibold">Cards</p>
        <div className="mt-3 grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((card) => (
            <div
              key={card}
              className="has-light-background-color p-4"
              style={{
                boxShadow: 'var(--custom--shadow)',
                borderRadius: 'var(--custom--radius)',
                borderWidth: 'var(--custom--border-width)',
                borderStyle: 'var(--custom--border-style)',
                borderColor: 'var(--wp--preset--color--light)'
              }}
            >
              <p className="text-sm">Card {card}</p>
              <h4 className="text-lg font-semibold">Design Tokens</h4>
              <p className="mt-1 text-sm">
                Borders and shadows mirror your custom tokens.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PreviewTabs = ({ state, activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'Fonts':
        return <FontsPreview />;
      case 'Headers':
        return <HeadersPreview colors={state.colors} />;
      case 'Layouts':
        return <LayoutsPreview defaultGap={state.spacing.defaultGap} />;
      case 'Components':
        return <ComponentsPreview colors={state.colors} />;
      default:
        return null;
    }
  };

  return <div className="wp-block-group is-layout-constrained vertical-space-small">{renderContent()}</div>;
};

export default PreviewTabs;
