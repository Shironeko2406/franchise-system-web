import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'

const MyNavbar = () => {
  return (
    <div className="container-fluid nav-bar sticky-top px-4 py-2 py-lg-0">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a href className="navbar-brand p-0">
          <h1 className="display-6 text-dark">
            <i className="fas fa-swimmer text-primary me-3" />
            FutureTech
          </h1>
          {/* <img src="img/logo.png" alt="Logo"> */}
        </a>
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
            <NavLink to="/" className="nav-item nav-link active">
              Home
            </NavLink>
            <a href="#" className="nav-item nav-link">
              About
            </a>
            <a href="#" className="nav-item nav-link">
              Service
            </a>
            <a href="#" className="nav-item nav-link">
              Blog
            </a>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu m-0">
                <a href="#" className="dropdown-item">
                  Our Feature
                </a>
                <a href="#" className="dropdown-item">
                  Our Gallery
                </a>
                <a href="#" className="dropdown-item">
                  Attractions
                </a>
                <a href="#" className="dropdown-item">
                  Ticket Packages
                </a>
                <a href="#" className="dropdown-item">
                  Our Team
                </a>
                <a href="#" className="dropdown-item">
                  Testimonial
                </a>
                <a href="#" className="dropdown-item">
                  404 Page
                </a>
              </div>
            </div>
            <a href="#" className="nav-item nav-link">
              Contact
            </a>
          </div>
          <div className="team-icon d-none d-xl-flex justify-content-center me-3">
            <a className="btn btn-square btn-light rounded-circle mx-1" href>
              <i className="fab fa-facebook-f" />
            </a>
            <a className="btn btn-square btn-light rounded-circle mx-1" href>
              <i className="fab fa-twitter" />
            </a>
            <a className="btn btn-square btn-light rounded-circle mx-1" href>
              <i className="fab fa-instagram" />
            </a>
            <a className="btn btn-square btn-light rounded-circle mx-1" href>
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
          <NavLink
            to="/register-agency"
            className="btn btn-primary rounded-pill py-2 px-4 flex-shrink-0"
          >
            Get Started
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default MyNavbar