import { useState } from "react";
import { Link } from "react-router-dom";

export default function PortfolioDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <li
      className="relative h-full flex items-center" // Added flex/h-full to ensure a solid hit area
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span className="cursor-pointer hover:text-gray-300 transition uppercase text-[11px] tracking-[0.2em]">
        Portfolio
      </span>

      {open && (
        /* Removed 'mt-3' and added 'pt-3' so there is no gap for the mouse to fall through */
        <ul className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-48 z-50 shadow-lg">
          {/* Inner container with the actual background and styling */}
          <div className="bg-black/90 backdrop-blur-md border border-zinc-800 py-2">
            <li>
              <Link
                to="/portfolio/portrait"
                onClick={() => setOpen(false)}
                className="block px-4 py-2 hover:bg-white/10 transition-colors text-center"
              >
                Portraits
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio/family"
                onClick={() => setOpen(false)}
                className="block px-4 py-2 hover:bg-white/10 transition-colors text-center"
              >
                Family
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio/maternity"
                onClick={() => setOpen(false)}
                className="block px-4 py-2 hover:bg-white/10 transition-colors text-center"
              >
                Maternity
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio/commercial"
                onClick={() => setOpen(false)}
                className="block px-4 py-2 hover:bg-white/10 transition-colors text-center"
              >
                Commercial
              </Link>
            </li>
          </div>
        </ul>
      )}
    </li>
  );
}
