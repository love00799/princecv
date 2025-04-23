import { useRef, useState } from "react";
import SocialIcons from "../components/SocialIcons";
import { ChevronUp, ChevronDown } from "lucide-react";
import BackgroundAudio from "../components/BackgroundAudio";

const skills = [
  "C++", "C", "Java", "Python", "HTML", "SQL", 
  "LLMs", "Tableau", "MS Excel", "PowerPoint", "MS Word"
];

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

export default function Resume() {
  const mainRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  
  const sections = [
    { id: "profile", label: "Profile" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "internships", label: "Internships" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" }
  ];
  
  const scrollToNextSection = () => {
    if (currentSection < sections.length - 1) {
      const nextSection = document.getElementById(sections[currentSection + 1].id);
      nextSection?.scrollIntoView({ behavior: "smooth" });
      setCurrentSection(currentSection + 1);
    }
  };
  
  const scrollToPrevSection = () => {
    if (currentSection > 0) {
      const prevSection = document.getElementById(sections[currentSection - 1].id);
      prevSection?.scrollIntoView({ behavior: "smooth" });
      setCurrentSection(currentSection - 1);
    }
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-[#10121A]">
      {/* Audio controls */}
      <div className="absolute top-4 right-4 z-50">
        <BackgroundAudio />
      </div>
      
      {/* Main content area - vertical shorts-style scroll */}
      <main 
        ref={mainRef}
        className="flex-1 snap-y snap-mandatory overflow-y-auto overflow-x-hidden relative"
        onScroll={(e) => {
          const scrollTop = e.currentTarget.scrollTop;
          const sectionHeight = window.innerHeight;
          const newSection = Math.floor(scrollTop / sectionHeight);
          if (newSection !== currentSection) {
            setCurrentSection(newSection);
          }
        }}
      >
        {/* Profile Section */}
        <section 
          id="profile" 
          className="h-screen w-full flex flex-col items-center justify-center snap-start relative"
          style={{
            background: "linear-gradient(90deg, #28243e 0%, #301e32 100%)"
          }}
        >
          <div className="absolute inset-0 bg-black/20 z-0"></div>
          <div className="max-w-sm w-full flex flex-col items-center z-10">
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
          </div>
          <div className="absolute bottom-10 left-0 right-0 flex justify-center">
            <button 
              onClick={scrollToNextSection}
              className="bg-[#1A1732]/80 hover:bg-[#1A1732] p-2 rounded-full animate-bounce"
            >
              <ChevronDown className="text-[#CAC4F7]" />
            </button>
          </div>
        </section>

        {/* Skills Section - Soft Neutral Gray with Purple Accent */}
        <section 
          id="skills" 
          className="h-screen w-full flex flex-col items-center justify-center snap-start p-6"
          style={{
            background: "linear-gradient(105deg, #F1F0FB 0%, #E5DEFF 100%)"
          }}
        >
          <h2 className="text-3xl font-extrabold font-montserrat text-[#403E43] mb-10">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-xs">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-white/60 text-[#403E43] px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/80 transition-colors duration-200 border border-[#9B87F5]/40"
              >
                {skill}
              </span>
            ))}
          </div>
          
          <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-8">
            <button 
              onClick={scrollToPrevSection}
              className="bg-white/20 p-2 rounded-full"
            >
              <ChevronUp className="text-[#474A5B]" />
            </button>
            <button 
              onClick={scrollToNextSection}
              className="bg-white/20 p-2 rounded-full animate-bounce"
            >
              <ChevronDown className="text-[#474A5B]" />
            </button>
          </div>
        </section>

        {/* Education Section - Soft Peach with Gray Accents */}
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

        {/* Projects Section - Soft Blue with Gray Accents */}
        <section id="projects" className="h-screen w-full flex flex-col items-center justify-center snap-start p-6"
          style={{
            background: "linear-gradient(93deg, #D3E4FD 0%, #F1F0FB 85%)"
          }}
        >
          <h2 className="text-3xl font-extrabold font-montserrat text-[#403E43] mb-8">Projects</h2>
          <div className="max-w-xs space-y-6">
            <div className="bg-white/60 backdrop-blur-[1px] p-4 rounded-xl border border-[#9B87F5]/40">
              <h3 className="text-xl font-bold text-[#554E7B]">Sentiment Analysis on Twitter Data</h3>
              <p className="text-[#6E59A5]/70">NLP project analyzing opinions from tweets</p>
            </div>
            <div className="bg-white/60 backdrop-blur-[1px] p-4 rounded-xl border border-[#86e3ce]/50">
              <h3 className="text-xl font-bold text-[#187259]">Bangalore House Price Prediction</h3>
              <p className="text-[#187259]/70">ML regression model</p>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-8">
            <button 
              onClick={scrollToPrevSection}
              className="bg-[#b1b4e1]/40 p-2 rounded-full"
            >
              <ChevronUp className="text-[#21448e]" />
            </button>
            <button 
              onClick={scrollToNextSection}
              className="bg-[#86e3ce]/40 p-2 rounded-full animate-bounce"
            >
              <ChevronDown className="text-[#187259]" />
            </button>
          </div>
        </section>

        {/* Internships Section - Soft Green with Gray Accents */}
        <section id="internships" className="h-screen w-full flex flex-col items-center justify-center snap-start p-6"
          style={{
            background: "linear-gradient(100deg, #F2FCE2 0%, #F1F0FB 100%)"
          }}
        >
          <h2 className="text-3xl font-extrabold font-montserrat text-[#403E43] mb-8">Internships</h2>
          <div className="max-w-xs space-y-6">
            <div className="bg-white/80 backdrop-blur-[1px] p-4 rounded-xl border border-[#9B87F5]/40">
              <h3 className="text-xl font-bold text-[#554E7B]">Marketing & Tech Support Intern</h3>
              <p className="text-[#44342f]/80">Semika Technology (May–June 2023)</p>
            </div>
            <div className="bg-white/80 backdrop-blur-[1px] p-4 rounded-xl border border-[#dfc4e7]/40">
              <h3 className="text-xl font-bold text-[#9367a6]">Sales & Marketing</h3>
              <p className="text-[#44342f]/80">Highradius (Aug–Sept 2023)</p>
            </div>
          </div>
          
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

        {/* Certifications Section - Soft Yellow with Gray Accents */}
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

        {/* Contact Section */}
        <section id="contact" className="h-screen w-full flex flex-col items-center justify-center snap-start p-6"
          style={{
            background: "linear-gradient(120deg,#6e59a5 0%, #212437 100%)"
          }}
        >
          <h2 className="text-3xl font-extrabold font-montserrat text-white mb-8">Let's Connect!</h2>
          <p className="text-white/90 text-center max-w-xs mb-8">
            Ready to collaborate or have questions? Reach out using social links or drop me an email!
          </p>
          <a 
            href="mailto:ps1750322@gmail.com"
            className="bg-[#f9cc90] text-[#212437] px-8 py-3 rounded-full font-bold uppercase font-montserrat text-lg tracking-widest shadow-lg hover:bg-[#ffe1a5] transition-all duration-300"
          >
            Contact Me
          </a>
          <div className="mt-8">
            <SocialIcons />
          </div>
          
          <div className="absolute bottom-10 left-0 right-0 flex justify-center">
            <button 
              onClick={scrollToPrevSection}
              className="bg-[#f9cc90]/40 p-2 rounded-full"
            >
              <ChevronUp className="text-[#ffe1a5]" />
            </button>
          </div>
        </section>
      </main>
      
      {/* Progress indicator */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
        {sections.map((section, index) => (
          <div 
            key={index}
            className={`w-2 h-2 rounded-full ${currentSection === index ? 'bg-white' : 'bg-[#d1d0e2]'}`}
            onClick={() => {
              const targetSection = document.getElementById(section.id);
              targetSection?.scrollIntoView({ behavior: "smooth" });
              setCurrentSection(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}
