import { useState } from "react";
import EnhancedPreloader from "@/components/EnhancedPreloader";
import EnhancedFloatingTabs from "@/components/EnhancedFloatingTabs";
import EnhancedScrollDots from "@/components/EnhancedScrollDots";
import EnhancedProjectGrid from "@/components/EnhancedProjectGrid";
import EnhancedAboutSection from "@/components/EnhancedAboutSection";
import ContactSection from "@/components/ContactSection";
import logoImage from "@/assets/logo.png";

const Index = () => {
  const [currentMode, setCurrentMode] = useState('home');

  const handleTabClick = (tabId: string) => {
    setCurrentMode(tabId === 'projects' ? 'home' : tabId);
  };

  return (
    <div className="min-h-screen">
      <EnhancedPreloader />
      <EnhancedScrollDots />
      
      {/* Header */}
      <header className="topbar left fixed left-0 top-0 p-5 z-[140]">
        <div className="brand">
          <a href="#" onClick={() => setCurrentMode('home')}>
            <img 
              src={logoImage}
              alt="Portogallo.Design"
              className="logo-img"
              style={{ height: "var(--logo-site)" }}
            />
          </a>
        </div>
      </header>

      <EnhancedFloatingTabs onTabClick={handleTabClick} />

      {/* Main Content */}
      <main className="stage pt-32 px-8 pb-12">
        {currentMode === 'home' && (
          <div className="fade-in-element">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
                Portogallo.Design
              </h1>
              <p className="text-xl opacity-70 font-light max-w-2xl mx-auto">
                Architettura, Design & Artigianato
              </p>
            </div>
            <EnhancedProjectGrid />
          </div>
        )}

        {currentMode === 'about' && <EnhancedAboutSection />}
        {currentMode === 'contact' && <ContactSection />}
      </main>
    </div>
  );
};

export default Index;
