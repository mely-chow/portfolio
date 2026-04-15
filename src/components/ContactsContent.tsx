function ContactsContent({
  header,
  text,
  icon: Icon,
}: {
  header?: string;
  text?: string;
  href?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="
          size-12 rounded-full p-3 mt-6
          bg-[#282732]
          bg-linear-to-br
          from-amber-400 via-orange-500 to-indigo-500
          bg-size-[200%_200%]
          bg-position-[0%_0%]
          group-hover:bg-position-[100%_100%]
          transition-all duration-500 ease-out
          shadow-md
        "
      >
        {Icon && (
          <Icon className=" w-full h-full  text-white transition-transform duration-500 group-hover:rotate-6 "></Icon>
        )}
      </div>
      <div className="m-4">
        <div className="text-white font-bold"> {header}</div>
        <div className="text-neutral-400 whitespace-nowrap">{text}</div>
      </div>
    </div>
  );
}

export default ContactsContent;
