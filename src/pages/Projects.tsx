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
    title: "Construction Progress Tracking Platform",
    description:
      "Digitizing construction site reporting with real-time visibility and notifications.",
    longDescription:
      "A full-stack construction survey platform that digitizes field reporting by enabling teams to log construction activities, upload photos, and track house-level progress in real time. Built as a mobile-friendly PWA with React and Ionic, the platform integrates a Node.js/Express backend deployed on Google Cloud Run, secure media uploads via Google Cloud Storage signed URLs, and real-time notifications using WebSockets and push notifications to keep teams informed of project updates.",
    image: "/SurveyAppLogin.png",
    gallery: [
      "/SurveyAppLogin.png",
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
      className="min-h-screen scroll-mt-24 flex items-start pt-6 md:items-center md:pt-0 relative z-20"
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
