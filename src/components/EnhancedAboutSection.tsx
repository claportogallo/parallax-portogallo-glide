import { useEffect, useRef } from "react";

const EnhancedAboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.fade-in-element');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('is-visible');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Mouse repulsion effect for about photos
  useEffect(() => {
    const about = sectionRef.current;
    if (!about) return;

    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const imgs = about.querySelectorAll('.photo-wrap img, .about-float');
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = about.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      
      imgs.forEach((img) => {
        const imgElement = img as HTMLElement;
        const r = imgElement.getBoundingClientRect();
        const ix = (r.left + r.right) / 2 - rect.left;
        const iy = (r.top + r.bottom) / 2 - rect.top;
        const dx = ix - cx;
        const dy = iy - cy;
        const dist = Math.hypot(dx, dy) || 1;
        const force = Math.min(12, 90 / dist);
        
        imgElement.style.transform = `translate(${(dx / dist) * force}px, ${(dy / dist) * force}px)`;
      });
    };

    const handleMouseLeave = () => {
      imgs.forEach((img) => {
        (img as HTMLElement).style.transform = '';
      });
    };

    about.addEventListener('mousemove', handleMouseMove);
    about.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      about.removeEventListener('mousemove', handleMouseMove);
      about.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in-element">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-8">
              About me
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                Sono <strong>Claudio Portogallo</strong>, architetto e designer con base a Firenze. 
                Mi occupo di architettura, brand identity, artigianato ceramico e wedding design.
              </p>
              <p>
                La mia formazione al Politecnico di Milano mi ha insegnato l'importanza del <strong>metodo</strong> 
                e della <strong>sostenibilità</strong>. Ogni progetto nasce dall'ascolto delle esigenze del cliente 
                e dal dialogo con il contesto, cercando sempre l'equilibrio tra bellezza e funzionalità.
              </p>
              <p>
                Dal 2018 lavoro come libero professionista, collaborando con studi di architettura, 
                aziende e privati per creare <strong>soluzioni autentiche</strong> che raccontano storie uniche.
              </p>
              
              <div className="grid grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-light text-accent-gold mb-2">50+</div>
                  <div className="text-sm uppercase tracking-wide text-muted-foreground">Progetti</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-accent-gold mb-2">7</div>
                  <div className="text-sm uppercase tracking-wide text-muted-foreground">Anni</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-accent-gold mb-2">3</div>
                  <div className="text-sm uppercase tracking-wide text-muted-foreground">Paesi</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="fade-in-element">
            <div className="relative photo-wrap">
              <div className="aspect-[4/5] bg-gradient-hero rounded-3xl shadow-deep overflow-hidden">
                <img 
                  src="/api/placeholder/400/500" 
                  alt="Ritratto di Claudio Portogallo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <img 
                  src="/api/placeholder/200/200" 
                  alt="Studio e dettagli" 
                  className="w-full aspect-square object-cover rounded-2xl shadow-deep about-float"
                />
                <img 
                  src="/api/placeholder/200/200" 
                  alt="Processo e materiali" 
                  className="w-full aspect-square object-cover rounded-2xl shadow-deep about-float"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-gold/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-warm-stone/30 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedAboutSection;