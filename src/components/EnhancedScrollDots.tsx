import { useEffect, useState } from "react";

interface ScrollDotsProps {
  totalSections?: number;
  isModal?: boolean;
}

const EnhancedScrollDots = ({ totalSections = 4, isModal = false }: ScrollDotsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [trails, setTrails] = useState<Array<{ id: number; top: string }>>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (isModal) {
        // Modal scroll logic
        const modalContent = document.querySelector('.project-modal-content');
        if (!modalContent) return;
        
        const scrollTop = modalContent.scrollTop;
        const scrollHeight = modalContent.scrollHeight - modalContent.clientHeight;
        const scrollPercent = scrollTop / scrollHeight;
        const newIndex = Math.min(Math.floor(scrollPercent * totalSections), totalSections - 1);
        
        if (newIndex !== activeIndex) {
          setActiveIndex(newIndex);
          createTrail(newIndex);
        }
      } else {
        // Site scroll logic
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = scrollTop / docHeight;
        const newIndex = Math.min(Math.floor(scrollPercent * totalSections), totalSections - 1);
        
        if (newIndex !== activeIndex) {
          setActiveIndex(newIndex);
          createTrail(newIndex);
        }
      }
    };

    const createTrail = (index: number) => {
      const trailId = Date.now();
      const dotHeight = 6; // Height of each dot
      const gap = 10; // Gap between dots
      const totalHeight = (totalSections - 1) * (dotHeight + gap);
      const topPosition = (index * (dotHeight + gap)) / totalHeight * 100;
      
      setTrails(prev => [...prev, { id: trailId, top: `${topPosition}%` }]);
      
      // Remove trail after animation
      setTimeout(() => {
        setTrails(prev => prev.filter(trail => trail.id !== trailId));
      }, 1600);
    };

    if (isModal) {
      const modalContent = document.querySelector('.project-modal-content');
      if (modalContent) {
        modalContent.addEventListener('scroll', handleScroll, { passive: true });
        return () => modalContent.removeEventListener('scroll', handleScroll);
      }
    } else {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [activeIndex, totalSections, isModal]);

  const dotClass = isModal ? 'modal-scroll-dots' : 'site-scroll-dots';
  const trailAnimationClass = isModal ? 'modalTrail' : 'siteTrail';

  return (
    <div className={`${dotClass} fixed pointer-events-none z-[999]`}>
      <div className="dots relative">
        {Array.from({ length: totalSections }, (_, index) => (
          <div
            key={index}
            className={`dot w-1.5 h-1.5 rounded-full transition-all duration-150 ${
              index === activeIndex 
                ? 'bg-black scale-110' 
                : 'bg-gray-400 opacity-60'
            }`}
          />
        ))}
      </div>
      
      <div className="trails absolute inset-0 pointer-events-none">
        {trails.map((trail) => (
          <div
            key={trail.id}
            className="trail absolute w-1.5 h-1.5 rounded-full bg-black opacity-75 animate-trail"
            style={{ top: trail.top, left: '4px' }}
          />
        ))}
      </div>

      <style>{`
        .${dotClass} {
          right: ${isModal ? '10px' : '12px'};
          top: ${isModal ? '0' : '0'};
          bottom: 0;
          width: 14px;
          display: flex;
          align-items: center;
        }
        
        .dots {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 0;
          height: ${isModal ? 'calc(100% - 24px)' : 'calc(100vh - 32px)'};
        }
        
        .trails {
          height: ${isModal ? 'calc(100% - 24px)' : 'calc(100vh - 32px)'};
        }
        
        .animate-trail {
          animation: ${trailAnimationClass} 1.6s ease-out forwards;
        }
        
        @keyframes ${trailAnimationClass} {
          0% { opacity: 0.75; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.85); }
        }
        
        @media (max-width: 768px) {
          .${dotClass} {
            right: ${isModal ? '8px' : '8px'};
          }
        }
      `}</style>
    </div>
  );
};

export default EnhancedScrollDots;