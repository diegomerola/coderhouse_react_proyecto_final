import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  // Hooks:
  const [count, setCount] = useState(initial);

  // Funciones:
  const incrementarContador = () => {
    count < stock
      ? setCount(count + 1)
      : alert("Error! Cantidad de productos mayor que el stock");
  };
  const decrementarContador = () => {
    count > initial ? setCount(count - 1) : alert("Error! Menor que el stock");
  };

  return (
    <div className="cart d-flex mt-2 align-items-center">
      <div className="d-flex justify-content-center align-items-center me-3 bold-500">
        <button
          className="btn btn-outline-danger border border-2 btn-transition"
          onClick={decrementarContador}
        >
          -
        </button>
        <span className="mx-2">{count}</span>
        <button
          className="btn btn-outline-danger border border-2 btn-transition"
          onClick={incrementarContador}
        >
          +
        </button>
      </div>
      <div>
        {stock ? (
          <button
            onClick={() => onAdd(count)}
            className="btn btn-danger btn-transition text-uppercase mr-2 px-4"
          >
            Add to cart
          </button>
        ) : (
          <button className="btn btn-danger btn-transition text-uppercase mr-2 px-4 disabled">
            Add to cart
          </button>
        )}
        {/* <button
          onClick={() => onAdd(count)}
          className={`${
            stock ? "" : "disabled"
          } btn btn-danger btn-transition text-uppercase mr-2 px-4`}
        >
          Add to cart
        </button> */}
      </div>
    </div>
  );
};

export default ItemCount;
