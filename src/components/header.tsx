import { NavLink } from "react-router-dom";
import logo from "./../assets/logo.png";

type HeaderProps = {
  toggleSidebar: () => void;
};

const Header = ({ toggleSidebar }: HeaderProps) => {
  return (
    <div>
      <header className="header">
        <img
          onClick={toggleSidebar}
          className="header__logo"
          src={logo}
          alt="paper"
        />
        <nav className="header__nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="./contact">Contact</NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Header;
