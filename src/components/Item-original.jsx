import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { formatNumber } from "../utilities/formatNumber";
import { newArrayStars } from "../utilities/newArrayStars";

const Item = ({ producto }) => {
  const {
    category_icon,
    category_id,
    promo,
    brand,
    title,
    price,
    pictureUrl,
    stock,
    id,
    stars,
  } = producto;

  // State para estrellas:
  const [first] = useState(newArrayStars(stars));

  return (
    <div className="col-md-8 col-lg-6 col-xl-3 py-4">
      <div className="card text-black card-radius ">
        <Link
          className="btn-transition link-hover btn-transition"
          to={`/item/${id}`}
        >
          <img src={pictureUrl} className="card-img-top" alt={brand} />
          <div className="d-flex d-flex justify-content-between py-1 text-muted">
            <div>
              {/* <i className={`fa-solid fa-${category_icon} pt-1 pb-1 px-2`}></i> */}
              {/* <span>{brand}</span> */}
            </div>
            {/* <div className="pt-1 me-1">
            <i className="fa fa-heart m-1"></i>
            <i className="fa fa-share-alt m-1"></i>
          </div> */}

            {/* <div className="me-2 mb-1">
              <span className="badge bg-primary p-2 text-light">
                Stock: {stock}
              </span>
            </div> */}
          </div>
          <div className="card-body">
            <div className="text-center">
              <p className="my-0 text-muted">{brand}</p>
              <h6 className="card-title text-dark font-size-m my-1">{title}</h6>
              {first.map((element) => (
                <i
                  key={element}
                  className={`fa-solid fa-star fa-xs pt-0 pb-2 text-danger `}
                ></i>
              ))}
              <p className="text-danger bold-500 pb-0 mb-1">
                ${formatNumber(price)}
              </p>

              {/*   <Link className="btn btn-danger btn-transition" to={`/item/${id}`}>
              More Details
            </Link> */}
              {/* <button className="btn btn-danger no-transition">
                More Details
              </button> */}
            </div>

            {/* <div className="d-flex align-items-center justify-content-between font-weight-bold mt-2 bg-dark">
              <span className="text-dark">Stock Disponible:</span>
              <span className="bg-dark p-2 text-light">{stock}</span>
            </div> */}

            <div className="d-flex align-items-center justify-content-center font-weight-bold mt-2 bg-dark py-3">
              <button className="btn btn-danger no-transition">
                More Details
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Item;
