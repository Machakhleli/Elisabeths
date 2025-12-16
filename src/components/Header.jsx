import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const portfolioLinks = [
  { name: "Portrait", path: "/portfolio/portrait" },
  { name: "Family", path: "/portfolio/family" },
  { name: "Maternity", path: "/portfolio/maternity" },
  { name: "Commercial", path: "/portfolio/commercial" },
];
export default function Header() {
  return (
    <header className="w-full h-[7.5rem] grid grid-cols-[1fr_2fr] place-items-end items-center ">
      <Link
        to="/"
        className="w-md justify-self-start pl-27  text-white cursor-pointer text-4xl"
      >
        <h1>Elisabeth Gogolishvili</h1>
      </Link>
      <ul className="w-3xl grid grid-cols-5 place-items-center items-center list-none text-white ">
        <Dropdown title="Portfolio" links={portfolioLinks} />
        <li>
          <Link to={"/services"}> Services</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/cliens"}>Clients Albums</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </header>
  );
}
