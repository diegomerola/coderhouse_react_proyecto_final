import React from "react";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow nav-color-bottom">
      <div className="container d-flex justify-content-between align-items-center">
        <a
          className="navbar-brand text-color-light align-self-center font-size-brand bold-600"
          href="#/"
        >
          Electro<span className="text-danger ">.</span>
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main_nav"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="align-self-center collapse navbar-collapse d-lg-flex justify-content-lg-between"
          id="main_nav"
        >
          <div className="flex-fill">
            <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
              <li className="nav-item">
                <a className="nav-link" href="#/">
                  Ver Todo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/">
                  Notebooks
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/">
                  Smartphones
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/">
                  Accesorios
                </a>
              </li>
            </ul>
          </div>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
