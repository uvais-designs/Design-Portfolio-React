export function Education() {
  const educationData = [
    {
      institution: "DSEC - Dhanalakshmi Srinivasan Engineering College",
      degree: "B.E. Computer Science & Engineering",
      duration: "June 2016 – March 2020 · Perambalur, Tamil Nadu",
    },
    {
      institution: "V.E.T Higher Secondary School, VDM",
      degree: "Higher Secondary (HSC)",
      duration: "June 2014 – April 2016 · Virudhachalam, Tamil Nadu",
    },
    {
      institution: "Fatima Matriculation Higher Secondary School, VDM",
      degree: "SSLC",
      duration: "June 2013 – April 2014 · Virudhachalam, Tamil Nadu",
    },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-secondary/10">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-foreground mb-4">Education</h2>
        <p className="text-muted-foreground text-lg">
          A quick look at my academic journey
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="rounded-xl bg-card p-6 shadow-md border hover:shadow-xl transition-all duration-300 text-left"
          >
            <h3 className="text-lg font-semibold text-foreground mb-1">
              {edu.institution}
            </h3>
            <div className="text-primary font-medium mb-2">{edu.degree}</div>
            <div className="text-muted-foreground mb-1">{edu.duration}</div>
            <div className="text-sm text-foreground font-bold">
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
