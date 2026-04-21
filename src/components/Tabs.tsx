type TabsProps = {
  text: string;
  id: string;
  isActive: boolean;
  onClick: (id: string) => void;
};

function Tabs({ text, id, isActive, onClick }: TabsProps) {
  return (
    <button
      type="button"
      onClick={() => onClick(id)}
      onMouseDown={(event) => event.preventDefault()}
      className="group relative w-full cursor-pointer rounded-lg border-0! bg-transparent px-2! py-1.5! text-xs whitespace-nowrap text-center outline-none transition-all duration-250 hover:border-0! focus:border-0! focus:outline-none focus-visible:outline-none sm:w-auto sm:rounded-2xl sm:px-6! sm:py-3! sm:text-base"
      aria-current={isActive ? "page" : undefined}
    >
      <span
        className={[
          "pointer-events-none absolute -inset-0.5 rounded-lg sm:rounded-2xl bg-linear-to-br from-blue-600 via-amber-500 to-orange-600 transition-opacity duration-250",
          isActive ? "opacity-[0.88]" : "opacity-0",
        ].join(" ")}
      />
      <span
        className={[
          "pointer-events-none absolute inset-0 rounded-lg sm:rounded-2xl ring-1 transition-all duration-250",
          isActive
            ? "bg-[#fffdf8] ring-transparent shadow-[0_8px_28px_-6px_rgba(46,81,209,0.1)]"
            : "bg-transparent ring-transparent group-hover:bg-blue-50/60 group-hover:shadow-[0_8px_24px_-8px_rgba(46,81,209,0.06)]",
        ].join(" ")}
      />
      <div
        className={[
          "relative z-10 font-medium transition-all duration-250",
          isActive
            ? "text-blue-900 -translate-y-0.5"
            : "text-stone-500 group-hover:text-stone-800 group-hover:-translate-y-0.5",
        ].join(" ")}
      >
        {text}
      </div>
    </button>
  );
}

export default Tabs;
