import { Link } from "react-router-dom";

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
        <li>Portfolio</li>
        <li>Services</li>
        <li>About</li>
        <li>Clients Albums</li>
        <li>Contact</li>
      </ul>
    </header>
  );
}
