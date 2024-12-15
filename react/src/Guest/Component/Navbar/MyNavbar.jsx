import React from "react";
import { NavLink } from "react-router-dom";

const MyNavbar = ({ footerRef, viewCourseRef }) => {
  const navLinks = [
    { name: "Trang Chủ", path: "/", active: true },
    { name: "Nhượng quyền", path: "/for-franchise" },
    { name: "Liên Hệ", path: "#", scrollToFooter: true }, // Thêm trường scrollToFooter
    { name: "Khóa học", path: "#", scrollToViewCourse: true } 
  ];

  const socialLinks = [
    { icon: "fab fa-facebook-f", href: "#" },
    { icon: "fab fa-twitter", href: "#" },
    { icon: "fab fa-instagram", href: "#" },
    { icon: "fab fa-linkedin-in", href: "#" }
  ];

  // Hàm cuộn xuống footer khi click vào "Liên Hệ"
  const handleScrollToFooter = (e) => {
    e.preventDefault();  // Ngừng hành động mặc định của NavLink (chuyển hướng)
    if (footerRef && footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToViewCourse = (e) => {
    e.preventDefault();
    if (viewCourseRef && viewCourseRef.current) {
      viewCourseRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            {navLinks.map((link, index) =>
              link.scrollToFooter ? (
                <a
                  key={index}
                  href={link.path}
                  className="nav-item nav-link"
                  onClick={handleScrollToFooter} // Gọi hàm cuộn khi click vào "Liên hệ"
                >
                  {link.name}
                </a>
              ) : link.scrollToViewCourse ? (
                <a
                  key={index}
                  href={link.path}
                  className="nav-item nav-link"
                  onClick={handleScrollToViewCourse} // Gọi hàm cuộn khi click vào "Khóa học"
                >
                  {link.name}
                </a>
              ) : (
                <NavLink
                  key={index}
                  to={link.path}
                  className={`nav-item nav-link ${link.active ? "active" : ""}`}
                >
                  {link.name}
                </NavLink>
              )
            )}
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
        </div>
      </nav>
    </div>
  );
};

export default MyNavbar;
