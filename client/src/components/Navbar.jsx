import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand fw-bold" to="/dashboard">
          🎓 Learning Portal
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarContent"
        >

          {/* Left Menu */}
          <ul className="navbar-nav me-auto">

            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/dashboard"
                    ? "active fw-bold"
                    : ""
                }`}
                to="/dashboard"
              >
                🏠 Dashboard
              </Link>
            </li>

          </ul>

          {/* Right Side */}
          <div className="d-flex align-items-center">

            <span className="text-white me-3">
              👋 Welcome,
              <strong className="ms-1">
                {user?.name || "Student"}
              </strong>
            </span>

            <button
              className="btn btn-light"
              onClick={logout}
            >
              🚪 Logout
            </button>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;