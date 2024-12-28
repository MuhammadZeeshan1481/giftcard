import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const styles = {
    navbar: {
      backgroundColor: "#0073e6",
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
      color: "#fff",
      fontSize: "1rem",
      fontWeight: "bold",
      textTransform: "uppercase",
      textDecoration: "none",
      padding: "0.5rem 1rem",
      borderRadius: "4px",
      transition: "all 0.3s ease",
    },
    activeLink: {
      color: "#ffcc00",
      borderBottom: "2px solid #ffcc00",
    },
    navLinkHover: {
      textDecoration: "underline",
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
          >
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
