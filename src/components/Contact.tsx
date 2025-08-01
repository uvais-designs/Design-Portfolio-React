// Use the public directory for static assets in Next.js
const imgProfile = "/wifi logo.png";
const imgLinkedin = "/wifi logo.png";
const imgBehance = "/wifi logo.png";
const imgGmail = "/wifi logo.png";export function Contact() {
  const contactMethods = [
    {
      type: "Email",
      value: "ysul2505@gmail.com",
      href: "mailto:ysul2505@gmail.com",
      icon: "📧",
    },
    {
      type: "LinkedIn",
      icon: "📱",
      value: "Uvaisul Karni Sheik",
      href: "https://www.linkedin.com/in/uvaisulkarni25/",
    },
    {
      type: "Behance",
      value: "Uvaisul Karni Sheik",
      href: "https://www.behance.net/uvaisulkarni",
      icon: "📱",
    },
    {
      type: "Phone",
      value: "+91 8344-8758-44",
      href: "tel:+918344875844",
      icon: "📱",
    },
    {
      type: "Location",
      value: "Chennai, India",
      href: "#",
      icon: "📍",
    }
  ];
  return (
    <section id="contact" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 items-start">
          {/* Contact Content */}
          <div className="space-y-8">
            <div>
              <h2 className="heading-large text-foreground mb-4">Let's Create Something Amazing Together</h2>
              <p className="text-large text-muted-foreground mb-6">
                Ready to transform your product experience? I'd love to discuss how we can 
                solve your design challenges and create meaningful impact for your users.
              </p>
            </div>

              <div className="text-center">
              <div className="w-64 h-64 mx-auto mb-6 relative">
                <img
                  src={imgGmail}
                  alt="Uvais Khan"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
              <blockquote className="text-lg italic text-muted-foreground">
                "Every design has its soul. Embrace them."
              </blockquote>
            </div>

            {/* Contact Methods */}
            <div className="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-2 mb-10">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  className={`flex items-center space-x-4 p-4 rounded-lg border transition-all`}
                >
                  <span className="text-2xl">{method.icon}</span>
                  <div>
                    <div className="font-medium text-foreground">{method.type}</div>
                    <div className="text-muted-foreground">{method.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability */}
            {/* <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-3">Current Availability</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Available for freelance projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>Open to full-time opportunities</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Available for consulting</span>
                </div>
              </div>
            </div> */}
          </div>

          {/* Profile & Social */}
          
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            Thanks for visiting! Looking forward to connecting with you.
          </p>
        </div>
      </div>
    </section>
  );
}