import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import headerStyle from "./header.module.css";
import Logo from "./assets/logo.png";


const Header = () => {
  const loc = useLocation();

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${headerStyle.topbar}`}
        style={{ width: "100%" }}
      >
        <div className="container ms-auto">
          <NavLink className="navbar-brand" to="/">
            <img src={Logo} alt="Logo" />
          </NavLink>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/">
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/aboutus"
                >
                  ABOUT US
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/treatment"
                >
                  TREATMENT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/bookAppointment"
                >
                  BOOK APPOINTMENT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/testimonial"
                >
                  TESTIMONIAL
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/contactus"
                >
                  CONTACT US
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link "
                  activeClassName="active"
                  to="/Dashboard"
                >
                  ADMIN
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {loc.pathname === "/aboutus" && <h1 className="bread">ABOUT US</h1>}
      {loc.pathname === "/treatment" && <h1 className="bread">TREATMENT</h1>}
      {loc.pathname === "/bookAppointment" && (
        <h1 className="bread">BOOK APPOINTMENT</h1>
      )}
      {loc.pathname === "/testimonial" && (
        <h1 className="bread">TESTIMONIAL</h1>
      )}
      {loc.pathname === "/contactus" && <h1 className="bread">CONTACT US</h1>}
    </>
  );
};

export default Header;
