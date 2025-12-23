import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { createContext, useContext, useMemo, useState } from 'react';

const AccordionContext = createContext(null);

export const AccordionProvider = ({ initialOpenId, children }) => {
  const [activeId, setActiveId] = useState(initialOpenId || null);
  const value = useMemo(() => ({ activeId, setActiveId }), [activeId]);
  return <AccordionContext.Provider value={value}>{children}</AccordionContext.Provider>;
};

const Accordion = ({ id, title, children, defaultOpen = false }) => {
  const ctx = useContext(AccordionContext);
  const isControlled = Boolean(ctx);
  const [localOpen, setLocalOpen] = useState(defaultOpen);
  const isOpen = isControlled ? ctx.activeId === id : localOpen;

  const handleToggle = (event) => {
    event.preventDefault();
    if (isControlled) {
      ctx.setActiveId(ctx.activeId === id ? null : id);
    } else {
      setLocalOpen((prev) => !prev);
    }
  };

  return (
    <details open={isOpen} className="group border-b border-slate-200">
      <summary
        onClick={handleToggle}
        className={`flex cursor-pointer select-none items-center justify-between px-1 pb-3 pt-4 text-base font-semibold text-slate-800 ${
          isOpen ? 'underline' : ''
        }`}
        aria-expanded={isOpen}
        aria-controls={`${id}-panel`}
        role="button"
      >
        <span>{title}</span>
        <FontAwesomeIcon
          icon={faChevronRight}
          className={`text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
        />
      </summary>
      <div id={`${id}-panel`} className="space-y-4 px-1 pb-4">
        {children}
      </div>
    </details>
  );
};

export default Accordion;
