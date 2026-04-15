import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

export type Project = {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
  gallery?: string[];
};

const projects: Project[] = [
  {
    title: "Survey Builder Platform",
    description: "Create, send, and analyze surveys with a clean, guided UX.",
    longDescription:
      "A full-stack survey platform that lets teams build question flows, collect responses in real time, and view results in a clear, actionable dashboard. Includes authentication, role-based access, and exportable reports for stakeholders.",
    image: "/SurveyAppLogin.png",
    gallery: [
      "/creeksideHome.png",
      "/creeksideProjects.png",
      "/creeksideActivities.png",
      "/creeksideNotifications.png",
      "/creeksideMenu.png",
    ],
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="min-h-screen scroll-mt-24 flex items-center relative z-20"
    >
      <div className="w-full flex flex-col items-center md:-translate-y-4 lg:-translate-y-6">
        <h2 className="font-nabla text-2xl">Projects</h2>

        <div className="w-full py-12 px-6 md:px-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </div>

      <ProjectModal
        open={!!selectedProject}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default Projects;
