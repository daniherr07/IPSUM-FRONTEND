import React from "react";
import { Link } from "react-router-dom";
import IpsumLogo from "../assets/ipsumlogo.svg";

export const NavBar = () => {
  return (
    <div className="navContainer">
      <nav>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <img src={IpsumLogo} alt="" />
        </Link>

        <div className="options">
          <ul>
            <li>
              <Link to={"/add"} style={{ textDecoration: "none" }}>
                🏢
              </Link>
            </li>
            <li>
              <Link to={"/clients"} style={{ textDecoration: "none" }}>
                👥
              </Link>
            </li>
            <li>
              <Link to={"/consulta"} style={{ textDecoration: "none" }}>
                <span>Consulta</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
