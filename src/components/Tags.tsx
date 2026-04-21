function Tags({ text }: { text: string }) {
  return (
    <div
      className="rounded-3xl border border-blue-300/25 bg-blue-50/70 text-blue-950 shadow-[0_2px_14px_-4px_rgba(46,81,209,0.07)] w-fit px-3
       transform
        transition-all duration-200 ease-out
        hover:scale-105
        hover:bg-amber-50/90 hover:border-amber-300/25 hover:text-stone-900
        hover:shadow-[0_6px_20px_-6px_rgba(251,146,60,0.15)]

        will-change-transform"
    >
      <p className="font-medium">{text}</p>
    </div>
  );
}

export default Tags;
