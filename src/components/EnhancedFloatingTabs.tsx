import { useState, useEffect } from "react";

interface Tab {
  id: string;
  label: string;
  icon: string;
}

interface EnhancedFloatingTabsProps {
  onTabClick: (tabId: string) => void;
  activeTab?: string;
}

const tabs: Tab[] = [
  { id: "projects", label: "Progetti", icon: "🏗️" },
  { id: "about", label: "About me", icon: "👨‍💼" },
  { id: "contact", label: "Contatti", icon: "📧" }
];

const EnhancedFloatingTabs = ({ onTabClick, activeTab }: EnhancedFloatingTabsProps) => {
  const [isCompact, setIsCompact] = useState(false);
  const [activeTabState, setActiveTabState] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsCompact(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (tabId: string) => {
    setActiveTabState(tabId);
    onTabClick(tabId);
  };

  return (
    <div 
      id="tabs"
      className={`tabs ribbon fixed left-0 top-0 right-0 z-[130] flex gap-3 items-start justify-end pr-[6vw] pointer-events-none ${
        isCompact ? 'compact' : ''
      }`}
      style={{ height: 'var(--top-corridor)' }}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`vtab pointer-events-auto bg-black text-white border-0 cursor-pointer relative transition-all duration-150 ${
            activeTabState === tab.id ? 'active' : ''
          }`}
          onClick={() => handleTabClick(tab.id)}
          style={{
            width: 'var(--tab-thickness)',
            height: 'calc(var(--tab-length) + 20px)',
            marginTop: '-25px',
            writingMode: 'vertical-rl',
            textOrientation: 'mixed'
          }}
        >
          <span 
            className="label absolute bottom-2 left-2 transform rotate-180 text-left font-black tracking-wide"
            style={{ letterSpacing: '0.4px' }}
          >
            {tab.label}
          </span>
          <span 
            className="icon absolute bottom-2 left-1 hidden"
            style={{ writingMode: 'horizontal-tb', transform: 'none' }}
          >
            {tab.icon}
          </span>
        </button>
      ))}

      <style>{`
        @media (min-width: 901px) {
          .vtab:hover {
            height: calc(var(--tab-length) + 60px);
            transition: height 0.15s ease;
          }

          /* Compact mode: active tab stays large, others shrink */
          .compact .vtab.active {
            height: calc(var(--tab-length) + 20px) !important;
          }
          .compact .vtab.active .label { display: block !important; }
          .compact .vtab.active .icon { display: none !important; }

          .compact .vtab:not(.active) {
            height: 72px !important;
          }
          .compact .vtab:not(.active) .label { display: none !important; }
          .compact .vtab:not(.active) .icon { display: block !important; }

          /* Disable hover growth for inactive tabs in compact mode */
          .compact .vtab:not(.active):hover {
            height: 72px !important;
            transition: none !important;
          }
        }

        @media (max-width: 900px) {
          .tabs {
            position: fixed;
            top: calc(var(--headerH) + 8px);
            right: -12px;
            left: auto;
            width: auto;
            height: auto;
            flex-direction: column;
            gap: 3px;
            padding: 0;
          }

          .vtab {
            width: 130px !important;
            height: 40px !important;
            margin: 0;
            writing-mode: horizontal-tb !important;
            text-orientation: unset !important;
            border-radius: 20px 0 0 20px;
          }

          .vtab .label {
            position: static !important;
            transform: none !important;
            font-size: 14px;
            font-weight: 700;
          }

          .vtab .icon {
            display: none !important;
          }

          /* Mobile compact: active stays normal, others show icon only */
          .compact .vtab:not(.active) {
            width: 50px !important;
          }
          .compact .vtab:not(.active) .label { display: none !important; }
          .compact .vtab:not(.active) .icon { 
            display: block !important;
            position: static;
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  );
};

export default EnhancedFloatingTabs;