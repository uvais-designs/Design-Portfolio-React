export function About() {
  const skills = [
    {
      category: "Design Leadership",
      items: [
        "Team Management",
        "Design Strategy",
        "Stakeholder Alignment",
        "Culture Building",
      ],
    },
    {
      category: "UX Expertise",
      items: [
        "User Research",
        "Design Systems",
        "Interaction Design",
        "Usability Testing",
      ],
    },
    {
      category: "Business Impact",
      items: [
        "Product Strategy",
        "Growth Optimization",
        "Data-Driven Design",
        "Cross-functional Collaboration",
      ],
    },
    {
      category: "Technical Skills",
      items: [
        "Figma",
        "Angular",
        "React",
        "Prototyping",
        "Frontend Development",
      ],
    },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="heading-large text-foreground mb-6">
                Designer with a developer's mindset
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I bridge the gap between design and
                  development, bringing a unique perspective
                  that ensures beautiful designs are not only
                  user-centered but also technically feasible
                  and scalable.
                </p>
                <p>
                  My journey from startup environments to
                  enterprise-level government projects and now
                  private banking solutions has given me deep
                  expertise in diverse user needs, complex
                  systems, and cross-functional collaboration.
                </p>
                <p>
                  I believe in data-driven design decisions,
                  user-first thinking, and building design
                  systems that empower teams to create
                  consistent, accessible experiences at scale.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-6">
              <a
                href="#contact"
                className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
              >
                Let's discuss your design challenges
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Core Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="font-medium text-foreground">
                    {skillGroup.category}
                  </h4>
                  <ul className="space-y-2">
                    {skillGroup.items.map(
                      (skill, skillIndex) => (
                        <li
                          key={skillIndex}
                          className="text-sm text-muted-foreground flex items-center"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                          {skill}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}