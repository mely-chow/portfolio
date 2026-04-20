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
        className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* modal panel */}
      <div className="relative w-full max-w-[900px] max-h-[calc(100vh-7rem)] overflow-y-auto rounded-2xl bg-[#fffdf8] border border-stone-400/15 shadow-[0_24px_60px_-20px_rgba(42,36,56,0.12),inset_0_1px_0_rgba(255,255,255,0.75)]">
        {/* header */}
        <div className="flex items-center justify-between border-b border-stone-400/15 p-4 sm:p-6">
          <h2 className="text-stone-900 text-md sm:text-xl font-bold leading-tight font-display">
            {project.title}
          </h2>

          <button
            onClick={onClose}
            className="text-stone-500 hover:text-blue-900 text-lg sm:text-xl"
          >
            ✕
          </button>
        </div>

        {/* images */}
        <div className="border-b border-stone-400/15 px-4 py-4 sm:px-6">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
            {galleryImages.map((src, index) => (
              <div
                key={`${project.title}-image-${index}`}
                className="shrink-0 snap-start"
              >
                <div className="h-90 aspect-[9/19.5] overflow-hidden rounded-xl border border-stone-400/18 bg-stone-100 shadow-[0_8px_24px_-12px_rgba(42,36,56,0.08)] sm:h-96">
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
                className="px-3 py-1 rounded-full bg-blue-50/90 border border-blue-300/22 text-blue-950 text-sm shadow-[0_2px_10px_-4px_rgba(46,81,209,0.06)]"
              >
                {t}
              </span>
            ))}
          </div>

          <div>
            <h3 className="mb-2 text-left text-lg font-semibold text-stone-900">
              About this project
            </h3>
            <p className="text-left leading-relaxed text-stone-600">
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
                className="px-6 py-3 rounded-xl bg-linear-to-r from-blue-600 to-blue-800 text-white font-semibold shadow-md shadow-blue-500/25 hover:opacity-95"
              >
                View GitHub
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl border border-stone-400/28 text-stone-700 shadow-[0_2px_12px_-4px_rgba(42,36,56,0.05)] hover:bg-amber-50/90 hover:border-amber-300/30"
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
