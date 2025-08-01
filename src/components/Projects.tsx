const imgImage49 = "/wifi logo.png";
const imgImage50 = "/wifi logo.png";
const imgImage51 = "/wifi logo.png";
const imgImage54 = "/wifi logo.png";
const imgImage55 = "/wifi logo.png";
const imgImage56 = "/wifi logo.png";
const imgImage57 = "/wifi logo.png";
const imgImage58 = "/wifi logo.png";
const imgImage59 = "/wifi logo.png";
const imgImage60 = "/wifi logo.png";
const imgImage61 = "/wifi logo.png";
const imgImage62 = "/wifi logo.png";
const imgImage63 = "/wifi logo.png";
const imgImage64= "/wifi logo.png";
const imgImg20240306214130= "/wifi logo.png";
const imgImg20240306214138= "/wifi logo.png";
const imgImg20240306214123= "/wifi logo.png";




interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  backgroundColor: string;
  textColor?: string;
  isComingSoon?: boolean;
}

function ProjectCard({ title, description, images, backgroundColor, textColor = "#000000", isComingSoon }: ProjectCardProps) {
  return (
    <div className="relative rounded-[15px] p-6 md:p-8 lg:p-12 h-[400px] md:h-[500px] overflow-hidden" style={{ backgroundColor }}>
      <div className="flex flex-col lg:flex-row h-full gap-6">
        <div className="flex-1 z-10 relative">
          <h3 className="font-['Poppins:Bold',_sans-serif] text-xl md:text-2xl mb-4" style={{ color: textColor }}>
            {title}
          </h3>
          <p className="font-['Poppins:Regular',_sans-serif] text-base md:text-lg leading-relaxed" style={{ color: textColor }}>
            {description}
          </p>
          {isComingSoon && (
            <div className="absolute bottom-4 right-4 bg-black text-white px-4 py-2 rounded text-sm">
              Under Development - Coming Soon
            </div>
          )}
        </div>
        
        <div className="flex-1 relative">
          <div className="grid grid-cols-2 gap-2 md:gap-4 h-full">
            {images.map((image, index) => (
              <div
                key={index}
                className={`bg-center bg-cover bg-no-repeat rounded shadow-lg ${
                  index === 0 ? 'col-span-1 row-span-2' : 
                  index === 1 ? 'col-span-1' : 
                  'col-span-1'
                }`}
                style={{ backgroundImage: `url('${image}')` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const projects = [
    {
      title: "EMIS",
      description: "The official website for accessing educational management information system (EMIS) resources and data for Tamil Nadu schools.",
      images: [imgImage49, imgImage51, imgImage50],
      backgroundColor: "#81BBFF",
    },
    {
      title: "A Portfolio website",
      description: "Delivering a sleek and minimalist portfolio tailored to client specifications, showcasing professionalism through clean design and clear presentation of information.",
      images: [imgImage57, imgImage59, imgImage58],
      backgroundColor: "#383838",
      textColor: "#ffffff",
    },
    {
      title: "A Construction website",
      description: "Construction designs tailored to meet client specifications and requirements with precision and professionalism.",
      images: [imgImage54, imgImage56, imgImage55],
      backgroundColor: "#2b322d",
      textColor: "#ffffff",
    },
    {
      title: "A BrandBook presentation",
      description: "Crafted a comprehensive brand book detailing brand identity guidelines and strategies for cohesive brand representation.",
      images: [imgImage62, imgImage61, imgImage60],
      backgroundColor: "#FFC261",
    },
    {
      title: "A case-study presentation",
      description: "Revamped the services page through extensive user research, addressing complexities to enhance user experience and accessibility.",
      images: [imgImage63, imgImage64],
      backgroundColor: "#F2F2F2",
    },
    {
      title: "A Mobile APP",
      description: "Developing a mobile application for streamlined management of hostellers and their information, prioritizing simplicity and ease of use for optimal efficiency.",
      images: [imgImg20240306214123, imgImg20240306214138, imgImg20240306214130],
      backgroundColor: "#ffffff",
      isComingSoon: true,
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 container mx-auto">
      <h2 className="font-['Poppins:Bold',_sans-serif] text-3xl md:text-4xl lg:text-5xl text-center mb-16">
        Projects
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            images={project.images}
            backgroundColor={project.backgroundColor}
            textColor={project.textColor}
            isComingSoon={project.isComingSoon}
          />
        ))}
      </div>
    </section>
  );
}