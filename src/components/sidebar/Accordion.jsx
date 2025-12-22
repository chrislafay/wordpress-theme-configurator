import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Accordion = ({ title, children, defaultOpen = false }) => (
  <details open={defaultOpen} className="group border-b border-slate-200">
    <summary className="flex cursor-pointer select-none items-center justify-between px-1 pb-3 pt-4 text-base font-semibold text-slate-800">
      <span>{title}</span>
      <FontAwesomeIcon
        icon={faChevronRight}
        className="text-slate-500 transition-transform duration-200 group-open:rotate-90"
      />
    </summary>
    <div className="space-y-4 px-1 pb-4">{children}</div>
  </details>
);

export default Accordion;
