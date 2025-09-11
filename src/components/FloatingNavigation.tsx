import { useState, useEffect } from "react";

const FloatingNavigation = () => {
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
    { label: "Progetti", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contatti", href: "#contact" },
  ];

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
          <li key={index}>
            <a
              href={item.href}
              className="text-sm tracking-wide text-foreground/70 hover:text-foreground transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-gold transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FloatingNavigation;