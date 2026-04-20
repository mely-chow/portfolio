import Box from "./Box";
import Tags from "./Tags";

export type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  onClick: () => void;
  github?: string;
  live?: string;
};

function ProjectCard({
  title,
  description,
  image,
  tags,
  onClick,
}: ProjectCardProps) {
  return (
    <Box
      onClick={onClick}
      className="w-full"
      contentClassName="overflow-hidden group-hover:border-stone-400/08"
    >
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden rounded-t-2xl">
        <img
          src={image}
          className="block h-full w-full rounded-t-2xl object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-[#f7f4ec] via-transparent to-transparent opacity-90" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-lg font-bold text-stone-900">{title}</h3>

        <p className="text-stone-600 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <Tags key={t} text={t} />
          ))}
        </div>
      </div>
    </Box>
  );
}

export default ProjectCard;
