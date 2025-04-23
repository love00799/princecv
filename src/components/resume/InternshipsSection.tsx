
import { ChevronUp, ChevronDown } from "lucide-react";
import Section3DEffect from "../Section3DEffect";

export default function InternshipsSection({
  scrollToPrevSection,
  scrollToNextSection
}: { scrollToPrevSection: () => void; scrollToNextSection: () => void; }) {
  return (
    <section id="internships" className="h-screen w-full flex flex-col items-center justify-center snap-start p-6"
      style={{
        background: "linear-gradient(100deg, #F2FCE2 0%, #F1F0FB 100%)"
      }}
    >
      <Section3DEffect className="max-w-xs w-full">
        <h2 className="text-3xl font-extrabold font-montserrat text-[#403E43] mb-8">Internships</h2>
        <div className="space-y-6">
          <div className="bg-white/80 backdrop-blur-[1px] p-4 rounded-xl border border-[#9B87F5]/40">
            <h3 className="text-xl font-bold text-[#554E7B]">Marketing & Tech Support Intern</h3>
            <p className="text-[#44342f]/80">Semika Technology (May–June 2023)</p>
          </div>
          <div className="bg-white/80 backdrop-blur-[1px] p-4 rounded-xl border border-[#dfc4e7]/40">
            <h3 className="text-xl font-bold text-[#9367a6]">Sales & Marketing</h3>
            <p className="text-[#44342f]/80">Highradius (Aug–Sept 2023)</p>
          </div>
        </div>
      </Section3DEffect>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-8">
        <button 
          onClick={scrollToPrevSection}
          className="bg-[#FFF7AE]/40 p-2 rounded-full"
        >
          <ChevronUp className="text-[#ca9342]" />
        </button>
        <button 
          onClick={scrollToNextSection}
          className="bg-[#dfc4e7]/40 p-2 rounded-full animate-bounce"
        >
          <ChevronDown className="text-[#9367a6]" />
        </button>
      </div>
    </section>
  );
}

