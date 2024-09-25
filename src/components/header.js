import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  return (
    <header className={isHomePage ? "header-transparent" : ""}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/pastorsdesk">Pastor's desk</Link>
          </li>
          <li>
            <Link to="/construction">Construction</Link>
          </li>
          <li>
            <Link to="/payments">Payments</Link>
          </li>
          <li>
            <Link to="/media">Media</Link>
          </li>
          <li>
            <Link to="/the-fellowship">Fellowship</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
