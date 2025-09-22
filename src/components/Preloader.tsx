import { useEffect, useState } from "react";
import logoImage from "@/assets/logo.png";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHiding(true);
      setTimeout(onComplete, 600);
    }, 1800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`preloader ${isHiding ? 'hide' : ''}`}>
      <img 
        src={logoImage} 
        alt="Portogallo Design"
        className="preloader-logo"
      />
    </div>
  );
};

export default Preloader;