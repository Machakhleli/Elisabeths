import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [openDropDown, setOpenDropDown] = useState(false);
  return (
    <header >
      <nav>
        <Link to="/">Elisabeth</Link> |{" "}
        <NavLink
          to="/portfolio"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Portfolio
        </NavLink>
        | <NavLink to="/services">Services</NavLink> |{" "}
        <NavLink to="/about">About</NavLink> |{" "}
        <NavLink to="/clients-albums">ClientsAlbums</NavLink> |{" "}
        <NavLink to="/contacts">Contacts</NavLink>
      </nav>
    </header>
  );
}
