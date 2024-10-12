import React from "react";
import { NavLink } from "react-router-dom";

const MyNavbar = () => {
  const navLinks = [
    { name: "Trang Chủ", href: "index.html", active: true },
    { name: "Thông Tin", href: "about.html" },
    { name: "Dịch Vụ", href: "service.html" },
    { name: "Bài Đăng", href: "blog.html" },
    { name: "Liên Hệ", href: "contact.html" }
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
              <a
                key={index}
                href={link.href}
                className={`nav-item nav-link ${link.active ? "active" : ""}`}
              >
                {link.name}
              </a>
            ))}

            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu m-0">
                {dropdownLinks.map((item, index) => (
                  <a key={index} href={item.href} className="dropdown-item">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
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
          <a
            href="#"
            className="btn btn-primary rounded-pill py-2 px-4 flex-shrink-0"
          >
            Get Started
          </a>
        </div>
      </nav>
    </div>
  );
};

export default MyNavbar;
