import { useState } from "react";
import Preloader from "@/components/Preloader";
import EnhancedParallaxHero from "@/components/EnhancedParallaxHero";
import EnhancedFloatingNavigation from "@/components/EnhancedFloatingNavigation";
import EnhancedProjectGrid from "@/components/EnhancedProjectGrid";
import EnhancedAboutSection from "@/components/EnhancedAboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  if (showPreloader) {
    return <Preloader onComplete={() => setShowPreloader(false)} />;
  }

  return (
    <div className="relative">
      <EnhancedFloatingNavigation />
      
      <main>
        <EnhancedParallaxHero />
        <EnhancedProjectGrid />
        <EnhancedAboutSection />
        <ContactSection />
        
        {/* Footer */}
        <footer className="py-12 px-8 border-t border-border bg-secondary/20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-sm text-muted-foreground">
              © 2025 Portogallo.Design. All rights reserved.
            </div>
            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <span>Firenze, Italia</span>
              <span>•</span>
              <span>Architecture & Design</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
