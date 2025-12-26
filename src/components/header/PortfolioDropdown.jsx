import { useState } from "react";
import { Link } from "react-router-dom";

export default function PortfolioDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span className="cursor-pointer hover:text-gray-300 transition">
        Portfolio
      </span>

      {open && (
        <ul
          className="absolute top-full mt-3 w-48 z-50 rounded-xl bg-black/90
                       backdrop-blur-md text-white shadow-lg"
        >
          <li>
            <Link
              to="/portfolio/portraits"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 hover:bg-white/10"
            >
              Portraits
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio/family"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 hover:bg-white/10"
            >
              Family
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio/maternity"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 hover:bg-white/10"
            >
              Maternity
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio/commercial"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 hover:bg-white/10"
            >
              Commercial
            </Link>
          </li>
        </ul>
      )}
    </li>
  );
}
