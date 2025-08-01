export function Education() {
  const educationData = [
    {
      institution: "DSEC - Dhanalakshmi Srinivasan Engineering College",
      degree: "CSE",
      duration: "June 2016 - March 2020, Perambalur, Tamilnadu",
      percentage: "66%",
    },
    {
      institution: "V.E.T Higher Secondary School",
      degree: "HSC",
      duration: "June 2014 - April 2016, Virudhachalam, Tamilnadu",
      percentage: "73%",
    },
    {
      institution: "Fatima Matriculation Higher Secondary School",
      degree: "SSLC",
      duration: "June 2013 - April 2014, Virudhachalam, Tamilnadu",
      percentage: "91%",
    },
  ];

  return (
    <section className="py-16 px-4 container mx-auto">
      <h2 className="font-['Poppins:Bold',_sans-serif] text-3xl md:text-4xl lg:text-5xl text-center mb-16">
        Education
      </h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="backdrop-blur-sm bg-white/80 rounded-3xl p-8 md:p-12 space-y-8">
          {educationData.map((education, index) => (
            <div key={index} className="space-y-2">
              <h3 className="font-['Space_Grotesk:Regular',_sans-serif] text-lg md:text-xl lg:text-2xl">
                <span>{education.institution} / </span>
                <span className="font-['Space_Grotesk:Bold',_sans-serif]">{education.degree}</span>
              </h3>
              <p className="font-['Space_Grotesk:Regular',_sans-serif] text-base md:text-lg">
                {education.duration}
              </p>
              <p className="font-['Space_Grotesk:Bold',_sans-serif] text-base md:text-lg">
                {education.percentage}
              </p>
              {index < educationData.length - 1 && (
                <div className="pt-4">
                  <div className="border-b border-gray-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}