import { useState, useEffect } from "react";

const EnhancedFloatingNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Progetti", href: "#projects", hasDropdown: true },
    { label: "About", href: "#about" },
    { label: "Contatti", href: "#contact" },
  ];

  const categories = [
    { id: "all", label: "Tutti" },
    { id: "architettura", label: "Architettura" },
    { id: "artigianato", label: "Artigianato" },
    { id: "grafica", label: "Grafica" },
    { id: "bimai", label: "BIM+AI" },
    { id: "wedding", label: "Wedding" }
  ];

  const handleCategoryFilter = (categoryId: string) => {
    const event = new CustomEvent('filterCategory', { detail: categoryId });
    window.dispatchEvent(event);
  };

  return (
    <nav 
      className={`glass-nav transition-all duration-500 ${
        isScrolled 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-90 translate-y-2'
      }`}
    >
      <ul className="flex items-center gap-6">
        {navItems.map((item, index) => (
          <li key={index} className={item.hasDropdown ? "relative group" : ""}>
            <a
              href={item.href}
              className="text-sm tracking-wide text-foreground/70 hover:text-foreground transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-gold transition-all duration-300 group-hover:w-full" />
            </a>
            
            {item.hasDropdown && (
              <div className="absolute left-0 mt-2 w-44 bg-white shadow-xl rounded-xl p-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryFilter(cat.id)}
                    className="w-full text-left px-3 py-1.5 rounded-md hover:bg-stone-100 text-sm"
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default EnhancedFloatingNavigation;