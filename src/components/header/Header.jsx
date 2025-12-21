

import { Link } from "react-router-dom";
import PortfolioDropdown from "./PortfolioDropdown";

export default function Header() {
  return (
    <header className="w-full h-[7.5rem] grid grid-cols-[1fr_2fr] items-center">
      <Link
        to="/"
        className="pl-27 text-white text-4xl justify-self-start cursor-pointer"
      >
        <h1>Elisabeth Gogolishvili</h1>
      </Link>

      <ul className="grid grid-cols-5 place-items-center text-white list-none">
        <PortfolioDropdown />
        <li className="cursor-pointer hover:text-gray-300">Services</li>
        <li className="cursor-pointer hover:text-gray-300">About</li>
        <li className="cursor-pointer hover:text-gray-300">Clients Albums</li>
        <li className="cursor-pointer hover:text-gray-300">Contact</li>
      </ul>
    </header>
  );
}
