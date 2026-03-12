import { Link, useLocation } from "react-router-dom"
import "../App.css"

function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <h2 className="logo">HRMS Lite</h2>

      <div className="navLinks">
        <Link
          to="/"
          className={`link ${location.pathname === "/" ? "activeLink" : ""}`}
        >
          Employees
        </Link>

        <Link
          to="/attendance"
          className={`link ${location.pathname === "/attendance" ? "activeLink" : ""}`}
        >
          Attendance
        </Link>
      </div>
    </nav>
  )
}

export default Navbar