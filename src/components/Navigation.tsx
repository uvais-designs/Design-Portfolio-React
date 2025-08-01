import { useState, useEffect } from "react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#case-studies", label: "Work" },
    { href: "#leadership", label: "Leadership" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'glass-nav shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo space - reserved for animated logo from loader */}
        <div className="w-16 h-12 flex items-center">
          {/* Logo will animate here from loader */}
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-xl border border-white/20 flex items-center justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <span className="text-sm font-bold text-primary">UK</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 text-foreground/80 hover:text-primary transition-all duration-300 group"
              style={{ animationDelay: `${0.8 + index * 0.1}s` }}
            >
              <span className="relative z-10">{item.label}</span>
              {/* Glass hover effect */}
              <div className="absolute inset-0 glass-button rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200"></div>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="glass-button px-6 py-2 rounded-full text-primary hover:text-primary-foreground transition-all duration-300 group relative overflow-hidden opacity-0 animate-fade-in-up"
            style={{ animationDelay: '1.3s', animationFillMode: 'forwards' }}
          >
            <span className="relative z-10">Let's Talk</span>
            <div className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden glass-button p-2 rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <span className={`block h-0.5 bg-foreground transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}></span>
            <span className={`block h-0.5 bg-foreground transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`block h-0.5 bg-foreground transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden glass-nav border-t border-white/20 transition-all duration-300 ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="container mx-auto px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block px-4 py-3 text-foreground/80 hover:text-primary transition-all duration-300 rounded-lg hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block px-4 py-3 glass-button rounded-lg text-primary text-center mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
}