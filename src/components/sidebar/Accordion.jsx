const Accordion = ({ title, children, defaultOpen = true }) => (
  <details open={defaultOpen} className="rounded-xl border border-slate-200 bg-white shadow-sm">
    <summary className="cursor-pointer select-none px-4 py-3 text-sm font-semibold text-slate-800">
      {title}
    </summary>
    <div className="space-y-4 border-t border-slate-200 px-4 py-4">{children}</div>
  </details>
);

export default Accordion;
