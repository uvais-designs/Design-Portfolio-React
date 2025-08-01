import { useState, useEffect } from "react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Interactive background */}
      <div 
        className="absolute inset-0 opacity-30 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(37, 99, 235, 0.15) 0%, transparent 50%)`
        }}
      ></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Personal greeting */}
          <div className="space-y-6">
            {/* <div className="glass-card inline-block px-4 py-2 rounded-full mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <span className="text-sm text-muted-foreground">Hello, I'm</span>
            </div> */}
            
            <h1 className="heading-display gradient-text opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              Uvaisul Karni Sheik
            </h1>
            
            <div className="space-y-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <h2 className="text-2xl md:text-3xl text-foreground/90 font-bold">
                User eXperience Designer
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                I craft meaningful digital experiences that bridge user needs with business goals. 
                Passionate about design systems, team leadership, and creating products that make a difference.
              </p>
            </div>
          </div>

          {/* Personal stats with glass cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            {[
              { number: "5+", label: "Years Experience" },
              { number: "8+", label: "Projects" },
              { number: "4+", label: "Teams Worked" },
              { number: "5+", label: "Certifications" }
            ].map((stat, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 group">
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-semibold text-blue-900 group-hover:text-primary transition-colors duration-300 ">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <a
              href="#case-studies"
              className="glass-button px-8 py-4 rounded-full text-primary hover:text-primary-foreground group relative overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View My Work
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
            </a>
            
            <a
              href="#contact"
              className="glass-card px-8 py-4 rounded-full text-foreground hover:text-primary transition-all duration-300 border border-primary/20 hover:border-primary/40 hover:scale-105"
            >
              Let's Connect
            </a>
          </div>

          {/* Scroll indicator */}
          {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
            <div className="flex flex-col items-center space-y-2">
              <span className="text-xs text-muted-foreground">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating icons representing design tools */}
        <div className="absolute top-1/4 left-10 opacity-20 animate-float">
          <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.5 2A1.5 1.5 0 0014 3.5v5a1.5 1.5 0 001.5 1.5h5A1.5 1.5 0 0022 8.5v-5A1.5 1.5 0 0020.5 2h-5zM15.5 14a1.5 1.5 0 00-1.5 1.5v5a1.5 1.5 0 001.5 1.5h5a1.5 1.5 0 001.5-1.5v-5a1.5 1.5 0 00-1.5-1.5h-5zM3.5 2A1.5 1.5 0 002 3.5v5A1.5 1.5 0 003.5 10h5A1.5 1.5 0 0010 8.5v-5A1.5 1.5 0 008.5 2h-5zM3.5 14A1.5 1.5 0 002 15.5v5A1.5 1.5 0 003.5 22h5a1.5 1.5 0 001.5-1.5v-5A1.5 1.5 0 008.5 14h-5z"/>
            </svg>
          </div>
        </div>
        
        <div className="absolute top-1/3 right-16 opacity-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-10 h-10 glass-card rounded-xl flex items-center justify-center">
            <svg className="w-5 h-5 text-chart-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        </div>
        
        <div className="absolute bottom-1/4 left-20 opacity-20 animate-float" style={{ animationDelay: '4s' }}>
          <div className="w-8 h-8 glass-card rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}