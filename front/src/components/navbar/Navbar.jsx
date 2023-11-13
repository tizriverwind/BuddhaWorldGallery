import { Link } from "react-router-dom";
import logoImage from "/src/assets/buddha_logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logoImage} alt="BWG logo" />
        </Link>
        <div className="navbar-nav">
          <Link to="/" className="nav-item nav-link">
            Home
          </Link>
          <Link to="/contact" className="nav-item nav-link">
            Contact
          </Link>
          <Link to="/about-us" className="nav-item nav-link">
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
