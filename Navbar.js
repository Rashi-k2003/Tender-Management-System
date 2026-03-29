import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Tender Portal</h2>

      <ul>
        <li><Link to="/">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/form">Tender Form</Link></li>
        <li><Link to="/report">Report</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;