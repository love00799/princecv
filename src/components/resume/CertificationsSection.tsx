
import { ChevronUp, ChevronDown } from "lucide-react";

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
      <h2 className="text-3xl font-extrabold font-montserrat text-[#403E43] mb-8">Certifications</h2>
      <div className="max-w-xs max-h-[60vh] overflow-y-auto px-2 space-y-4">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-[#9B87F5]/40"
          >
            <p className="text-[#554E7B] font-medium">{cert}</p>
          </div>
        ))}
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-8">
        <button 
          onClick={scrollToPrevSection}
          className="bg-[#e6e5fa]/80 p-2 rounded-full"
        >
          <ChevronUp className="text-[#554e7b]" />
        </button>
        <button 
          onClick={scrollToNextSection}
          className="bg-[#ffe7fc]/80 p-2 rounded-full animate-bounce"
        >
          <ChevronDown className="text-[#373753]" />
        </button>
      </div>
    </section>
  );
}
