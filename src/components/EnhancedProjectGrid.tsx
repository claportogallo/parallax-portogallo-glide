import { useState, useEffect } from "react";
import { PROJECTS, CATEGORIES } from "@/data/projects";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const EnhancedProjectGrid = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleFilterCategory = (event: CustomEvent) => {
      setActiveFilter(event.detail);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("filterCategory", handleFilterCategory as EventListener);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("filterCategory", handleFilterCategory as EventListener);
    };
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
      const element = card as HTMLElement;
      const depth = 0.1 + (index % 3) * 0.05;
      element.style.transform = `translate3d(0, ${scrollY * depth * 0.15}px, 0)`;
    });
  }, [scrollY]);

  const filteredProjects = Object.entries(PROJECTS).filter(([_, project]) => {
    if (activeFilter === "all") return true;
    return project.cats.includes(activeFilter);
  });

  const handleProjectClick = (projectKey: string) => {
    setSelectedProject(projectKey);
    setIsModalOpen(true);
  };

  const selectedProjectData = selectedProject ? PROJECTS[selectedProject] : null;

  return (
    <>
      <section id="projects" className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-element">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-6">
              Lavori Selezionati
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Una collezione curata di progetti di architettura e design
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 text-sm rounded-full border transition-all duration-300 ${
                  activeFilter === cat.id
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-border hover:border-foreground/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(([key, project], index) => (
              <div
                key={key}
                className="project-card fade-in-element"
                onClick={() => handleProjectClick(key)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="project-image">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mask">
                  <div className="txt">
                    <div className="title">{project.title}</div>
                    <div className="meta">{project.meta}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0">
          {selectedProjectData && (
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              <div className="overflow-y-auto p-6 space-y-4">
                {selectedProjectData.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${selectedProjectData.title} ${index + 1}`}
                    className="w-full rounded-lg"
                  />
                ))}
              </div>
              <div className="p-6 overflow-y-auto">
                <h3 className="text-2xl font-light mb-2">{selectedProjectData.title}</h3>
                <p className="text-muted-foreground mb-6">{selectedProjectData.meta}</p>
                <div 
                  className="prose prose-sm max-w-none text-foreground"
                  dangerouslySetInnerHTML={{ __html: selectedProjectData.desc }}
                />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EnhancedProjectGrid;