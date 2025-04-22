
import { Linkedin, Github, Mail } from "lucide-react";

const socials = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/your-profile/",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/your-username",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:youremail@example.com",
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
