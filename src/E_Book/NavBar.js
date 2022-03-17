import React from "react";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container-xxl">
        <a href="#intro" className="navbar-brand">
          <span className="fw-bold text-secondary">
            <i class="bi bi-book-half"> </i>
            Net Ninja Pro - the Book
          </span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end align-center"
          id="main-nav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#topic" className="nav-link">
                About The Book
              </a>
            </li>
            <li className="nav-item">
              <a href="#reviews" className="nav-link">
                Reviews
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Get in Touch
              </a>
            </li>
            <li className="nav-item d-md-none">
              <a href="#pricing" className="nav-link">
                Pricing
              </a>
            </li>
            <li className="nav-item ms-2 d-none d-md-inline">
              <a href="#pricing" className="btn btn-secondary">
                buy now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
