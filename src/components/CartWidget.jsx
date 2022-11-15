import React from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div className="navbar align-self-center d-flex justify-content-start">
      <Link
        className="nav-icon position-relative text-decoration-none"
        to="/cart"
      >
        <i className="fa fa-fw fa-cart-arrow-down text-white mr-1"></i>
        <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-danger text-white">
          7
        </span>
      </Link>
      <i className="fa fa-fw fa-user text-dark mr-3 text-muted"></i>
      {/* <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark"></span> */}
    </div>
  );
};

export default CartWidget;
