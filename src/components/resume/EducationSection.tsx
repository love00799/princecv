
import { ChevronUp, ChevronDown } from "lucide-react";

export default function EducationSection({
  scrollToPrevSection,
  scrollToNextSection
}: { scrollToPrevSection: () => void; scrollToNextSection: () => void; }) {
  return (
    <section id="education" 
      className="h-screen w-full flex flex-col items-center justify-center snap-start p-6"
      style={{
        background: "linear-gradient(90deg, #FDE1D3 0%, #F1F0FB 100%)"
      }}
    >
      <h2 className="text-3xl font-extrabold font-montserrat text-[#403E43] mb-8">Education</h2>
      <div className="max-w-xs space-y-6">
        <div className="bg-white/70 backdrop-blur-[2px] p-4 rounded-xl border border-[#9B87F5]/40">
          <h3 className="text-xl font-bold text-[#554E7B]">B-Tech (CS & System Engineering)</h3>
          <p className="text-[#6E59A5]/90">KIIT, Odisha (2020-2024)</p>
          <p className="text-[#403E43] font-semibold">81.6%</p>
        </div>
        <div className="bg-white/60 backdrop-blur-[2px] p-4 rounded-xl border border-[#dab5ff]">
          <h3 className="text-xl font-bold text-[#4a356e]">12th Board</h3>
          <p className="text-[#7f5da8]/80">M.R. Janta College, Bihar Board (2018-2020)</p>
          <p className="text-[#6c4c93] font-semibold">62.8%</p>
        </div>
        <div className="bg-white/60 backdrop-blur-[2px] p-4 rounded-xl border border-[#b2b4e0]">
          <h3 className="text-xl font-bold text-[#474a5b]">10th Board</h3>
          <p className="text-[#595b73]/80">DAV Public School, CBSE (2015-2018)</p>
          <p className="text-[#474a5b] font-semibold">46.8%</p>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-8">
        <button 
          onClick={scrollToPrevSection}
          className="bg-[#f3a3b8]/40 p-2 rounded-full"
        >
          <ChevronUp className="text-[#8e236e]" />
        </button>
        <button 
          onClick={scrollToNextSection}
          className="bg-[#dab5ff]/60 p-2 rounded-full animate-bounce"
        >
          <ChevronDown className="text-[#4a356e]" />
        </button>
      </div>
    </section>
  );
}
