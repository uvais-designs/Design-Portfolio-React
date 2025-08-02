import {
  FaLinkedin,
  FaBehance,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export function Contact() {
  const icons = [
    {
      href: "mailto:ysul2505@gmail.com",
      label: "Email",
      icon: <FaEnvelope />,
      hoverColor: "hover:text-red-500", // Gmail Red
    },
    {
      href: "https://www.linkedin.com/in/uvaisulkarni25/",
      label: "LinkedIn",
      icon: <FaLinkedin />,
      hoverColor: "hover:text-blue-600", // LinkedIn Blue
    },
    {
      href: "https://www.behance.net/uvaisulkarni",
      label: "Behance",
      icon: <FaBehance />,
      hoverColor: "hover:text-blue-500", // Behance Blue
    },
    {
      href: "tel:+918344875844",
      label: "Phone",
      icon: <FaPhone />,
      hoverColor: "hover:text-green-500", // Call Green
    },
    {
      href: "#",
      label: "Location",
      icon: <FaMapMarkerAlt />,
      hoverColor: "hover:text-rose-500", // Location Pink
    },
  ];

  return (
    <section className="py-16 bg-secondary/20 text-center">
      <h2 className="text-2xl font-semibold mb-8 text-foreground">
        Connect with me
      </h2>
      <div className="flex justify-center gap-6">
        {icons.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className={`text-2xl text-muted-foreground transition-transform duration-300 transform hover:scale-125 ${item.hoverColor}`}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </section>
  );
}
