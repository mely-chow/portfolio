import { useEffect, useState } from "react";
import Tabs from "./Tabs";

const sections = [
  { id: "home", text: "Home" },
  { id: "projects", text: "Projects" },
  { id: "skills", text: "Skills" },
  { id: "contacts", text: "Contacts" },
];

function Header() {
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    const sectionElements = sections
      .map((section) => document.getElementById(section.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sectionElements.length) return;

    const updateActiveTabFromScroll = () => {
      const targetLine = window.innerHeight * 0.35;
      let closestId = sectionElements[0].id;
      let smallestDistance = Number.POSITIVE_INFINITY;

      sectionElements.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - targetLine);

        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestId = section.id;
        }
      });

      setActiveTab((prev) => (prev === closestId ? prev : closestId));
    };

    updateActiveTabFromScroll();
    window.addEventListener("scroll", updateActiveTabFromScroll, {
      passive: true,
    });
    window.addEventListener("resize", updateActiveTabFromScroll);

    return () => {
      window.removeEventListener("scroll", updateActiveTabFromScroll);
      window.removeEventListener("resize", updateActiveTabFromScroll);
    };
  }, []);

  const handleTabClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) {
      return;
    }

    setActiveTab(id);
    const headerOffset = window.innerWidth < 640 ? 56 : 120;
    const targetY = Math.max(
      0,
      el.getBoundingClientRect().top + window.scrollY - headerOffset,
    );

    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-[#f7f4ec]/85 px-2 py-2 backdrop-blur-md sm:px-6 sm:py-6">
      <div className="mx-auto flex w-full max-w-3xl items-center gap-1.5 rounded-xl border border-stone-400/12 bg-white/65 shadow-[0_6px_32px_-10px_rgba(42,36,56,0.06)] p-1.5 sm:ml-auto sm:mr-0 sm:w-auto sm:max-w-none sm:justify-end sm:gap-5 sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none">
        {sections.map((section) => (
          <div key={section.id} className="min-w-0 flex-1 sm:flex-none">
            <Tabs
              id={section.id}
              text={section.text}
              isActive={activeTab === section.id}
              onClick={handleTabClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
