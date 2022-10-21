import React from "react";

const ItemListContainer = ({ greetings }) => {
  return (
    <header>
      <div className="container pt-5">
        <div className="row text-center pt-2">
          <div className="col-lg-6 m-auto">
            <h1 className="font-size-md light-300">{greetings}</h1>
            <p className="light-300"></p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ItemListContainer;
