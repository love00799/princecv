
import SocialIcons from "@/components/SocialIcons";
import { ChevronDown } from "lucide-react";
import Section3DEffect from "../Section3DEffect";

export default function ProfileSection({ scrollToNextSection }: { scrollToNextSection: () => void }) {
  return (
    <section 
      id="profile" 
      className="h-screen w-full flex flex-col items-center justify-center snap-start relative"
      style={{
        background: "linear-gradient(90deg, #28243e 0%, #301e32 100%)"
      }}
    >
      <div className="absolute inset-0 bg-black/20 z-0"></div>
      <Section3DEffect className="max-w-sm w-full flex flex-col items-center z-10">
        <img
          src="/lovable-uploads/365c6999-af97-4e00-a7c4-c9eb8aa2cc4d.png"
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover border-4 border-[#CAC4F7] shadow-xl"
        />
        <h1 className="text-4xl font-extrabold font-montserrat text-[#f4f2fb] mt-4 drop-shadow-md">
          Prince Kumar
        </h1>
        <p className="text-lg font-semibold font-montserrat text-[#CAC4F7] mb-2">
          Empowering Ideas with Code
        </p>
        <p className="text-sm text-[#CAB8FF] mb-4 text-center">
          I&apos;m Prince Kumar, an ambitious software engineer passionate about turning ideas into digital realities. With expertise in programming, data, and creative problem-solving, I&apos;m eager to contribute and grow in the tech world.
        </p>
        <div className="flex justify-center mt-2">
          <SocialIcons />
        </div>
      </Section3DEffect>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <button 
          onClick={scrollToNextSection}
          className="bg-[#1A1732]/80 hover:bg-[#1A1732] p-2 rounded-full animate-bounce"
        >
          <ChevronDown className="text-[#CAC4F7]" />
        </button>
      </div>
    </section>
  );
}
