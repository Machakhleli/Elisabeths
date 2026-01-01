import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import PortfolioDropdown from "./PortfolioDropdown";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Force close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className="w-full h-24 md:h-[7.5rem] flex justify-between items-center z-[1000] px-6 md:px-12 text-white">
      {/* Logo */}
      <Link
        to="/"
        className="text-xl md:text-3xl font-light tracking-tighter z-[1100]"
      >
        <h1>Elisabeth Gogolishvili</h1>
      </Link>

      {/* DESKTOP NAV - Hidden on Mobile */}
      <nav className="hidden lg:block h-full">
        <ul className="flex items-center h-full gap-10 list-none uppercase text-[11px] tracking-[0.2em]">
          <PortfolioDropdown isMobile={false} />
          <li className="hover:text-zinc-400 transition-colors">
            <Link to="/services">Services</Link>
          </li>
          <li className="hover:text-zinc-400 transition-colors">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-zinc-400 transition-colors">
            <Link to="/clients">Clients Albums</Link>
          </li>
          <li className="hover:text-zinc-400 transition-colors">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* MOBILE HAMBURGER - Hidden on Desktop */}
      <button
        className="lg:hidden z-[1100] p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <X size={28} strokeWidth={1.5} />
        ) : (
          <Menu size={28} strokeWidth={1.5} />
        )}
      </button>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 bg-black transition-transform duration-500 ease-in-out z-[1050] lg:hidden ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-8 uppercase text-[15px] tracking-[0.3em] font-light">
          {/* IMPORTANT: Passing true to isMobile here */}
          <PortfolioDropdown
            isMobile={true}
            closeMobileMenu={() => setIsMenuOpen(false)}
          />
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
