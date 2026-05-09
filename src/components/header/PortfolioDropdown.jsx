import { useState } from "react";
import { Link } from "react-router-dom";

export default function PortfolioDropdown({ isMobile, closeMobileMenu }) {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/portfolio/portrait", label: "Portraits" },
    { to: "/portfolio/family", label: "Family" },
    { to: "/portfolio/maternity", label: "Maternity" },
    { to: "/portfolio/commercial", label: "Commercial" },
  ];

  return (
    <li
      className={`relative list-none ${
        isMobile ? "w-full text-center" : "h-full flex items-center"
      }`}
      onMouseEnter={() => !isMobile && setOpen(true)}
      onMouseLeave={() => !isMobile && setOpen(false)}
    >
      {/* Click for Mobile, Display for Desktop */}
      <div
        onClick={() => isMobile && setOpen(!open)}
        className="flex items-center justify-center gap-2 cursor-pointer hover:text-zinc-400 transition uppercase lg:text-[11px] text-[15px] lg:tracking-[0.2em] tracking-[0.3em]"
      >
        Portfolio
      </div>

      {/* Dropdown/Accordion Logic */}
      <div
        className={`
        ${
          isMobile
            ? `overflow-hidden transition-all duration-500 ${
                open ? "max-h-64 opacity-100 mt-6" : "max-h-0 opacity-0"
              }`
            : `absolute top-[50%] left-1/2 -translate-x-1/2 pt-4 w-32 z-[9999] transition-all duration-300  ${
                open
                  ? "visible opacity-100 translate-y-0"
                  : "invisible opacity-0 translate-y-2"
              }`
        }
      `}
      >
        <ul
          className={`${
            !isMobile
              ? "bg-black  py-4 shadow-2xl"
              : "flex flex-col gap-4 ml-4 py-2"
          }`}
        >
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={() => {
                  setOpen(false);
                  if (isMobile) closeMobileMenu();
                }}
                className={`block px-4 py-2 uppercase tracking-[0.2em] text-[10px] ${
                  isMobile
                    ? "text-center pl-6 text-zinc-400"
                    : "text-center text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
