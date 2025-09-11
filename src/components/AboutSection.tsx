import { useEffect, useRef } from "react";

const AboutSection = () => {
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
    <section id="about" ref={sectionRef} className="py-24 px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in-element opacity-0">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-8">
              Design Philosophy
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                Every space tells a story. My approach to architectural design 
                centers on understanding the narrative behind each project, 
                creating environments that resonate with their inhabitants.
              </p>
              <p>
                From intimate residential spaces to grand commercial venues, 
                I believe in the power of thoughtful design to transform 
                not just spaces, but experiences.
              </p>
              <p>
                Based in Florence, inspired by Italian design heritage, 
                yet always looking forward to contemporary solutions.
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div>
                <h3 className="text-2xl font-light text-foreground">50+</h3>
                <p className="text-sm text-muted-foreground tracking-wide">Projects Completed</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <h3 className="text-2xl font-light text-foreground">7</h3>
                <p className="text-sm text-muted-foreground tracking-wide">Years Experience</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <h3 className="text-2xl font-light text-foreground">3</h3>
                <p className="text-sm text-muted-foreground tracking-wide">Countries</p>
              </div>
            </div>
          </div>

          <div className="fade-in-element opacity-0">
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-hero rounded-3xl shadow-deep overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                  alt="Designer portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-gold/20 rounded-full blur-3xl" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-warm-stone/30 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;