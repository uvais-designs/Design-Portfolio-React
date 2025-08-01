
const imgImage54 = "/wifi logo.png";
const imgImage49 = "/wifi logo.png";
const imgImage57 = "/wifi logo.png";
const imgImage62 = "/wifi logo.png";
const imgImg20240306214130 = "/wifi logo.png";

interface CaseStudyProps {
  title: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string[];
  image: string;
  tags: string[];
  featured?: boolean;
}

function FeaturedCaseStudyCard({ 
  title, 
  category, 
  description, 
  challenge, 
  solution, 
  impact, 
  image, 
  tags 
}: CaseStudyProps) {
  return (
    <div className="group cursor-pointer mb-12">
      <div className="glass-card rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl relative">
        {/* Floating badge */}
        <div className="absolute -top-4 left-8 z-20">
          <div className="glass-button px-4 py-2 rounded-full">
            <span className="text-sm font-medium text-primary flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              Current Project
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-0">
          <div className="relative h-80 lg:h-auto overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          <div className="p-8 lg:p-12 flex flex-col justify-center relative">
            {/* Personal touch */}
            <div className="absolute top-6 right-6 opacity-30">
              <div className="text-xs text-muted-foreground italic">
                "My latest work"
              </div>
            </div>

            <div className="mb-8">
              <span className="inline-block px-3 py-1 glass-button rounded-full text-sm text-primary mb-4">
                {category}  
              </span>
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 group-hover:gradient-text transition-all duration-300">
                {title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
            </div>
            
            <div className="space-y-6 mb-8">
              <div className="glass-card p-4 rounded-xl">
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <div className="w-1 h-6 bg-primary rounded-full"></div>
                  The Challenge
                </h4>
                <p className="text-muted-foreground">{challenge}</p>
              </div>
              
              <div className="glass-card p-4 rounded-xl">
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <div className="w-1 h-6 bg-chart-2 rounded-full"></div>
                  My Approach
                </h4>
                <p className="text-muted-foreground">{solution}</p>
              </div>
              
              {impact.length > 0 && (
                <div className="glass-card p-4 rounded-xl">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <div className="w-1 h-6 bg-chart-5 rounded-full"></div>
                    Impact & Results
                  </h4>
                  <ul className="space-y-2">
                    {impact.map((item, index) => (
                      <li key={index} className="text-muted-foreground flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 glass-button rounded-full text-sm text-primary hover:scale-105 transition-transform duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <button className="glass-button px-8 py-4 rounded-full text-primary hover:text-primary-foreground group/btn relative overflow-hidden transition-all duration-300 hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  Explore This Project
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-primary scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompactCaseStudyCard({ 
  title, 
  category, 
  description, 
  challenge, 
  solution, 
  impact, 
  image, 
  tags 
}: CaseStudyProps) {
  return (
    <div className="group cursor-pointer">
      <div className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          <div className="absolute top-3 left-3">
            <span className="glass-button px-2 py-1 text-xs text-primary rounded-full">
              {category}
            </span>
          </div>
          <div className="absolute bottom-3 right-3">
            <div className="w-6 h-6 glass-card rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="p-5 flex-1 flex flex-col">
          <div className="mb-4">
            <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          </div>
          
          <div className="space-y-3 flex-1">
            <div className="glass-card p-3 rounded-lg">
              <h4 className="font-medium text-foreground text-xs mb-1 uppercase tracking-wide">Challenge</h4>
              <p className="text-xs text-muted-foreground line-clamp-2">{challenge}</p>
            </div>
            
            <div className="glass-card p-3 rounded-lg">
              <h4 className="font-medium text-foreground text-xs mb-1 uppercase tracking-wide">Solution</h4>
              <p className="text-xs text-muted-foreground line-clamp-2">{solution}</p>
            </div>
          </div>
          
          <div className="space-y-3 mt-auto pt-4">
            <div className="flex flex-wrap gap-1">
              {tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 glass-button text-xs rounded-full text-primary hover:scale-105 transition-transform duration-200"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 3 && (
                <span className="px-2 py-1 glass-card text-muted-foreground text-xs rounded-full">
                  +{tags.length - 3}
                </span>
              )}
            </div>
            
            <button className="w-full glass-button py-2 rounded-lg text-primary text-xs font-medium hover:scale-105 transition-all duration-200">
              View Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CaseStudies() {
  const caseStudies = [
    {
      title: "My Current Project - [Edit This!]",
      category: "Featured Work",
      description: "This space is waiting for your current project! Click to customize this featured card with your actual work, achievements, and the story behind your latest design challenge.",
      challenge: "Replace this with your project's main challenge. What problem were you solving? What constraints made it interesting? What was at stake for users and the business?",
      solution: "Share your unique approach here. What methodologies did you use? How did you navigate constraints? What made your solution special? Include your design process and key decisions.",
      impact: [
        "Add your specific metrics here (e.g., '40% increase in user engagement')",
        "Include user satisfaction improvements and feedback",
        "Mention business impact, revenue, or conversion improvements",
        "Add any awards, recognition, or team feedback"
      ],
      image: imgImg20240306214130,
      tags: ["UX Strategy", "Design Systems", "User Research", "Leadership"],
      featured: true
    },
    {
      title: "E-commerce Platform Redesign",
      category: "Product Strategy",
      description: "Led the complete redesign of a major e-commerce platform, focusing on mobile-first experience and conversion optimization.",
      challenge: "High cart abandonment rates (78%) and poor mobile experience were significantly impacting revenue and user satisfaction.",
      solution: "Implemented a comprehensive user research program, redesigned the checkout flow, and created a mobile-first responsive design system.",
      impact: [
        "45% increase in mobile conversion rates",
        "60% reduction in cart abandonment",
        "92% positive user feedback on new experience"
      ],
      image: imgImage54,
      tags: ["E-commerce", "Mobile UX", "Conversion"],
      featured: false
    },
    {
      title: "Healthcare App Innovation",
      category: "Healthcare UX",
      description: "Designed a comprehensive patient management system that simplified complex healthcare workflows while maintaining compliance.",
      challenge: "Healthcare professionals needed to manage complex patient data while adhering to strict regulatory requirements and time constraints.",
      solution: "Created an intuitive interface with smart automation, role-based access, and streamlined workflows that reduced cognitive load.",
      impact: [
        "50% reduction in data entry time",
        "95% healthcare provider satisfaction",
        "Full HIPAA compliance achieved"
      ],
      image: imgImage49,
      tags: ["Healthcare", "Compliance", "Workflow"],
      featured: false
    },
    {
      title: "Financial Dashboard System",
      category: "FinTech Design",
      description: "Built an intelligent financial dashboard that made complex data accessible and actionable for different user personas.",
      challenge: "Financial advisors and their clients needed to understand complex investment data and make informed decisions quickly.",
      solution: "Designed role-based dashboards with progressive disclosure, smart alerts, and personalized insights using advanced data visualization.",
      impact: [
        "40% faster decision-making process",
        "85% improvement in data comprehension",
        "Increased client engagement by 60%"
      ],
      image: imgImage57,
      tags: ["FinTech", "Data Viz", "Personalization"],
      featured: false
    },
    {
      title: "Learning Platform Experience",
      category: "EdTech Innovation",
      description: "Created an engaging learning platform that transformed online education through gamification and social learning features.",
      challenge: "Online learners had low engagement rates (35% completion) and lacked motivation to continue their educational journey.",
      solution: "Integrated gamification elements, peer learning features, and adaptive content delivery based on individual learning patterns.",
      impact: [
        "75% increase in course completion rates",
        "90% learner satisfaction improvement",
        "Featured in top EdTech innovations of 2023"
      ],
      image: imgImage62,
      tags: ["EdTech", "Gamification", "Social Learning"],
      featured: false
    }
  ];

  const featuredProject = caseStudies.find(study => study.featured);
  const otherProjects = caseStudies.filter(study => !study.featured);

  return (
    <section id="case-studies" className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="glass-card inline-block px-4 py-2 rounded-full mb-6">
            <span className="text-sm text-muted-foreground">💼 My Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Design Stories & Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each project tells a story of challenges overcome, users delighted, and businesses transformed through thoughtful design.
          </p>
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <FeaturedCaseStudyCard
            title={featuredProject.title}
            category={featuredProject.category}
            description={featuredProject.description}
            challenge={featuredProject.challenge}
            solution={featuredProject.solution}
            impact={featuredProject.impact}
            image={featuredProject.image}
            tags={featuredProject.tags}
          />
        )}

        {/* Other Projects Grid */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-2">More Projects</h3>
            <p className="text-muted-foreground">A selection of impactful design solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherProjects.map((study, index) => (
              <div key={index} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}>
                <CompactCaseStudyCard
                  title={study.title}
                  category={study.category}
                  description={study.description}
                  challenge={study.challenge}
                  solution={study.solution}
                  impact={study.impact}
                  image={study.image}
                  tags={study.tags}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}