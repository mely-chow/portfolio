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
          "pointer-events-none absolute -inset-0.5 rounded-lg sm:rounded-2xl bg-linear-to-br from-amber-400 via-orange-500 to-indigo-950 transition-opacity duration-250",
          isActive ? "opacity-100" : "opacity-0",
        ].join(" ")}
      />
      <span
        className={[
          "pointer-events-none absolute inset-0 rounded-lg sm:rounded-2xl ring-1 transition-all duration-250",
          isActive
            ? "bg-[#07041e] ring-transparent shadow-[0_8px_30px_rgba(251,146,60,0.25)]"
            : "bg-white/0 ring-transparent group-hover:bg-white/5 group-hover:shadow-[0_8px_30px_rgba(99,102,241,0.25)]",
        ].join(" ")}
      />
      <div
        className={[
          "relative z-10 font-medium transition-all duration-250",
          isActive
            ? "text-amber-300 -translate-y-0.5"
            : "text-neutral-400 group-hover:text-neutral-200 group-hover:-translate-y-0.5",
        ].join(" ")}
      >
        {text}
      </div>
    </button>
  );
}

export default Tabs;
