
import { ChevronUp, ChevronDown, FileCode } from "lucide-react";
import Section3DEffect from "../Section3DEffect";

export default function ProjectsSection({
  scrollToPrevSection,
  scrollToNextSection
}: { scrollToPrevSection: () => void; scrollToNextSection: () => void; }) {
  return (
    <section id="projects" className="h-screen w-full flex flex-col items-center justify-center snap-start p-6"
      style={{
        background: "linear-gradient(93deg, #D3E4FD 0%, #F1F0FB 85%)"
      }}
    >
      <Section3DEffect className="max-w-xs w-full">
        <div className="flex items-center gap-2 justify-center">
          <FileCode className="text-[#403E43] h-7 w-7" />
          <h2 className="text-3xl font-extrabold font-montserrat text-[#403E43] mb-8">Projects</h2>
        </div>
        <div className="space-y-6">
          <div className="bg-white/60 backdrop-blur-[1px] p-4 rounded-xl border border-[#9B87F5]/40 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-bold text-[#554E7B]">Sentiment Analysis on Twitter Data</h3>
            <p className="text-[#6E59A5]/70">NLP project analyzing opinions from tweets</p>
            <div className="mt-2 flex gap-2">
              <span className="text-xs bg-[#e2d1ff]/50 px-2 py-1 rounded">NLP</span>
              <span className="text-xs bg-[#d1ffe2]/50 px-2 py-1 rounded">Python</span>
            </div>
          </div>
          <div className="bg-white/60 backdrop-blur-[1px] p-4 rounded-xl border border-[#86e3ce]/50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-bold text-[#187259]">Bangalore House Price Prediction</h3>
            <p className="text-[#187259]/70">ML regression model</p>
            <div className="mt-2 flex gap-2">
              <span className="text-xs bg-[#ceffd4]/50 px-2 py-1 rounded">ML</span>
              <span className="text-xs bg-[#d1ffe2]/50 px-2 py-1 rounded">Python</span>
            </div>
          </div>
        </div>
      </Section3DEffect>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-8">
        <button 
          onClick={scrollToPrevSection}
          className="bg-[#b1b4e1]/40 p-2 rounded-full hover:bg-[#b1b4e1]/60 transition-all"
        >
          <ChevronUp className="text-[#21448e]" />
        </button>
        <button 
          onClick={scrollToNextSection}
          className="bg-[#86e3ce]/40 p-2 rounded-full animate-bounce hover:bg-[#86e3ce]/60 transition-all"
        >
          <ChevronDown className="text-[#187259]" />
        </button>
      </div>
    </section>
  );
}
