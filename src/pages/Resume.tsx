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
    <div className="h-screen flex flex-col overflow-hidden bg-shortsNeutral-900">
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
          className="h-screen w-full flex flex-col items-center justify-center snap-start relative bg-gradient-to-br from-shortsNeutral-800 via-shortsNeutral-900 to-shortsBlue-900 p-4"
        >
          <div className="absolute inset-0 bg-shortsNeutral-800 opacity-10 z-0"></div>
          <div className="max-w-sm w-full flex flex-col items-center z-10">
            <img
              src="/lovable-uploads/365c6999-af97-4e00-a7c4-c9eb8aa2cc4d.png"
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border-4 border-shortsNeutral-300 shadow-xl"
            />
            <h1 className="text-4xl font-extrabold font-montserrat text-shortsWhite mt-4 drop-shadow-md">
              Prince Kumar
            </h1>
            <p className="text-lg font-semibold font-montserrat text-shortsNeutral-300 mb-2">
              Empowering Ideas with Code
            </p>
            <p className="text-sm text-shortsNeutral-200 mb-4 text-center">
              I&apos;m Prince Kumar, an ambitious software engineer passionate about turning ideas into digital realities. With expertise in programming, data, and creative problem-solving, I&apos;m eager to contribute and grow in the tech world.
            </p>
            <div className="flex justify-center mt-2">
              <SocialIcons />
            </div>
          </div>
          <div className="absolute bottom-10 left-0 right-0 flex justify-center">
            <button 
              onClick={scrollToNextSection}
              className="bg-shortsNeutral-700/30 hover:bg-shortsNeutral-700/50 p-2 rounded-full animate-bounce"
            >
              <ChevronDown className="text-shortsNeutral-300" />
            </button>
          </div>
        </section>

        {/* Skills Section */}
        <section 
          id="skills" 
          className="h-screen w-full flex flex-col items-center justify-center snap-start p-6 bg-gradient-to-br from-shortsBlue-900 to-shortsNeutral-800"
        >
          <h2 className="text-3xl font-extrabold font-montserrat text-shortsWhite mb-10">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-xs">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-shortsNeutral-700/30 text-shortsNeutral-200 px-4 py-2 rounded-full text-sm font-semibold hover:bg-shortsNeutral-700/50 transition-colors duration-200 border border-shortsNeutral-700/30"
              >
                {skill}
              </span>
            ))}
          </div>
          
          <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-8">
            <button 
              onClick={scrollToPrevSection}
              className="bg-shortsNeutral-700/30 p-2 rounded-full"
            >
              <ChevronUp className="text-shortsNeutral-300" />
            </button>
            <button 
              onClick={scrollToNextSection}
              className="bg-shortsNeutral-700/30 p-2 rounded-full animate-bounce"
            >
              <ChevronDown className="text-shortsNeutral-300" />
            </button>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="h-screen w-full flex flex-col items-center justify-center snap-start p-6 bg-gradient-to-br from-shortsAccent to-shortsPurple">
          <h2 className="text-3xl font-extrabold font-montserrat text-shortsWhite mb-8">Education</h2>
          <div className="max-w-xs space-y-6">
            <div className="bg-shortsWhite/10 backdrop-blur-sm p-4 rounded-xl border border-shortsWhite/30">
              <h3 className="text-xl font-bold text-shortsWhite">B-Tech (CS & System Engineering)</h3>
              <p className="text-shortsWhite/80">KIIT, Odisha (2020-2024)</p>
              <p className="text-shortsWhite font-semibold">81.6%</p>
            </div>
            <div className="bg-shortsWhite/10 backdrop-blur-sm p-4 rounded-xl border border-shortsWhite/30">
              <h3 className="text-xl font-bold text-shortsWhite">12th Board</h3>
              <p className="text-shortsWhite/80">M.R. Janta College, Bihar Board (2018-2020)</p>
              <p className="text-shortsWhite font-semibold">62.8%</p>
            </div>
            <div className="bg-shortsWhite/10 backdrop-blur-sm p-4 rounded-xl border border-shortsWhite/30">
              <h3 className="text-xl font-bold text-shortsWhite">10th Board</h3>
              <p className="text-shortsWhite/80">DAV Public School, CBSE (2015-2018)</p>
              <p className="text-shortsWhite font-semibold">46.8%</p>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-8">
            <button 
              onClick={scrollToPrevSection}
              className="bg-shortsWhite/20 p-2 rounded-full"
            >
              <ChevronUp className="text-shortsWhite" />
            </button>
            <button 
              onClick={scrollToNextSection}
              className="bg-shortsWhite/20 p-2 rounded-full animate-bounce"
            >
              <ChevronDown className="text-shortsWhite" />
            </button>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="h-screen w-full flex flex-col items-center justify-center snap-start p-6 bg-gradient-to-br from-shortsYellow to-shortsRed">
          <h2 className="text-3xl font-extrabold font-montserrat text-shortsDark mb-8">Projects</h2>
          <div className="max-w-xs space-y-6">
            <div className="bg-shortsDark/10 backdrop-blur-sm p-4 rounded-xl border border-shortsDark/30">
              <h3 className="text-xl font-bold text-shortsDark">Sentiment Analysis on Twitter Data</h3>
              <p className="text-shortsDark/80">NLP project analyzing opinions from tweets</p>
            </div>
            <div className="bg-shortsDark/10 backdrop-blur-sm p-4 rounded-xl border border-shortsDark/30">
              <h3 className="text-xl font-bold text-shortsDark">Bangalore House Price Prediction</h3>
              <p className="text-shortsDark/80">ML regression model</p>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-8">
            <button 
              onClick={scrollToPrevSection}
              className="bg-shortsDark/20 p-2 rounded-full"
            >
              <ChevronUp className="text-shortsDark" />
            </button>
            <button 
              onClick={scrollToNextSection}
              className="bg-shortsDark/20 p-2 rounded-full animate-bounce"
            >
              <ChevronDown className="text-shortsDark" />
            </button>
          </div>
        </section>

        {/* Internships Section */}
        <section id="internships" className="h-screen w-full flex flex-col items-center justify-center snap-start p-6 bg-gradient-to-br from-shortsAccent to-shortsYellow">
          <h2 className="text-3xl font-extrabold font-montserrat text-shortsDark mb-8">Internships</h2>
          <div className="max-w-xs space-y-6">
            <div className="bg-shortsDark/10 backdrop-blur-sm p-4 rounded-xl border border-shortsDark/30">
              <h3 className="text-xl font-bold text-shortsDark">Marketing & Tech Support Intern</h3>
              <p className="text-shortsDark/80">Semika Technology (May–June 2023)</p>
            </div>
            <div className="bg-shortsDark/10 backdrop-blur-sm p-4 rounded-xl border border-shortsDark/30">
              <h3 className="text-xl font-bold text-shortsDark">Sales & Marketing</h3>
              <p className="text-shortsDark/80">Highradius (Aug–Sept 2023)</p>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-8">
            <button 
              onClick={scrollToPrevSection}
              className="bg-shortsDark/20 p-2 rounded-full"
            >
              <ChevronUp className="text-shortsDark" />
            </button>
            <button 
              onClick={scrollToNextSection}
              className="bg-shortsDark/20 p-2 rounded-full animate-bounce"
            >
              <ChevronDown className="text-shortsDark" />
            </button>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="h-screen w-full flex flex-col items-center justify-center snap-start p-6 bg-gradient-to-br from-shortsPurple to-shortsAccent">
          <h2 className="text-3xl font-extrabold font-montserrat text-shortsWhite mb-8">Certifications</h2>
          <div className="max-w-xs max-h-[60vh] overflow-y-auto px-2 space-y-4">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="bg-shortsWhite/10 backdrop-blur-sm p-3 rounded-xl border border-shortsWhite/30"
              >
                <p className="text-shortsWhite font-medium">{cert}</p>
              </div>
            ))}
          </div>
          
          <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-8">
            <button 
              onClick={scrollToPrevSection}
              className="bg-shortsWhite/20 p-2 rounded-full"
            >
              <ChevronUp className="text-shortsWhite" />
            </button>
            <button 
              onClick={scrollToNextSection}
              className="bg-shortsWhite/20 p-2 rounded-full animate-bounce"
            >
              <ChevronDown className="text-shortsWhite" />
            </button>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="h-screen w-full flex flex-col items-center justify-center snap-start p-6 bg-gradient-to-b from-shortsRed to-shortsDark">
          <h2 className="text-3xl font-extrabold font-montserrat text-shortsWhite mb-8">Let's Connect!</h2>
          <p className="text-shortsWhite/90 text-center max-w-xs mb-8">
            Ready to collaborate or have questions? Reach out using social links or drop me an email!
          </p>
          <a 
            href="mailto:ps1750322@gmail.com"
            className="bg-shortsAccent text-shortsDark px-8 py-3 rounded-full font-bold uppercase font-montserrat text-lg tracking-widest shadow-lg hover:bg-shortsAccent/80 transition-all duration-300"
          >
            Contact Me
          </a>
          <div className="mt-8">
            <SocialIcons />
          </div>
          
          <div className="absolute bottom-10 left-0 right-0 flex justify-center">
            <button 
              onClick={scrollToPrevSection}
              className="bg-shortsWhite/20 p-2 rounded-full"
            >
              <ChevronUp className="text-shortsWhite" />
            </button>
          </div>
        </section>
      </main>
      
      {/* Progress indicator */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
        {sections.map((section, index) => (
          <div 
            key={index}
            className={`w-2 h-2 rounded-full ${currentSection === index ? 'bg-shortsWhite' : 'bg-shortsNeutral-700'}`}
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
