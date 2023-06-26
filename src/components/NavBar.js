import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  if (location.pathname === "/") {
    return null;
  }
  return (
    <nav className="navBar">
      <div className="top"></div>
      <NavLink to="/">MARKETPLACE FOR MOTHERS</NavLink>
      <ul>
        <NavLink to="/clothing">Clothings</NavLink>
        <NavLink to="/goingout">Going Out</NavLink>
        <NavLink to="/nursery">Nursery</NavLink>
        <NavLink to="/books">Books</NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
