
import { Play } from "lucide-react";
import BackgroundAudio from "./BackgroundAudio";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center pt-10 pb-10 bg-gradient-to-br from-shortsRed via-shortsYellow to-shortsAccent rounded-xl shadow-lg mb-10 overflow-hidden animate-hero-in">
      <div className="absolute inset-0 opacity-15 pointer-events-none"
           style={{
             background: "repeat center/cover url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=cover&w=800&q=60')"
           }} />
      <img
        src="/lovable-uploads/365c6999-af97-4e00-a7c4-c9eb8aa2cc4d.png"
        alt="Profile"
        className="z-10 w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-xl mb-6 relative"
      />
      <h1 className="z-10 text-4xl md:text-6xl font-extrabold font-montserrat text-shortsDark drop-shadow-md tracking-tight leading-tight mb-2 animate-fade-in">
        Prince Kumar
      </h1>
      <p className="z-10 text-xl md:text-2xl font-semibold font-montserrat text-shortsDark/80 mb-4">
        Visual journey • Engineering <span className="mx-2">|</span> <span className="bg-shortsRed px-3 py-1 text-shortsWhite font-bold rounded-full">2024</span>
      </p>
      <div className="z-10 my-2"><BackgroundAudio /></div>
      <div className="z-10 flex gap-2 justify-center pt-2">
        <a href="#projects" className="bg-shortsDark text-shortsYellow font-bold px-6 py-3 rounded-2xl shadow-lg text-lg hover:bg-shortsPurple transition duration-150 flex items-center gap-2 font-montserrat uppercase tracking-widest">
          <Play size={20} className="inline-block" /> View Projects
        </a>
        <a href="#lets-connect" className="bg-shortsAccent text-shortsDark font-bold px-6 py-3 rounded-2xl shadow-lg text-lg hover:bg-shortsPurple/80 transition duration-150 font-montserrat uppercase tracking-widest">
          Let’s Connect!
        </a>
      </div>
      {/* Soft gradient overlay for extra 'shorts' look */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-shortsRed/10 to-shortsWhite/10" />
    </section>
  );
}
