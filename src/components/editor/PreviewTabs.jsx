import { useMemo, useState } from 'react';

const TabButton = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`rounded-lg px-4 py-2 text-sm font-semibold ${
      active ? 'bg-slate-900 text-white' : 'bg-white text-slate-700'
    } shadow-sm ring-1 ring-slate-200`}
  >
    {label}
  </button>
);

const FontsPreview = () => (
  <div className="space-y-3">
    <h1 className="text-4xl font-bold">Heading 1 - The quick brown fox</h1>
    <h2 className="text-3xl font-semibold">Heading 2 - A design language</h2>
    <h3 className="text-2xl font-semibold">Heading 3 - Systemized</h3>
    <h4 className="text-xl font-semibold">Heading 4 - Typography</h4>
    <h5 className="text-lg font-semibold">Heading 5 - Harmony</h5>
    <h6 className="text-base font-semibold">Heading 6 - Details</h6>
    <p className="text-base leading-relaxed text-slate-700">
      Body text using the body font. Adjust min/max fluid sizes in the sidebar to see the fluid
      type ramp update instantly. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>
);

const HeadersPreview = () => (
  <div className="space-y-6">
    <div className="has-primary-background-color rounded-2xl p-8 shadow-sm">
      <p className="text-sm uppercase tracking-[0.2em]">Layout A</p>
      <h2 className="mt-2 text-3xl font-bold">Bold hero using primary color</h2>
      <p className="mt-2 max-w-2xl text-lg text-white/80">
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

    <div className="grid gap-6 rounded-2xl bg-slate-100 p-6 shadow-sm md:grid-cols-2">
      <div className="h-full rounded-xl bg-slate-300" />
      <div className="has-secondary-background-color rounded-xl p-6">
        <p className="text-xs uppercase tracking-[0.2em]">Layout B</p>
        <h3 className="mt-2 text-2xl font-bold">Split hero with secondary</h3>
        <p className="mt-2 text-white/80">
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
  </div>
);

const LayoutsPreview = ({ defaultGap }) => (
  <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
    <p className="text-sm font-semibold text-slate-600">3-Column Grid</p>
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
          className="has-light-background-color rounded-xl border border-slate-200 p-4 shadow-sm"
          style={{ boxShadow: 'var(--custom--shadow)', borderRadius: 'var(--custom--radius)' }}
        >
          <h4 className="text-lg font-semibold">Column {col}</h4>
          <p className="text-sm text-slate-600">
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
      <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
        <p className="text-sm font-semibold text-slate-700">Buttons</p>
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

      <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
        <p className="text-sm font-semibold text-slate-700">Cards</p>
        <div className="mt-3 grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((card) => (
            <div
              key={card}
              className="has-light-background-color border border-slate-200 p-4"
              style={{
                boxShadow: 'var(--custom--shadow)',
                borderRadius: 'var(--custom--radius)',
                borderWidth: 'var(--custom--border-width)',
                borderStyle: 'var(--custom--border-style)'
              }}
            >
              <p className="text-sm text-slate-600">Card {card}</p>
              <h4 className="text-lg font-semibold text-slate-900">Design Tokens</h4>
              <p className="mt-1 text-sm text-slate-600">
                Borders and shadows mirror your custom tokens.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PreviewTabs = ({ state }) => {
  const [activeTab, setActiveTab] = useState('Fonts');

  const renderContent = () => {
    switch (activeTab) {
      case 'Fonts':
        return <FontsPreview />;
      case 'Headers':
        return <HeadersPreview />;
      case 'Layouts':
        return <LayoutsPreview defaultGap={state.spacing.defaultGap} />;
      case 'Components':
        return <ComponentsPreview colors={state.colors} />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {['Fonts', 'Headers', 'Layouts', 'Components'].map((tab) => (
          <TabButton
            key={tab}
            label={tab}
            active={tab === activeTab}
            onClick={() => setActiveTab(tab)}
          />
        ))}
      </div>
      <div className="rounded-2xl bg-slate-50 p-6 shadow-inner">{renderContent()}</div>
    </div>
  );
};

export default PreviewTabs;
