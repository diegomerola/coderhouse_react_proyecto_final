import React from "react";

const CartWidget = () => {
  return (
    <div className="navbar align-self-center d-flex justify-content-start">
      <a className="nav-icon position-relative text-decoration-none" href="#/">
        <i className="fa fa-fw fa-cart-arrow-down text-white mr-1"></i>
        <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-danger text-white">
          7
        </span>
      </a>
      <a
        className="nav-icon position-relative text-decoration-none link-disabled"
        href="#/"
      >
        <i className="fa fa-fw fa-user text-dark mr-3 text-muted"></i>
        <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark"></span>
      </a>
    </div>
  );
};

export default CartWidget;
