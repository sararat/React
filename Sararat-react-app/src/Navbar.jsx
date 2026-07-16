import { Link } from "react-router";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <h2 className="logo">facebook</h2>

        <input
          type="text"
          placeholder="Search Facebook"
          className="search-box"
        />
      </div>

      <div className="navbar-right">
        <Link to="/login" className="btn-login">
          Login
        </Link>

        <Link to="/signup" className="btn-signup">
          Sign Up
        </Link>
      </div>
    </header>
  );
}

export default Navbar;