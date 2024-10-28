import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Marco Madureira</p>
      <ul className="social-icons">
        <li>
          <a href="https://facebook.com">Facebook</a>
        </li>
        <li>
          <a href="https://instagram.com">Instagram</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
