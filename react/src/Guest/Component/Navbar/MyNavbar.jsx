import React from "react";
import { NavLink } from "react-router-dom";

const MyNavbar = () => {
  const navLinks = [
    { name: "Trang Chủ", path: "/", active: true },
    { name: "Thông Tin", path: "#" },
    { name: "Dịch Vụ", path: "#" },
    { name: "Nhượng quyền", path: "/for-franchise" },
    { name: "Liên Hệ", path: "#" }
  ];

  const dropdownLinks = [
    { name: "Our Feature", href: "feature.html" },
    { name: "Our Gallery", href: "gallery.html" },
    { name: "Attractions", href: "attraction.html" },
    { name: "Ticket Packages", href: "package.html" },
    { name: "Our Team", href: "team.html" },
    { name: "Testimonial", href: "testimonial.html" },
    { name: "404 Page", href: "404.html" }
  ];

  const socialLinks = [
    { icon: "fab fa-facebook-f", href: "#" },
    { icon: "fab fa-twitter", href: "#" },
    { icon: "fab fa-instagram", href: "#" },
    { icon: "fab fa-linkedin-in", href: "#" }
  ];

  return (
    <div className="container-fluid nav-bar sticky-top px-4 py-2 py-lg-0">
      <nav className="navbar navbar-expand-lg navbar-light">
        <NavLink to="/" className="navbar-brand p-0">
          <h1 className="display-6 text-dark">
            <i className="fab fa-hubspot text-primary me-3"></i>
            FutureTech
          </h1>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-auto py-0">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className={`nav-item nav-link ${link.active ? "active" : ""}`}
              >
                {link.name}
              </NavLink>
            ))}

          </div>
          <div className="team-icon d-none d-xl-flex justify-content-center me-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                className="btn btn-square btn-light rounded-circle mx-1"
                href={social.href}
              >
                <i className={social.icon} />
              </a>
            ))}
          </div>
          {/* <a
            href="#"
            className="btn btn-primary rounded-pill py-2 px-4 flex-shrink-0"
          >
            Get Started
          </a> */}
        </div>
      </nav>
    </div>
  );
};

export default MyNavbar;
