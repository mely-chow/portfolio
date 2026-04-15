import Tags from "./Tags";

function SkillsContent({ header, tags }: { header?: string; tags?: string[] }) {
  return (
    <div className="flex flex-col">
      <div className="flex mt-8 items-center">
        <div
          className="group-hover:w-6 w-1 opacity-70 group-hover:opacity-100 duration-500 ease-out ml-6 mr-2  bg-linear-to-br
          from-amber-400 via-orange-500 to-indigo-500
          bg-size-[200%_200%]
          bg-position-[0%_0%]
          group-hover:bg-position-[100%_100%]
          shadow-md h-1 rounded-2xl"
        ></div>
        <h2 className="text-neutral-300 font-bold">{header}</h2>
      </div>
      <div className="p-6 flex flex-wrap gap-x-4 gap-y-3">
        {tags?.map((t) => (
          <Tags text={t} key={t}></Tags>
        ))}
      </div>
    </div>
  );
}

export default SkillsContent;
