import { NavLink } from "react-router-dom";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <div className={`sidebar ${isOpen ? "isActive" : ""}`}>
      <NavLink onClick={onClose} className="sidebar__link" to="./progress-bar">
        Progress bar
      </NavLink>
    </div>
  );
};

export default Sidebar;
