
import { ChevronUp, ChevronDown, Code, Database } from "lucide-react";
import Section3DEffect from "../Section3DEffect";

const skills = [
  "C++", "C", "Java", "Python", "HTML", "SQL", 
  "LLMs", "Tableau", "MS Excel", "PowerPoint", "MS Word"
];

export default function SkillsSection({
  scrollToPrevSection,
  scrollToNextSection
}: { scrollToPrevSection: () => void; scrollToNextSection: () => void; }) {
  return (
    <section 
      id="skills" 
      className="h-screen w-full flex flex-col items-center justify-center snap-start p-6"
      style={{
        background: "linear-gradient(105deg, #F1F0FB 0%, #E5DEFF 100%)"
      }}
    >
      <Section3DEffect className="w-full flex flex-col items-center">
        <div className="flex items-center gap-2">
          <Code className="text-[#403E43] h-7 w-7" />
          <h2 className="text-3xl font-extrabold font-montserrat text-[#403E43] mb-10">Skills</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-xs">
          {skills.map((skill, index) => (
            <span
              key={skill}
              className="bg-white/60 text-[#403E43] px-4 py-2 rounded-full text-sm font-semibold hover:scale-110 hover:shadow-lg hover:bg-white/80 transition-all duration-300 border border-[#9B87F5]/40"
              style={{
                animationDelay: `${index * 0.1}s`,
                transform: "translateY(0px)",
                animation: "float 3s ease-in-out infinite"
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </Section3DEffect>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-8">
        <button 
          onClick={scrollToPrevSection}
          className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-all"
        >
          <ChevronUp className="text-[#474A5B]" />
        </button>
        <button 
          onClick={scrollToNextSection}
          className="bg-white/20 p-2 rounded-full animate-bounce hover:bg-white/40 transition-all"
        >
          <ChevronDown className="text-[#474A5B]" />
        </button>
      </div>
    </section>
  );
}
