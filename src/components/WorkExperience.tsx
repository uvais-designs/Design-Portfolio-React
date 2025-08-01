interface ExperienceItemProps {
  number: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  backgroundColor: string;
  borderColor: string;
  numberBg: string;
  numberBorder: string;
}

function ExperienceItem({ 
  number, 
  company, 
  position, 
  duration, 
  description, 
  backgroundColor, 
  borderColor,
  numberBg,
  numberBorder 
}: ExperienceItemProps) {
  return (
    <div className="relative">
      <div 
        className="p-6 md:p-8 border-4 rounded-lg relative"
        style={{ backgroundColor, borderColor }}
      >
        <div 
          className="absolute -top-4 -right-4 w-12 h-12 md:w-16 md:h-16 rounded-md border-2 flex items-center justify-center"
          style={{ backgroundColor: numberBg, borderColor: numberBorder }}
        >
          <span className="font-['Handlee:Regular',_sans-serif] text-2xl md:text-3xl lg:text-4xl">
            {number}
          </span>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-['Space_Grotesk:Bold',_sans-serif] text-xl md:text-2xl">
            <span>{company}</span>
            <span className="font-['Space_Grotesk:Regular',_sans-serif]"> / {position}</span>
          </h3>
          <p className="font-['Space_Grotesk:Regular',_sans-serif] text-lg md:text-xl">
            {duration}
          </p>
          <p className="font-['Space_Grotesk:Regular',_sans-serif] text-base md:text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function WorkExperience() {
  const experiences = [
    {
      number: "4",
      company: "Kognitive Networks",
      position: "Senior U Designer",
      duration: "February 2023 - PRESENT, Chennai",
      description: "I am currently engaged with a prominent private banking client in Australia, primarily focusing on front-end development utilizing Angular, alongside contributing to design tasks using Figma.",
      backgroundColor: "#ffe68c",
      borderColor: "#eecd56",
      numberBg: "#ffe68c",
      numberBorder: "#eecd56",
    },
    {
      number: "3",
      company: "UX Designer",
      position: "System Engineer",
      duration: "February 2023 - PRESENT, Chennai",
      description: "I am currently engaged with a prominent private banking client in Australia, primarily focusing on front-end development utilizing Angular, alongside contributing to design tasks using Figma.",
      backgroundColor: "#ffe68c",
      borderColor: "#eecd56",
      numberBg: "#ffe68c",
      numberBorder: "#eecd56",
    },
    {
      number: "2",
      company: "Xenovex Technologies",
      position: "UX Designer & Developer",
      duration: "September 2021 - January 2023, Chennai",
      description: "My primary project involves the EMIS state government initiative, where I was recruited once again by the project manager upon the conclusion of my initial contract with the first company.",
      backgroundColor: "#9ddcff",
      borderColor: "#5ab5e8",
      numberBg: "#9ddcff",
      numberBorder: "#5ab5e8",
    },
    {
      number: "1",
      company: "Szigony Technologies",
      position: "UX Designer & Developer",
      duration: "September 2020 - September 2021, Bangalore",
      description: "I gained initial experience by developing basic websites, including e-commerce platforms and job portals, before transitioning to complex government project (EMIS).",
      backgroundColor: "#ffc9f0",
      borderColor: "#f384d4",
      numberBg: "#ffc9f0",
      numberBorder: "#f384d4",
    },
  ];

  return (
    <section className="py-16 px-4 container mx-auto">
      <h2 className="font-['Poppins:Bold',_sans-serif] text-3xl md:text-4xl lg:text-5xl text-center mb-16">
        Work experience
      </h2>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((experience, index) => (
          <ExperienceItem
            key={index}
            number={experience.number}
            company={experience.company}
            position={experience.position}
            duration={experience.duration}
            description={experience.description}
            backgroundColor={experience.backgroundColor}
            borderColor={experience.borderColor}
            numberBg={experience.numberBg}
            numberBorder={experience.numberBorder}
          />
        ))}
      </div>
    </section>
  );
}