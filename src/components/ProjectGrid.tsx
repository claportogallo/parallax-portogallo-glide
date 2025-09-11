import { useEffect, useRef } from "react";

const ProjectGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!gridRef.current) return;
      
      const scrolled = window.scrollY;
      const cards = gridRef.current.querySelectorAll('.project-card');
      
      cards.forEach((card, index) => {
        const element = card as HTMLElement;
        const speed = 0.1 + (index % 3) * 0.05;
        const yPos = scrolled * speed;
        element.style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Gelateria Firenze",
      location: "Firenze · 2025",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&q=80"
    },
    {
      title: "Wedding C+G",
      location: "Firenze · 2024",
      category: "Event Design",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80"
    },
    {
      title: "Home* Project",
      location: "Milano · 2018",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=400&q=80"
    },
    {
      title: "Vaso C.",
      location: "Napoli · 2025",
      category: "Product Design",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80"
    },
    {
      title: "Wedding M+S",
      location: "Amsterdam · 2024",
      category: "Event Design",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=400&q=80"
    },
    {
      title: "Concept Villa Dubai",
      location: "Milano · 2023",
      category: "Architecture",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80"
    }
  ];

  return (
    <section id="projects" className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-6">
            Selected Works
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            A curated collection of architectural and design projects
          </p>
        </div>

        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-cream-white z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="mb-2">
                  <span className="text-xs tracking-widest text-accent-gold uppercase">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-light mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-cream-white/70">
                  {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;