import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import floatingShapes from "@/assets/floating-shapes.png";

const ParallaxHero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden parallax-container">
      {/* Background Layer - Slowest */}
      <div 
        className="parallax-layer"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBg})`,
            transform: 'scale(1.1)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Floating Shapes Layer - Medium Speed */}
      <div 
        className="parallax-layer"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="relative h-full w-full">
          <img
            src={floatingShapes}
            alt=""
            className="absolute top-1/4 right-1/4 w-64 h-48 opacity-30 floating-element"
          />
          <img
            src={floatingShapes}
            alt=""
            className="absolute bottom-1/4 left-1/4 w-48 h-36 opacity-20 floating-element"
            style={{ transform: "rotate(45deg)" }}
          />
        </div>
      </div>

      {/* Content Layer - Fastest */}
      <div 
        className="parallax-layer flex items-center justify-center"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        <div className="text-center z-20 px-8">
          <div className="mb-8">
            <h1 className="hero-title text-cream-white mb-4">
              Portogallo
              <span className="block text-accent-gold">Design</span>
            </h1>
            <p className="hero-subtitle text-cream-white/80 max-w-2xl mx-auto">
              Architectural design & creative solutions
              <span className="block mt-2">Where form meets function</span>
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-sm text-cream-white/60 tracking-wider">
            <span>FIRENZE</span>
            <span className="w-12 h-px bg-cream-white/30" />
            <span>EST. 2018</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        style={{
          opacity: Math.max(0, 1 - scrollY / 300),
        }}
      >
        <div className="flex flex-col items-center text-cream-white/60">
          <span className="text-xs tracking-widest mb-4">SCROLL</span>
          <div className="w-px h-12 bg-cream-white/30 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default ParallaxHero;