import { memo } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", to: "/" },
  { name: "Courses", to: "/courses" },
  { name: "Teacher", to: "/Teacher" },
  { name: "Results", to: "/Results" },
  { name: "Mock tests", to: "/Mock-test" },
  { name: "Contact", to: "/Contact" },
];

interface NavbarProps {
  vertical?: boolean;
}

const Navbar = ({ vertical }: NavbarProps) => {
  return (
    <nav>
      <div className={`flex ${vertical ? "flex-col gap-4" : "gap-5"}`}>
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.to}
            className={({ isActive }) =>
              `transition-colors duration-300 ${
                isActive ? "text-accent" : "text-white hover:text-accent"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default memo(Navbar);
