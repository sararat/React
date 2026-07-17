import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "./context/UserAuthContext";
import './Navbar.css'
function Navbar() {

   const { logOut, user } = useUserAuth();
   console.log(user);

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logOut();
            navigate('/login');
        } catch(err) {
            console.log(err.message);
        }
    }

  return (
    <nav className="navbar">

      <div className="navbar-left">
        <h1 className="logo">facebook</h1>

        <input
          className="search-box"
          type="text"
          placeholder="Search Facebook"
        />
      </div>

      <div className="navbar-center">
        {/* เมนู เช่น Home, Friends, Video */}
      </div>

      <div className="navbar-right">
        {user ? (
          <>
            <span className="user-email">
              {user.email}
            </span>

            <button
              className="nav-logout"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="nav-login" to="/login">
              Login
            </Link>

            <Link className="nav-signup" to="/signup">
              Sign Up
            </Link>
          </>
        )}
      </div>

    </nav>
  );
}

export default Navbar;