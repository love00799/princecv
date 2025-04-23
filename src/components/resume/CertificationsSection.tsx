
import { ChevronUp, ChevronDown, Award } from "lucide-react";
import Section3DEffect from "../Section3DEffect";

const certifications = [
  "Neural Networks and Deep Learning",
  "Improving DNNs: Hyperparameter Tuning",
  "AWS Academy: Cloud Semester 1",
  "AWS Academy: Cloud Foundations",
  "Human Resource Management",
  "Prompt Engineering for ChatGPT",
  "Microsoft Excel",
  "HackerRank Problem Solving (Basic)",
  "HackerRank Problem Solving (Intermediate)",
  "HackerRank SQL Basic"
];

export default function CertificationsSection({
  scrollToPrevSection,
  scrollToNextSection
}: { scrollToPrevSection: () => void; scrollToNextSection: () => void; }) {
  return (
    <section id="certifications" 
      className="h-screen w-full flex flex-col items-center justify-center snap-start p-6"
      style={{
        background: "linear-gradient(70deg, #FEF7CD 0%, #F1F0FB 100%)"
      }}
    >
      <Section3DEffect className="max-w-xs w-full">
        <div className="flex items-center gap-2 justify-center">
          <Award className="text-[#403E43] h-7 w-7" />
          <h2 className="text-3xl font-extrabold font-montserrat text-[#403E43] mb-8">Certifications</h2>
        </div>
        <div className="max-w-xs max-h-[60vh] overflow-y-auto pr-2 space-y-3 custom-scrollbar">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-[#9B87F5]/40 hover:bg-white transition-all hover:shadow-md"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: "slideIn 0.5s ease-out forwards",
                opacity: 0,
                transform: "translateX(-20px)"
              }}
            >
              <p className="text-[#554E7B] font-medium">{cert}</p>
            </div>
          ))}
        </div>
      </Section3DEffect>

      <style jsx>{`
        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.2);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(155,135,245,0.5);
          border-radius: 10px;
        }
      `}</style>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-8">
        <button 
          onClick={scrollToPrevSection}
          className="bg-[#e6e5fa]/80 p-2 rounded-full hover:bg-[#e6e5fa] transition-all"
        >
          <ChevronUp className="text-[#554e7b]" />
        </button>
        <button 
          onClick={scrollToNextSection}
          className="bg-[#ffe7fc]/80 p-2 rounded-full animate-bounce hover:bg-[#ffe7fc] transition-all"
        >
          <ChevronDown className="text-[#373753]" />
        </button>
      </div>
    </section>
  );
}
