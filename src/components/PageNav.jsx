import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "../components/PageNav.module.css";
import Logo from "../components/Logo";

export default function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul className="ul">
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
