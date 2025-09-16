import ParallaxHero from "@/components/ParallaxHero";
import FloatingNavigation from "@/components/FloatingNavigation";
import ProjectGrid from "@/components/ProjectGrid";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="relative">
      <FloatingNavigation />
      
      <main>
        <ParallaxHero />
        <ProjectGrid />
        <AboutSection />
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
