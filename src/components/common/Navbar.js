import React from "react";

const Navbar = ({ setCurrentPage }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">
      <div className="container">
        <a
          className="navbar-brand d-flex align-items-center"
          href="#"
          onClick={() => setCurrentPage("home")}
        >
          <img
            src="https://placehold.co/40x40/343a40/ffffff?text=THS"
            alt="THS Logo"
            className="me-2 rounded-circle"
          />
          <span className="fw-bold">THS: The Horse Shop</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => setCurrentPage("buy")}
              >
                Buy Horses
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => setCurrentPage("sell")}
              >
                Sell a Horse
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => setCurrentPage("equipment")}
              >
                Equipment
              </a>
            </li>
          </ul>
          <div className="d-flex ms-lg-3 mt-2 mt-lg-0">
            <button className="btn btn-outline-light me-2">Login</button>
            <button className="btn btn-warning">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
