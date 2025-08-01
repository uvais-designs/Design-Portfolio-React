export function Leadership() {
  const principles = [
    {
      title: "User-Centered Decision Making",
      description: "Every design decision should be backed by user research and validated through testing. I advocate for the user voice in all product discussions.",
      icon: "👥"
    },
    {
      title: "Design Systems Thinking",
      description: "Building scalable design systems that empower teams to create consistent experiences while maintaining design quality at scale.",
      icon: "🎯"
    },
    {
      title: "Cross-Functional Collaboration",
      description: "Breaking down silos between design, development, and business teams to create shared understanding and better outcomes.",
      icon: "🤝"
    },
    {
      title: "Continuous Learning Culture",
      description: "Fostering an environment where the team continuously learns from users, data, and each other to improve our craft.",
      icon: "📈"
    }
  ];

  const achievements = [
    {
      metric: "15+",
      label: "Products Launched",
      description: "Successfully shipped products across industries"
    },
    {
      metric: "3",
      label: "Teams Led",
      description: "Built and mentored high-performing design teams"
    },
    {
      metric: "100K+",
      label: "Users Impacted",
      description: "Designed experiences for diverse user groups"
    },
    {
      metric: "4+",
      label: "Years Experience",
      description: "Growing expertise across design and development"
    }
  ];

  return (
    <section id="leadership" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="heading-large text-foreground mb-4">Design Leadership Philosophy</h2>
          <p className="text-large text-muted-foreground max-w-2xl mx-auto">
            Building design teams and cultures that create meaningful impact through 
            user-centered thinking and collaborative innovation.
          </p>
        </div>

        {/* Leadership Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {principles.map((principle, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">{principle.icon}</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{principle.title}</h3>
                  <p className="text-muted-foreground">{principle.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-xl md:text-2xl text-foreground mb-6 leading-relaxed">
              "I dream of becoming a director in IT who leads through design thinking. 
              I believe in the power of visual storytelling and creating experiences that 
              people will love. Every detail matters, and I approach challenges from both 
              technical and human perspectives."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-px bg-primary"></div>
              <span className="text-muted-foreground font-medium">Design Philosophy</span>
              <div className="w-12 h-px bg-primary"></div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {achievement.metric}
              </div>
              <div className="font-medium text-foreground mb-1">
                {achievement.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {achievement.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}