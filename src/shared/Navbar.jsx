import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isHovering, setIsHovering] = useState(false);

  const handleLogout = () => {
    logOut();
  };

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li tabIndex={0}>
                <Link to="/allToys">All Toys</Link>
              </li>
              <li>
                <Link to='/myToy'>My Toys</Link>
              </li>
              <li>
                <Link to="/addAToy">Add A Toy</Link>
              </li>
              <li>
                <Link to="/blog">Blogs</Link>
              </li>
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl">
            <img className="w-12 h-12 rounded" src={logo} alt="" />
            Disney Dream Dolls
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <Link to="/allToys">All Toys</Link>
            </li>
            <li>
              <Link to="/blog">Blogs</Link>
            </li>
            <li>{user ? <Link to='/myToy'>My Toys</Link> : ""}</li>
            <li>{user ? <Link to="/addAToy">Add A Toy</Link> : ""}</li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex gap-3">
              <button onClick={handleLogout} className="btn btn-primary">
                Logout
              </button>

              <div onMouseOver={handleMouseOver}>
                <img className="w-10 rounded-full" src={user?.photoURL} />
              </div>
              {isHovering && <div>{user?.displayName}</div>}
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
