
import SocialIcons from "@/components/SocialIcons";
import { ChevronUp, Mail } from "lucide-react";
import Section3DEffect from "../Section3DEffect";

export default function ContactSection({ scrollToPrevSection }: { scrollToPrevSection: () => void }) {
  return (
    <section id="contact" className="h-screen w-full flex flex-col items-center justify-center snap-start p-6"
      style={{
        background: "linear-gradient(120deg,#6e59a5 0%, #212437 100%)"
      }}
    >
      <Section3DEffect className="w-full flex flex-col items-center">
        <div className="flex items-center gap-2 mb-8">
          <Mail className="text-white h-7 w-7" />
          <h2 className="text-3xl font-extrabold font-montserrat text-white">Let{"'"}s Connect!</h2>
        </div>
        <p className="text-white/90 text-center max-w-xs mb-8">
          Ready to collaborate or have questions? Reach out using social links or drop me an email!
        </p>
        <a 
          href="mailto:ps1750322@gmail.com"
          className="bg-[#f9cc90] text-[#212437] px-8 py-3 rounded-full font-bold uppercase font-montserrat text-lg tracking-widest shadow-lg hover:bg-[#ffe1a5] transition-all duration-300 transform hover:scale-105"
        >
          Contact Me
        </a>
        <div className="mt-8">
          <SocialIcons />
        </div>

        <div className="absolute -z-10 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      </Section3DEffect>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <button 
          onClick={scrollToPrevSection}
          className="bg-[#f9cc90]/40 p-2 rounded-full hover:bg-[#f9cc90]/60 transition-all"
        >
          <ChevronUp className="text-[#ffe1a5]" />
        </button>
      </div>
    </section>
  );
}
