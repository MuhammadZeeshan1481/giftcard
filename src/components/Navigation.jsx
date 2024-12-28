import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const styles = {
    navbar: {
      backgroundColor: "#333333", // Darker background
      padding: "1rem",
      display: "flex",
      justifyContent: "center",
    },
    navContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      listStyleType: "none",
      margin: "0",
      padding: "0",
    },
    navItem: {
      margin: "0 1rem",
    },
    navLink: {
      color: "#f1f1f1", // Lighter text color
      fontSize: "1rem",
      fontWeight: "bold",
      textTransform: "uppercase",
      textDecoration: "none",
      padding: "0.5rem 1rem",
      borderRadius: "4px",
      transition: "all 0.3s ease",
    },
    activeLink: {
      color: "#ffcc00", // Highlighted active link color
      borderBottom: "2px solid #ffcc00", // Active link border
    },
    navLinkHover: {
      textDecoration: "underline",
      color: "#ffcc00", // Hover color
    },
    toggler: {
      display: "none",
    },
    responsive: {
      "@media (max-width: 768px)": {
        flexDirection: "column",
      },
    },
  };

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navContainer}>
        <li style={styles.navItem}>
          <Link
            to="/"
            style={{
              ...styles.navLink,
              ...(activeLink === "/" ? styles.activeLink : {}),
            }}
            onClick={() => handleLinkClick("/")}
            onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)} // Hover effect
            onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)} // Reset color
          >
            Login
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link
            to="/giftcard"
            style={{
              ...styles.navLink,
              ...(activeLink === "/giftcard" ? styles.activeLink : {}),
            }}
            onClick={() => handleLinkClick("/giftcard")}
            onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)} 
            onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
          >
            SwapCard
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link
            to="/alluserdetails"
            style={{
              ...styles.navLink,
              ...(activeLink === "/alluserdetails" ? styles.activeLink : {}),
            }}
            onClick={() => handleLinkClick("/alluserdetails")}
            onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)} 
            onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
          >
            All User Data
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link
            to="/alltransactions"
            style={{
              ...styles.navLink,
              ...(activeLink === "/alltransactions" ? styles.activeLink : {}),
            }}
            onClick={() => handleLinkClick("/alltransactions")}
            onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)} 
            onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
          >
            Transactions
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link
            to="/singletransaction"
            style={{
              ...styles.navLink,
              ...(activeLink === "/singletransaction" ? styles.activeLink : {}),
            }}
            onClick={() => handleLinkClick("/singletransaction")}
            onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)} 
            onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
          >
            Single Transaction
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link
            to="/dashboard"
            style={{
              ...styles.navLink,
              ...(activeLink === "/dashboard" ? styles.activeLink : {}),
            }}
            onClick={() => handleLinkClick("/dashboard")}
            onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)} 
            onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
          >
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
