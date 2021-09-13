import React, { Fragment, useState } from "react";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    switch (theme) {
      case "dark":
        setTheme("dark");
        break;
      case "light":
        setTheme("light");
        break;
      case "solar":
        setTheme("solar");
        break;
      default:
        setTheme("gray");
    }
  };

  return (
    <Fragment>
      <nav>
        <ul>
          <li>
            <span>Navigation</span>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M10.024 4h6.015l7.961 8-7.961 8h-6.015l7.961-8-7.961-8zm-10.024 16h6.015l7.961-8-7.961-8h-6.015l7.961 8-7.961 8z" />
              </svg>
            </a>
          </li>
          <li>
            <a></a>
            <span>Home</span>
          </li>
          <li>
            <a></a>
            <span>About</span>
          </li>
          <li>
            <span>Shop</span>
            <a>{/* <svg></svg> */}</a>
          </li>
          <li>
            <span>Contact</span>
            <a>{/* <svg></svg> */}</a>
          </li>
          <li>
            <span>Change Theme</span>
            <a>{/* <svg></svg> */}</a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navbar;
