import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = ({ setSearchQuery }) => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div className="container-fluid px-4">
        <Link className="navbar-brand fw-bold fs-4" to="/products">
          🛍️ E-Shop
        </Link>

        {/* Hamburger menu button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <form className="d-flex mx-auto my-2 my-lg-0">
          <input
            className="form-control form-control-sm ms-5 mt-1"
            type="search"
            placeholder="Search items..."
            aria-label="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>

        {/* Collapsible menu items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-2">
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/products">
                Home
              </Link>
            </li>

            <li className="nav-item position-relative">
              <Link className="nav-link fw-semibold" to="/cart">
                Cart
                {cartItems.length > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </li>

            <li className="nav-item">
              <button
                className="btn btn-sm btn-outline-warning fw-bold"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
