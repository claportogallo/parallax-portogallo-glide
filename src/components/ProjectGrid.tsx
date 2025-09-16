import { useEffect, useRef, useState } from "react";
import ProjectModal from "./ProjectModal";

const ProjectGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&q=80",
      description: "Progetto di restyling completo per una gelateria storica nel centro di Firenze. L'intervento ha saputo coniugare la tradizione artigianale con un design contemporaneo e accogliente.",
      fullDescription: "Il progetto ha previsto la riorganizzazione degli spazi, l'introduzione di materiali naturali come il legno di castagno e la pietra serena, e un sistema di illuminazione studiato per esaltare i prodotti. Particolare attenzione è stata data alla sostenibilità, con l'installazione di impianti ad alta efficienza energetica.",
      year: "2025",
      client: "Gelateria Vivoli",
      area: "85 mq",
      gallery: [
        { url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80", alt: "Vista dell'interno con bancone" },
        { url: "https://images.unsplash.com/photo-1556909114-9f5ba27df8fc?w=600&q=80", alt: "Dettaglio illuminazione" },
        { url: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80", alt: "Area degustazione" }
      ]
    },
    {
      title: "Wedding C+G",
      location: "Firenze · 2024",
      category: "Event Design",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80",
      description: "Allestimento per matrimonio in villa storica toscana. Progettazione completa degli spazi celebrativi e ricettivi con particolare attenzione all'integrazione con l'architettura esistente.",
      fullDescription: "L'evento ha richiesto la creazione di scenografie temporanee che rispettassero l'eleganza della villa settecentesca. Sono stati utilizzati materiali naturali e una palette cromatica ispirata ai colori della campagna toscana.",
      year: "2024",
      client: "Famiglia Corsini",
      area: "Villa + Giardini 2000 mq",
      gallery: [
        { url: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=600&q=80", alt: "Allestimento cerimonia" },
        { url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80", alt: "Decorazioni floreali" }
      ]
    },
    {
      title: "Home* Project",
      location: "Milano · 2018",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=400&q=80",
      description: "Ristrutturazione completa di appartamento anni '60 nel quartiere Brera. Il progetto ha trasformato la distribuzione interna creando un open space luminoso e funzionale.",
      fullDescription: "L'intervento ha previsto la demolizione di tramezzi non portanti, l'installazione di ampie vetrate e l'uso di materiali contemporanei come microcemento e acciaio corten. Il risultato è uno spazio che dialoga con il contesto urbano milanese.",
      year: "2018",
      client: "Privato",
      area: "120 mq",
      gallery: [
        { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80", alt: "Soggiorno open space" },
        { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80", alt: "Cucina integrata" },
        { url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80", alt: "Camera da letto" }
      ]
    },
    {
      title: "Vaso C.",
      location: "Napoli · 2025",
      category: "Product Design",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80",
      description: "Design di una collezione di vasi in ceramica artisanal per una manifattura napoletana. Il progetto coniuga tradizione ceramica campana e linguaggio contemporaneo.",
      fullDescription: "La collezione è stata sviluppata in collaborazione con maestri ceramisti locali, utilizzando argille del territorio vesuviano. Ogni pezzo è unico e racconta la storia dell'antica tradizione ceramica napoletana reinterpretata in chiave moderna.",
      year: "2025",
      client: "Ceramiche del Vesuvio",
      area: "Collezione 12 pezzi",
      gallery: [
        { url: "https://images.unsplash.com/photo-1587467512961-120b335663b2?w=600&q=80", alt: "Vaso serie A" },
        { url: "https://images.unsplash.com/photo-1565548930574-86b5e494ce9b?w=600&q=80", alt: "Dettaglio texture" }
      ]
    },
    {
      title: "Wedding M+S",
      location: "Amsterdam · 2024",
      category: "Event Design",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=400&q=80",
      description: "Matrimonio contemporaneo in location industriale ad Amsterdam. Progetto che ha trasformato un ex warehouse in uno spazio elegante e raffinato per la celebrazione.",
      fullDescription: "L'sfida è stata quella di umanizzare uno spazio industriale mantenendone il carattere. Sono stati utilizzati elementi naturali, illuminazione calda e installazioni tessili per creare atmosfere intime all'interno dell'architettura brutalista.",
      year: "2024",
      client: "Coppia internazionale",
      area: "Warehouse 800 mq",
      gallery: [
        { url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80", alt: "Allestimento industriale" },
        { url: "https://images.unsplash.com/photo-1519167758481-83f29c823c61?w=600&q=80", alt: "Illuminazione scenografica" }
      ]
    },
    {
      title: "Concept Villa Dubai",
      location: "Milano · 2023",
      category: "Architecture",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80",
      description: "Progetto architettonico per villa di lusso negli Emirati Arabi. Concept che integra sostenibilità ambientale e comfort abitativo in condizioni climatiche estreme.",
      fullDescription: "La villa è stata concepita come un'oasi contemporanea che risponde alle sfide del clima desertico. Sistemi passivi di raffrescamento, materiali locali e tecnologie smart si integrano in un'architettura che dialoga con il paesaggio circostante.",
      year: "2023",
      client: "Sviluppatore privato",
      area: "450 mq + Giardini",
      gallery: [
        { url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80", alt: "Vista esterna" },
        { url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80", alt: "Piscina e paesaggio" },
        { url: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&q=80", alt: "Interni minimalisti" }
      ]
    },
    {
      title: "Apartment Restoration",
      location: "Roma · 2024",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80",
      description: "Restauro conservativo di appartamento in palazzo storico romano. Intervento che ha preservato gli elementi architettonici originali integrandoli con comfort moderni.",
      fullDescription: "Il progetto ha richiesto un approccio filologico per il recupero di affreschi settecenteschi e pavimenti in cotto originali, combinato con l'inserimento discreto di tecnologie moderne per climatizzazione e domotica.",
      year: "2024",
      client: "Famiglia storica romana",
      area: "180 mq",
      gallery: [
        { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80", alt: "Salone restaurato" },
        { url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80", alt: "Dettaglio affreschi" }
      ]
    },
    {
      title: "Office Redesign",
      location: "Milano · 2023",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80",
      description: "Ridisegno degli spazi per uffici di società di consulenza milanese. Progetto che ha privilegiato flessibilità, benessere dei lavoratori e sostenibilità ambientale.",
      fullDescription: "Gli spazi sono stati ripensati secondo principi di activity-based working, con zone dedicate a diverse tipologie di lavoro. Materiali naturali, illuminazione biofila e sistemi di purificazione dell'aria contribuiscono al benessere degli utenti.",
      year: "2023",
      client: "Società di consulenza",
      area: "320 mq",
      gallery: [
        { url: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80", alt: "Open space collaborativo" },
        { url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80", alt: "Sale riunioni" }
      ]
    }
  ];

  const categories = ["All", ...Array.from(new Set(projects.map(project => project.category)))];
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-6">
            Selected Works
          </h2>
          <p className="text-xl text-muted-foreground font-light mb-8">
            A curated collection of architectural and design projects
          </p>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-2xl transition-all duration-300 tracking-wide ${
                  activeFilter === category
                    ? 'bg-primary text-primary-foreground shadow-float'
                    : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="project-card group cursor-pointer"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
              onClick={() => handleProjectClick(project)}
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
      
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default ProjectGrid;