import React, { useState } from "react";

const ItemCount = ({ stock, initial }) => {
  // Hooks:
  const [count, setCount] = useState(initial);

  // Funciones:
  const incrementarContador = () => {
    count < stock
      ? setCount(count + 1)
      : console.log("Error! Mayor que el stock");
  };
  const decrementarContador = () => {
    count > initial
      ? setCount(count - 1)
      : console.log("Error! Menor que el stock");
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 col-xl-4 py-4">
          <div className="card-body bg-color-grey p-2">
            <div className="text-center">
              <h5 className="card-title">Notebook HP 14-dk1510la</h5>
            </div>
            <div className="d-flex justify-content-center align-items-center m-3">
              <button
                className="btn btn-dark btn-transition"
                onClick={decrementarContador}
              >
                -
              </button>
              <span className=" mx-3">{count}</span>
              <button
                className="btn btn-dark btn-transition"
                onClick={incrementarContador}
              >
                +
              </button>
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-outline-danger btn-lg block w-100 btn-transition">
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
