import { NavLink } from "react-router-dom";
import logo from "./../assets/logo.png";
import { LinkType } from "./sidebar";

type HeaderProps = {
  toggleSidebar: () => void;
  onClose: () => void;
};

const headerLinks: LinkType[] = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/contact",
    label: "Kontakt",
  },
  {
    path: "/animals",
    label: "Animals",
  },
  {
    path: "/quizz",
    label: "Quizz",
  },
];

const Header = ({ toggleSidebar, onClose }: HeaderProps) => {
  return (
    <div>
      <header className="header__wrapper">
        <img
          onClick={toggleSidebar}
          className="header__logo"
          src={logo}
          alt="paper"
        />
        <nav className="header__nav">
          {headerLinks.map((link) => {
            return (
              <NavLink
                key={link.path}
                onClick={onClose}
                className="header__nav__link"
                to={link.path}
              >
                {link.label}
              </NavLink>
            );
          })}
        </nav>
      </header>
    </div>
  );
};

export default Header;
