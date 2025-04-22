
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";

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
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-shortsYellow via-shortsAccent/30 to-white font-montserrat">
      <div className="md:w-1/4">
        <Sidebar />
      </div>
      <main className="flex-1 px-1 md:px-6 pt-2 md:pt-8 pb-8 flex flex-col gap-10 animate-fade-in">
        <div className="max-w-3xl mx-auto w-full">
          <HeroSection />
        </div>
        <section id="skills" className="max-w-2xl mx-auto bg-shortsWhite/90 rounded-3xl py-8 px-8 shadow flex flex-col gap-4 border-2 border-shortsAccent/20 animate-fade-in">
          <h3 className="text-2xl font-extrabold font-montserrat text-shortsRed mb-3 tracking-tight">Skills</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-shortsYellow/70 text-shortsDark px-4 py-2 rounded-full text-sm font-semibold shadow-sm hover-scale font-montserrat border-2 border-shortsRed/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="education" className="max-w-2xl mx-auto bg-shortsWhite/95 rounded-3xl py-8 px-8 shadow flex flex-col gap-2 border-2 border-shortsAccent/20 animate-fade-in">
          <h3 className="text-2xl font-extrabold font-montserrat text-shortsPurple mb-3 tracking-tight">Education</h3>
          <ul className="list-disc list-inside space-y-2 font-montserrat text-shortsDark/90">
            <li>
              <strong>B-Tech (Computer Science & System Engineering)</strong>, KIIT, Odisha (2020-2024) – 81.6%
            </li>
            <li>
              <strong>12th Board</strong>, M.R. Janta College, Bihar Board (2018-2020) – 62.8%
            </li>
            <li>
              <strong>10th Board</strong>, DAV Public School, CBSE (2015-2018) – 46.8%
            </li>
          </ul>
        </section>

        <section id="projects" className="max-w-2xl mx-auto bg-shortsWhite/95 rounded-3xl py-8 px-8 shadow flex flex-col gap-2 border-2 border-shortsRed/20 animate-fade-in">
          <h3 className="text-2xl font-extrabold font-montserrat text-shortsRed mb-3 tracking-tight">Projects</h3>
          <ul className="list-disc list-inside space-y-2 font-montserrat text-shortsDark/90">
            <li>
              <strong>Sentiment Analysis on Twitter Data</strong> – NLP project analyzing opinions from tweets
            </li>
            <li>
              <strong>Bangalore House Price Prediction</strong> – ML regression model
            </li>
          </ul>
        </section>

        <section id="internships" className="max-w-2xl mx-auto bg-shortsWhite/95 rounded-3xl py-8 px-8 shadow flex flex-col gap-2 border-2 border-shortsAccent/20 animate-fade-in">
          <h3 className="text-2xl font-extrabold font-montserrat text-shortsAccent mb-3 tracking-tight">Internships</h3>
          <ul className="list-disc list-inside space-y-2 font-montserrat text-shortsDark/90">
            <li>Marketing & Tech Support Intern – Semika Technology (May–June 2023)</li>
            <li>Sales & Marketing – Highradius (Aug–Sept 2023)</li>
          </ul>
        </section>

        <section id="certifications" className="max-w-2xl mx-auto bg-shortsWhite/90 rounded-3xl py-8 px-8 shadow flex flex-col gap-2 border-2 border-shortsPurple/20 animate-fade-in">
          <h3 className="text-2xl font-extrabold font-montserrat text-shortsPurple mb-3 tracking-tight">Certifications</h3>
          <ul className="list-disc list-inside space-y-2 font-montserrat text-shortsDark/90">
            {certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </section>

        <section className="max-w-2xl mx-auto bg-shortsWhite/90 rounded-3xl py-8 px-8 shadow flex flex-col gap-2 border-2 border-shortsRed/10 animate-fade-in">
          <h3 className="text-2xl font-extrabold font-montserrat text-shortsRed mb-3 tracking-tight">Languages</h3>
          <p className="text-shortsDark font-montserrat">English, Hindi</p>
        </section>

        <section id="lets-connect" className="max-w-2xl mx-auto bg-shortsAccent rounded-3xl py-10 px-8 shadow-lg flex flex-col items-center gap-4 mt-6 border-4 border-shortsRed/40 animate-scale-in">
          <h3 className="text-3xl font-extrabold font-montserrat text-shortsDark drop-shadow tracking-tight uppercase">Let's Connect!</h3>
          <p className="text-lg font-semibold text-shortsDark mb-2 text-center font-montserrat">Ready to collaborate or have questions? Reach out using social links or drop me an email!</p>
          <a href="mailto:ps1750322@gmail.com"
            className="bg-shortsRed hover:bg-shortsRed/80 transition text-shortsWhite px-8 py-3 rounded-2xl font-bold uppercase font-montserrat text-lg tracking-widest shadow"
          >
            Say Hello!
          </a>
        </section>
      </main>
    </div>
  );
}
