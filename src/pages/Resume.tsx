
import Sidebar from "../components/Sidebar";

const aboutMe = `I'm Tomasz Gajda, a passionate front-end developer with a flair for crafting delightful web experiences. I specialize in React, TypeScript, and interactive UI design. I thrive at the intersection of aesthetics and usability.`;

const skills = [
  "React.js",
  "TypeScript",
  "Tailwind CSS",
  "Shadcn UI",
  "Figma",
  "Framer Motion",
  "Next.js",
];

export default function Resume() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-[#F1F0FB] to-white">
      <div className="md:w-1/4">
        <Sidebar />
      </div>
      <main className="flex-1 px-6 py-12 flex flex-col gap-10 animate-fade-in">
        <section className="max-w-2xl mx-auto mb-6 flex flex-col items-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Hello!</h2>
          <p className="text-lg text-gray-500 font-light text-center">{aboutMe}</p>
        </section>
        <section id="about" className="max-w-2xl mx-auto bg-white/90 rounded-lg py-8 px-8 shadow flex flex-col gap-2">
          <h3 className="text-2xl font-semibold text-violet-700 mb-3">About</h3>
          <p>
            Tomasz is a frontend engineer focused on elegant design and high-performance React UIs. He cares about modern standards, accessibility, and clean code.
          </p>
        </section>
        <section
          id="skills"
          className="max-w-2xl mx-auto bg-white/90 rounded-lg py-8 px-8 shadow flex flex-col gap-4"
        >
          <h3 className="text-2xl font-semibold text-violet-700 mb-3">Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-violet-100 text-violet-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover-scale"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
        {/* Placeholder for Projects and Contact. User can expand later. */}
      </main>
    </div>
  );
}
