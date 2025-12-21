import { Link } from "react-router-dom";

const Dropdown = ({ title, links }) => {
  return (
    <li className="relative group text-white cursor-pointer hover:text-gray-300 transition duration-150">
      <span>{title}</span>
      <div
        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-black
                    text-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 
                    group-hover:visible transition-opacity duration-300 z-100"
      >
        <ul className="py-2">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="block px-4 py-2 hover:text-gray-400 transition duration-150 text-center"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default Dropdown;
