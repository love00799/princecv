
import { Linkedin, Mail, Phone } from "lucide-react";

const socials = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/prince-kumar-5b3813202",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:ps1750322@gmail.com",
  },
  {
    name: "Phone",
    icon: Phone,
    url: "tel:+919504585029",
  },
];

export default function SocialIcons() {
  return (
    <div className="flex gap-3 mt-6">
      {socials.map((s) => (
        <a
          key={s.name}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.name}
          className="rounded-full bg-white hover:bg-purple-200 transition p-2 shadow-sm"
        >
          <s.icon size={20} className="text-violet-500" />
        </a>
      ))}
    </div>
  );
}
