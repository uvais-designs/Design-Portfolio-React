interface ExperienceItemProps {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  current?: boolean;
}

function ExperienceItem({ 
  company, 
  role, 
  duration, 
  location, 
  description, 
  achievements, 
  technologies,
  current = false 
}: ExperienceItemProps) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      {/* Timeline dot */}
      <div className={`absolute left-0 top-2 w-3 h-3 rounded-full border-2 ${
        current ? 'bg-primary border-primary' : 'bg-background border-muted-foreground'
      }`}></div>
      
      {/* Timeline line */}
      <div className="absolute left-1.5 top-5 bottom-0 w-px bg-border last:hidden"></div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h3 className="text-xl font-semibold text-foreground">{role}</h3>
              <p className="text-primary font-medium">{company}</p>
            </div>
            <div className="text-sm text-muted-foreground">
              <div>{duration}</div>
              <div>{location}</div>
            </div>
          </div>
         
        </div>
        
        <p className="text-muted-foreground">{description}</p>
        
        {achievements.length > 0 && (
          <div>
            <h4 className="font-medium text-foreground mb-2">Key Achievements:</h4>
            <ul className="space-y-1">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function Experience() {
  const experiences = [
    {
      company: "Kognitive Networks",
      role: "Senior UX Designer",
      duration: "March 2025 - Present",
      location: "Chennai, India",
      description: "Leading UX design for a network product which works with maritime and aviaition.",
      achievements: [
        "Led design system adoption across 5 product teams, improving design consistency by 80%",
        "Reduced user task completion time by 35% through strategic UX improvements",
        "Mentored 3 junior designers and established design review processes",
        "Collaborated with stakeholders across 3 time zones to align product vision"
      ],
      technologies: ["Figma", "React", "Design Systems", "User Research", "Wireframes & Prototyping" , ""],
      current: true
    },
    {
      company: "TCS - Tata Consultancy Services",
      role: "UX Designer",
      duration: "February 2023 - Present",
      location: "Chennai, India",
      description: "Leading UX design and frontend development for a major Australian private banking client, managing cross-functional teams and driving design system implementation.",
      achievements: [
        "Led design system adoption across 5 product teams, improving design consistency by 80%",
        "Reduced user task completion time by 35% through strategic UX improvements",
        "Mentored 3 junior designers and established design review processes",
        "Collaborated with stakeholders across 3 time zones to align product vision"
      ],
      technologies: ["Figma", "Angular","React" , "Design Systems", "User Research", "Prototyping"],
      current: true
    },
    {
      company: "Xenovex Technologies",
      role: "UX Designer & Frontend Developer",
      duration: "September 2021 - January 2023",
      location: "Chennai, India",
      description: "Designed and developed user interfaces for the EMIS (Educational Management Information System) state government initiative, focusing on accessibility and usability for diverse user groups.",
      achievements: [
        "Improved system usability scores by 60% through comprehensive user research",
        "Designed responsive interfaces serving 100,000+ educational stakeholders",
        "Established accessibility standards meeting WCAG 2.1 AA compliance",
        "Reduced user onboarding time from 45 to 15 minutes through UX optimization"
      ],
      technologies: ["Angular", "UX Research", "Accessibility", "Government Systems", "Data Visualization"]
    },
    {
      company: "Szigony Technologies",
      role: "Junior UX Designer & Developer",
      duration: "September 2020 - September 2021",
      location: "Bangalore, India",
      description: "Started my UX journey by designing and developing e-commerce platforms and job portals, learning the fundamentals of user-centered design and modern web development.",
      achievements: [
        "Designed and launched 8 client websites with 95% client satisfaction rate",
        "Increased e-commerce conversion rates by 25% through UX improvements",
        "Developed reusable component library adopted across all projects",
        "Established design-development workflow reducing project timelines by 20%"
      ],
      technologies: ["HTML/CSS", "JavaScript", "E-commerce", "Angular", "Basic UX Research"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="heading-large text-foreground mb-4">Career Journey</h2>
          <p className="text-large text-muted-foreground max-w-2xl mx-auto">
            Evolving from development to design leadership, building impactful products 
            across startups, government, and enterprise environments.
          </p>
        </div>
        
        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={index}
              company={experience.company}
              role={experience.role}
              duration={experience.duration}
              location={experience.location}
              description={experience.description}
              achievements={experience.achievements}
              technologies={experience.technologies}
              current={experience.current}
            />
          ))}
        </div>
      </div>
    </section>
  );
}