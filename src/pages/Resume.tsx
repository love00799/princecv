
import Sidebar from "../components/Sidebar";

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
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-[#F1F0FB] to-white">
      <div className="md:w-1/4">
        <Sidebar />
      </div>
      <main className="flex-1 px-6 py-12 flex flex-col gap-10 animate-fade-in">
        <section id="skills" className="max-w-2xl mx-auto bg-white/90 rounded-lg py-8 px-8 shadow flex flex-col gap-4">
          <h3 className="text-2xl font-semibold text-violet-700 mb-3">Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-violet-100 text-violet-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover-scale"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="education" className="max-w-2xl mx-auto bg-white/90 rounded-lg py-8 px-8 shadow flex flex-col gap-2">
          <h3 className="text-2xl font-semibold text-violet-700 mb-3">Education</h3>
          <ul className="list-disc list-inside space-y-2">
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

        <section id="projects" className="max-w-2xl mx-auto bg-white/90 rounded-lg py-8 px-8 shadow flex flex-col gap-2">
          <h3 className="text-2xl font-semibold text-violet-700 mb-3">Projects</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Sentiment Analysis on Twitter Data</strong> – NLP project analyzing opinions from tweets
            </li>
            <li>
              <strong>Bangalore House Price Prediction</strong> – ML regression model
            </li>
          </ul>
        </section>

        <section id="internships" className="max-w-2xl mx-auto bg-white/90 rounded-lg py-8 px-8 shadow flex flex-col gap-2">
          <h3 className="text-2xl font-semibold text-violet-700 mb-3">Internships</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Marketing & Tech Support Intern – Semika Technology (May–June 2023)</li>
            <li>Sales & Marketing – Highradius (Aug–Sept 2023)</li>
          </ul>
        </section>

        <section id="certifications" className="max-w-2xl mx-auto bg-white/90 rounded-lg py-8 px-8 shadow flex flex-col gap-2">
          <h3 className="text-2xl font-semibold text-violet-700 mb-3">Certifications</h3>
          <ul className="list-disc list-inside space-y-2">
            {certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </section>

        <section className="max-w-2xl mx-auto bg-white/90 rounded-lg py-8 px-8 shadow flex flex-col gap-2">
          <h3 className="text-2xl font-semibold text-violet-700 mb-3">Languages</h3>
          <p>English, Hindi</p>
        </section>
      </main>
    </div>
  );
}
