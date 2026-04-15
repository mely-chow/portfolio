import Box from "../components/Box";
import SkillsContent from "../components/SkillsContent";

const frontend = [
  "React",
  "Typscript",
  "Ionic",
  "Tailwind",
  "HTML",
  "CSS",
  "UX focused component design",
];

const backend = [
  "Node.js",
  "Express",
  "PostgreSQL",
  "REST APIs",
  "Auth",
  "Pagination",
  "Data modeling",
  "Pandas",
  "DuckDB",
];

const tools = [
  "Git",
  "Docker",
  "Firebase",
  "Google Cloud",
  "CI/CD",
  "Agile",
  "Code reviews",
];

const height = 150;
function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen scroll-mt-24 flex items-center relative z-20"
    >
      <div className="w-full flex flex-col items-center md:-translate-y-4 lg:-translate-y-6">
        <h2 className="font-nabla text-2xl">Skills & Technologies</h2>
        <div className="flex sm:flex-row flex-col w-full py-12 px-6 md:px-10 gap-5">
          <Box height={height}>
            <SkillsContent header="Frontend" tags={frontend}></SkillsContent>
          </Box>
          <Box height={height}>
            <SkillsContent header="Backend & Data" tags={backend}></SkillsContent>
          </Box>
          <Box height={height}>
            <SkillsContent header="Tools & Platform" tags={tools}></SkillsContent>
          </Box>
        </div>
      </div>
    </section>
  );
}

export default Skills;
