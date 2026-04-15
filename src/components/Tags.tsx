function Tags({ text }: { text: string }) {
  return (
    <div
      className="border-[#383459] border-2 bg-[#1b192f] rounded-3xl text-neutral-300 w-fit px-3
       transform
        transition-all duration-200 ease-out
        hover:scale-105
        hover:text-neutral-200
        hover:shadow-lg hover:shadow-indigo-900/40

        will-change-transform"
    >
      <p className="font-medium">{text}</p>
    </div>
  );
}

export default Tags;
