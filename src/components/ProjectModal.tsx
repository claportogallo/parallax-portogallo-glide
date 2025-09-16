import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ProjectImage {
  url: string;
  alt: string;
}

interface Project {
  title: string;
  location: string;
  category: string;
  image: string;
  description?: string;
  fullDescription?: string;
  gallery?: ProjectImage[];
  year?: string;
  client?: string;
  area?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          {/* Left side - Image Gallery */}
          <div className="relative bg-secondary/20">
            <div className="h-full overflow-y-auto p-6 space-y-6">
              {/* Main project image */}
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Additional gallery images */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="space-y-4">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="aspect-[4/3] rounded-xl overflow-hidden shadow-elegant">
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Gradient overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-secondary/20 to-transparent pointer-events-none" />
          </div>

          {/* Right side - Project Details */}
          <div className="p-8 overflow-y-auto">
            <DialogHeader className="mb-6">
              <div className="mb-3">
                <span className="text-xs tracking-widest text-accent-gold uppercase font-medium">
                  {project.category}
                </span>
              </div>
              <DialogTitle className="text-3xl font-light text-foreground leading-tight">
                {project.title}
              </DialogTitle>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span>{project.location}</span>
              </div>
            </DialogHeader>

            {/* Project Info Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {project.year && (
                <div className="p-4 bg-secondary/30 rounded-xl">
                  <div className="text-xs text-muted-foreground mb-1">Anno</div>
                  <div className="font-medium text-foreground">{project.year}</div>
                </div>
              )}
              {project.client && (
                <div className="p-4 bg-secondary/30 rounded-xl">
                  <div className="text-xs text-muted-foreground mb-1">Cliente</div>
                  <div className="font-medium text-foreground">{project.client}</div>
                </div>
              )}
              {project.area && (
                <div className="p-4 bg-secondary/30 rounded-xl col-span-2">
                  <div className="text-xs text-muted-foreground mb-1">Area</div>
                  <div className="font-medium text-foreground">{project.area}</div>
                </div>
              )}
            </div>

            {/* Project Description */}
            <div className="space-y-4">
              <h3 className="text-xl font-light text-foreground">Descrizione del Progetto</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{project.description}</p>
                {project.fullDescription && (
                  <p>{project.fullDescription}</p>
                )}
              </div>
            </div>

            {/* Close button for mobile */}
            <div className="mt-8 lg:hidden">
              <button
                onClick={onClose}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-2xl hover:shadow-float transition-all duration-300"
              >
                Chiudi
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;