import { Link, useLocation } from "react-router-dom"

function Navbar() {
  const location = useLocation();

  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>HRMS Lite</h2>
      <div style={styles.navLinks}>
        <Link 
          to="/" 
          style={{
            ...styles.link, 
            ...(location.pathname === "/" ? styles.activeLink : {})
          }}
        >
          Employees
        </Link>
        <Link 
          to="/attendance" 
          style={{
            ...styles.link, 
            ...(location.pathname === "/attendance" ? styles.activeLink : {})
          }}
        >
          Attendance
        </Link>
      </div>
    </nav>
  )
}

const styles = {
  navbar: {
    backgroundColor: "#111",
    width: "100vw",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 40px",
    boxSizing: "border-box",
    borderBottom: "1px solid #333",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    fontFamily: "'Inter', sans-serif, Arial"
  },
  logo: {
    color: "#8cc090",
    margin: 0,
    fontSize: "22px",
    fontWeight: "bold",
    letterSpacing: "1px"
  },
  navLinks: {
    display: "flex",
    gap: "30px"
  },
  link: {
    color: "#bbb",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
    transition: "color 0.2s ease"
  },
  activeLink: {
    color: "#fff",
    borderBottom: "2px solid #8cc090",
    paddingBottom: "5px"
  }
}

export default Navbar