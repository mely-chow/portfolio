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
          from-amber-400 via-orange-500 to-indigo-950
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300 ease-out
        "
      />

      {/* Actual box */}
      <div
        className={[
          "relative z-10 h-full bg-[#07041e] border-2 border-[#383459] rounded-2xl transition-[border-color,box-shadow] duration-300 ease-out group-hover:shadow-[0_12px_40px_rgba(251,146,60,0.35)]",
          contentClassName,
        ].join(" ")}
      >
        {children}
      </div>
    </Wrapper>
  );
}

export default Box;
