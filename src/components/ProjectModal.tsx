import { useEffect } from "react";
import type { Project } from "../pages/Projects";

type ProjectModalProps = {
  open: boolean;
  onClose: () => void;
  project: Project | null;
};

export default function ProjectModal({
  open,
  onClose,
  project,
}: ProjectModalProps) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open || !project) return null;
  const galleryImages =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [project.image];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto px-4 pt-24 pb-6 sm:px-6">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* modal panel */}
      <div className="relative w-full max-w-[900px] max-h-[calc(100vh-7rem)] overflow-y-auto rounded-2xl bg-[#07041e] border border-[#383459] shadow-2xl">
        {/* header */}
        <div className="flex items-center justify-between border-b border-[#383459] p-4 sm:p-6">
          <h2 className="text-white text-md sm:text-xl font-bold leading-tight">
            {project.title}
          </h2>

          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white text-lg sm:text-xl"
          >
            ✕
          </button>
        </div>

        {/* images */}
        <div className="border-b border-[#383459] px-4 py-4 sm:px-6">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
            {galleryImages.map((src, index) => (
              <div
                key={`${project.title}-image-${index}`}
                className="shrink-0 snap-start"
              >
                <div className="h-90 aspect-[9/19.5] overflow-hidden rounded-xl border border-[#383459] bg-[#0d0a2a] sm:h-96">
                  <img
                    src={src}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* body */}
        <div className="p-6 space-y-6">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t: string) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full bg-[#1c183a] text-neutral-300 text-sm"
              >
                {t}
              </span>
            ))}
          </div>

          <div>
            <h3 className="mb-2 text-left text-lg font-semibold text-white">
              About this project
            </h3>
            <p className="text-left leading-relaxed text-neutral-400">
              {project.longDescription ?? project.description}
            </p>
          </div>

          {/* buttons */}
          <div className="flex flex-wrap gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-indigo-950 text-white font-semibold hover:opacity-90"
              >
                View GitHub
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl border border-[#383459] text-neutral-300 hover:bg-[#121033]"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
