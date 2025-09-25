import { useEffect, useState } from "react";
import logoImage from "@/assets/logo.png";

const EnhancedPreloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      id="preloader" 
      className={`fixed inset-0 z-[9999] bg-white transition-opacity duration-700 ${
        !isVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="pre-wrap h-full flex flex-col items-center justify-center">
        <img 
          src={logoImage}
          alt="Portogallo.Design"
          className="logo-pre mb-8 transform -translate-y-10"
          style={{ height: "var(--logo-desktop-large)" }}
        />
        
        <div className="pre-bar flex gap-2">
          {Array.from({ length: 12 }, (_, i) => (
            <span
              key={i}
              className="w-2 h-2 rounded-full bg-gray-300 animate-fill-dot"
              style={{
                animationDelay: `${i * 0.15}s`,
                animationFillMode: 'forwards'
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fill-dot {
          from { background: #e6e6e6; }
          to { background: #0b0b0c; }
        }
        .animate-fill-dot {
          animation: fill-dot 0.3s linear forwards;
        }
      `}</style>
    </div>
  );
};

export default EnhancedPreloader;