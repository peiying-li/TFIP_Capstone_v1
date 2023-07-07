import { NavLink, Link } from "react-router-dom";
import "../styles/NavBar.css";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  if (
    location.pathname === "/homepage" ||
    location.pathname === "/profile" ||
    location.pathname === "/form" ||
    location.pathname === "/donationform"
  ) {
    return null;
  }
  return (
    <nav className="navBar">
      <div>
        <Link to="/homepage">MARKETPLACE FOR MOTHERS</Link>
      </div>

      <ul>
        <NavLink to="/Clothings">Clothings</NavLink>
        <NavLink to="/Outdoors">Outdoors</NavLink>
        <NavLink to="/Nursery">Nursery</NavLink>
        <NavLink to="/Books">Books</NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
