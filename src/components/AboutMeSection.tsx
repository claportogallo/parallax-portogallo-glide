import { useEffect, useRef } from "react";

const AboutMeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in-element');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about-me" ref={sectionRef} className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          
          {/* Personal Photos */}
          <div className="fade-in-element opacity-0 space-y-8">
            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-hero rounded-3xl shadow-deep overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80"
                  alt="Claudio Portogallo - Ritratto principale"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-gold/20 rounded-full blur-2xl" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gradient-hero rounded-2xl shadow-elegant overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80"
                  alt="Al lavoro nel studio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-gradient-hero rounded-2xl shadow-elegant overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&q=80"
                  alt="Processo creativo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="lg:col-span-2 fade-in-element opacity-0">
            <div className="max-w-4xl">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-8">
                Ciao, sono Claudio
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                <p>
                  La mia passione per l'architettura è nata tra i vicoli di Firenze, 
                  dove ho imparato che ogni pietra racconta una storia e ogni spazio 
                  può trasformare la vita delle persone. Dopo aver completato i miei 
                  studi al Politecnico di Milano, ho viaggiato per l'Europa studiando 
                  l'architettura contemporanea e tradizionale.
                </p>
                
                <p>
                  Nel 2018 ho fondato il mio studio nel cuore di Firenze, con la 
                  missione di creare spazi che non solo funzionano perfettamente, 
                  ma che toccano l'anima. Ogni progetto è un'opportunità per esplorare 
                  nuove soluzioni, sempre mantenendo un profondo rispetto per il 
                  contesto storico e culturale.
                </p>
                
                <p>
                  Quando non sono al lavoro, mi troverete a esplorare mercati vintage 
                  alla ricerca di pezzi unici, o in giro per l'Italia a fotografare 
                  architetture che mi ispirano. Credo fermamente che l'ispirazione 
                  arrivi da ovunque: da un dettaglio Art Nouveau a Barcellona, 
                  dalla luce che filtra in una chiesa romanica, o semplicemente 
                  dalla conversazione con un artigiano locale.
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-secondary/30 rounded-2xl">
                  <div className="text-3xl font-light text-foreground mb-2">2018</div>
                  <div className="text-sm text-muted-foreground">Anno di Fondazione</div>
                </div>
                <div className="text-center p-6 bg-secondary/30 rounded-2xl">
                  <div className="text-3xl font-light text-foreground mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Progetti Completati</div>
                </div>
                <div className="text-center p-6 bg-secondary/30 rounded-2xl">
                  <div className="text-3xl font-light text-foreground mb-2">3</div>
                  <div className="text-sm text-muted-foreground">Paesi di Lavoro</div>
                </div>
              </div>
              
              <div className="mt-12 p-8 bg-gradient-subtle rounded-3xl border border-border/50">
                <h3 className="text-2xl font-light text-foreground mb-4">La Mia Filosofia</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  "L'architettura non è solo costruire edifici, è creare esperienze. 
                  Ogni spazio che progettiamo deve raccontare la storia di chi lo abita, 
                  rispettare il passato e guardare al futuro con sostenibilità e innovazione."
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-12 h-0.5 bg-accent-gold"></div>
                  <span className="text-sm text-muted-foreground">Claudio Portogallo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;