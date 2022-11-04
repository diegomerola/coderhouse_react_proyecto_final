import React from "react";

const ItemDetail = ({ producto }) => {
  const {
    brand,
    title,
    price,
    promo,
    pictureUrl,
    description,
    screenSize,
    processor,
    ram,
    space,
    so,
    so_version,
  } = producto;
  return (
    <div className="col-md-8 col-xl-10">
      <div className="card border-0">
        <div className="row">
          <div className="col-xl-6">
            <div className="p-1">
              <img src={pictureUrl} className="card-img-top" alt={brand} />
            </div>
          </div>
          <div className="col-xl-6 bg-color-grey ">
            <div className="product p-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <i className="fa fa-long-arrow-left"></i>
                  <span className="ms-1">Volver</span>
                </div>
              </div>
              <div className="mt-4 ">
                <h6 className="card-title text-uppercase mt-2">{title}</h6>
                <div className="d-flex flex-row align-items-center ">
                  <span className="text-danger bold-600 ">${price}</span>
                  <div className="ms-2 mb-1">
                    <span className="badge bg-primary rounded-pill">
                      {promo}% OFF
                    </span>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center line-bottom pt-2 pb-3">
                <div className="me-1">
                  <i className="fa-solid fa-display me-1"></i>
                  <span>{screenSize}''</span>
                </div>
                <div className="mx-1">
                  <i className="fa-solid fa-microchip me-1"></i>
                  <span>{processor}</span>
                </div>
                <div className="mx-1">
                  <i className="fa-solid fa-memory me-1"></i>
                  <span>{ram}</span>
                </div>
                <div className="mx-1">
                  <i className="fa-solid fa-database me-1"></i>
                  <span>{space}</span>
                </div>
                <div className="mx-1">
                  <i className={`fa-brands fa-${so} me-1`}></i>
                  <span>{so_version}</span>
                </div>
              </div>
              <p className="pt-3 font-size-sm">{description}</p>
              <div className="cart d-flex mt-4 align-items-center">
                <button className="btn btn-danger btn-transition text-uppercase mr-2 px-4">
                  Add to cart
                </button>
                <i className="fa fa-heart text-muted m-1"></i>
                <i className="fa fa-share-alt text-muted m-1"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
