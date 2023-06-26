import InfantHomeLogo from "../assets/infantHome.jpg";
import GirlHomeLogo from "../assets/girlHome.png";
import ToddlerHomeLogo from "../assets/toddlerHome.jpg";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";

function HomePage() {
  return (
    <div>
      <div className="homepage">
        <div className="headerContainer">
          <h1>MARKETPLACE FOR MOTHERS</h1>
        </div>
        <div className="popular">
          <h2>Popular Categories</h2>
        </div>
        <div className="leftNavBar">
          <h2>Shop by category</h2>
          <ul>
            <li>
              <Link to="/clothing">Clothings</Link>
            </li>
            <li>
              <Link to="/goingout">Going Out</Link>
            </li>
            <li>
              <Link to="/nursery">Nursery</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
          </ul>
        </div>
        <nav className="bottom">
          <Link to="/infant">
            <img src={InfantHomeLogo} alt="infantHomeLogo" />
          </Link>
          <Link to="/toddler">
            <img src={GirlHomeLogo} alt="girlHomeLogo" />
          </Link>
          <Link to="/preschool">
            <img src={ToddlerHomeLogo} alt="toddlerHomeLogo" />
          </Link>
          <Link to="/infant">
            <p>Infant</p>
          </Link>
          <Link to="/toddler">
            <p>Toddler</p>
          </Link>
          <Link to="/preschool">
            <p>Preschool</p>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default HomePage;
