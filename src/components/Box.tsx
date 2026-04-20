type BoxProps = {
  children: React.ReactNode;
  height?: number | string;
  href?: string;
  onClick?: () => void;
  className?: string;
  contentClassName?: string;
};

function Box({
  children,
  height,
  href,
  onClick,
  className,
  contentClassName,
}: BoxProps) {
  const Wrapper = href ? "a" : onClick ? "button" : "div";

  return (
    <Wrapper
      {...(href
        ? {
            href,
            target: "_blank",
            rel: "noopener noreferrer",
          }
        : {})}
      {...(onClick
        ? {
            type: "button",
            onClick,
          }
        : {})}
      style={height ? { minHeight: height } : undefined}
      className={[
        "relative group block rounded-2xl transition-transform duration-300 hover:-translate-y-2",
        onClick
          ? "w-full border-0! bg-transparent! p-0! text-left outline-none focus:outline-none focus-visible:outline-none"
          : "",
        className,
      ].join(" ")}
    >
      {/* Gradient ring */}
      <div
        className="
          pointer-events-none absolute -inset-0.75 rounded-[18px]
          bg-linear-to-br
          from-blue-600 via-amber-500 to-orange-600
          opacity-0 group-hover:opacity-[0.68]
          transition-opacity duration-300 ease-out
        "
      />

      {/* Actual box */}
      <div
        className={[
          "relative z-10 h-full bg-[#fffdf8] rounded-2xl border border-stone-400/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_2px_20px_-6px_rgba(42,36,56,0.05)] transition-[border-color,box-shadow] duration-300 ease-out group-hover:border-stone-400/25 group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_16px_48px_-12px_rgba(46,81,209,0.1)]",
          contentClassName,
        ].join(" ")}
      >
        {children}
      </div>
    </Wrapper>
  );
}

export default Box;
