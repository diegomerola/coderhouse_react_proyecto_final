import React from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  const { category_icon, brand, title, price, pictureUrl, stock, id } =
    producto;
  return (
    <div className="col-md-8 col-lg-6 col-xl-3 py-4">
      <div className="card text-black card-radius">
        <div>
          <i
            className={`fa-solid fa-${category_icon} pt-2 pb-1 px-2 text-muted`}
          ></i>
          <span className="text-muted">{brand}</span>
        </div>
        <img src={pictureUrl} className="card-img-top" alt={brand} />
        <div className="card-body bg-color-grey">
          <div className="text-center">
            <h6 className="card-title text-uppercase font-size-m">{title}</h6>
            <p className="text-muted mb-2">${price}</p>
            <Link className="btn btn-danger btn-transition" to={`/item/${id}`}>
              More Details
            </Link>
          </div>
          <div className="d-flex align-items-center justify-content-between font-weight-bold mt-2">
            <span>Stock Disponible:</span>
            <span className="bg-dark p-2 text-light">{stock}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
