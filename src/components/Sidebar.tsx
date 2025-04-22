
import SocialIcons from "./SocialIcons";

const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Internships", href: "#internships" },
  { label: "Certifications", href: "#certifications" },
];

export default function Sidebar() {
  return (
    <aside className="flex flex-col items-center py-10 px-6 bg-[#E5DEFF] min-h-screen w-full max-w-[270px] shadow-lg">
      <div className="flex flex-col items-center">
        <img
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=facearea&w=200&h=200&facepad=3&q=80"
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
        />
        <h1 className="mt-6 text-2xl font-bold text-gray-800">Prince Kumar</h1>
        <p className="text-violet-600 font-medium text-sm">Computer Science Student</p>
        <p className="text-gray-600 text-sm">Muzaffarpur, INDIA</p>
        <SocialIcons />
      </div>
      <nav className="mt-12 w-full flex flex-col gap-2">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="py-2 px-4 rounded-lg font-semibold hover:bg-violet-50 transition text-gray-700 text-left"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
