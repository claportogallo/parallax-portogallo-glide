import ParallaxHero from "@/components/ParallaxHero";
import FloatingNavigation from "@/components/FloatingNavigation";
import ProjectGrid from "@/components/ProjectGrid";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="relative">
      <FloatingNavigation />
      
      <main>
        <ParallaxHero />
        <ProjectGrid />
        <AboutSection />
        
        {/* Contact Section */}
        <section id="contact" className="py-24 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-8">
              Let's Create Together
            </h2>
            <p className="text-xl text-muted-foreground font-light mb-12 max-w-2xl mx-auto">
              Ready to bring your vision to life? Let's discuss your next project 
              and explore the possibilities.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:info@portogallo.design"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-2xl hover:shadow-float transition-all duration-300 tracking-wide"
              >
                Start a Conversation
              </a>
              <a
                href="tel:+39123456789"
                className="px-8 py-4 border border-border text-foreground rounded-2xl hover:bg-secondary transition-all duration-300 tracking-wide"
              >
                Call Direct
              </a>
            </div>
          </div>
        </section>
        
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
