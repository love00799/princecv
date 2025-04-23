
import { useRef, useState } from "react";
import BackgroundAudio from "../components/BackgroundAudio";
import ProfileSection from "../components/resume/ProfileSection";
import SkillsSection from "../components/resume/SkillsSection";
import EducationSection from "../components/resume/EducationSection";
import ProjectsSection from "../components/resume/ProjectsSection";
import InternshipsSection from "../components/resume/InternshipsSection";
import CertificationsSection from "../components/resume/CertificationsSection";
import ContactSection from "../components/resume/ContactSection";

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
      <main
        ref={mainRef}
        className="flex-1 snap-y snap-mandatory overflow-y-auto overflow-x-hidden relative"
        onScroll={(e) => {
          const scrollTop = e.currentTarget.scrollTop;
          const sectionHeight = window.innerHeight;
          const newSection = Math.floor(scrollTop / sectionHeight);
          if (newSection !== currentSection) setCurrentSection(newSection);
        }}
      >
        <ProfileSection scrollToNextSection={scrollToNextSection} />
        <SkillsSection
          scrollToPrevSection={scrollToPrevSection}
          scrollToNextSection={scrollToNextSection}
        />
        <EducationSection
          scrollToPrevSection={scrollToPrevSection}
          scrollToNextSection={scrollToNextSection}
        />
        <ProjectsSection
          scrollToPrevSection={scrollToPrevSection}
          scrollToNextSection={scrollToNextSection}
        />
        <InternshipsSection
          scrollToPrevSection={scrollToPrevSection}
          scrollToNextSection={scrollToNextSection}
        />
        <CertificationsSection
          scrollToPrevSection={scrollToPrevSection}
          scrollToNextSection={scrollToNextSection}
        />
        <ContactSection scrollToPrevSection={scrollToPrevSection} />
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
