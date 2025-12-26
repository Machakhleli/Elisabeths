import { Link } from "react-router-dom";
import PortfolioDropdown from "./PortfolioDropdown"; // Local import from the same folder

export default function Header() {
  return (
    <header className=" w-full h-[7.5rem] flex justify-between items-center z-50 px-12 text-white">
      <Link
        to="/"
        className="text-4xl font-light tracking-tighter cursor-pointer"
      >
        <h1>Elisabeth Gogolishvili</h1>
      </Link>

      <nav>
        <ul className="flex items-center gap-10 list-none uppercase text-[11px] tracking-[0.2em]">
          <PortfolioDropdown />

          <li className="hover:text-gray-400 transition-colors">
            <Link to="/services">Services</Link>
          </li>
          <li className="hover:text-gray-400 transition-colors">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-gray-400 transition-colors">
            <Link to="/clients">Clients Albums</Link>
          </li>
          <li className="hover:text-gray-400 transition-colors">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
