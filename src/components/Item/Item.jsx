import React from "react";

const Item = ({ producto }) => {
  const { category, brand, title, price, pictureUrl, stock } = producto;
  return (
    <div className="col-md-8 col-lg-6 col-xl-3 py-4">
      <div className="card text-black">
        <div className="">
          <i
            className={`fa-solid fa-${category} fa-lg pt-4 pb-2 pe-2 ps-3 text-muted`}
          ></i>
          <span className="text-muted">{brand}</span>
        </div>
        <img src={pictureUrl} className="card-img-top" alt={brand} />
        <div className="card-body">
          <div className="text-center">
            <h6 className="card-title">{title}</h6>
            <p className="text-muted mb-2">${price}</p>
            <button className="btn btn-danger btn-transition">
              Ver Detalle
            </button>
          </div>
          <div className="d-flex align-items-center justify-content-between font-weight-bold mt-4">
            <span>Stock Disponible:</span>
            <span className="bg-dark p-2 text-light">{stock}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
