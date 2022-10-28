import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({ greeting }) => {
  // Destructuring de greeting:
  const { titulo, subtitulo } = greeting;
  return (
    <>
      <header>
        <div className="container pt-5">
          <div className="row text-center pt-2">
            <div className="col-lg-6 m-auto">
              <h1 className="font-size-md light-300">{titulo}</h1>
              <h4 className="light-300">{subtitulo}</h4>
            </div>
          </div>
        </div>
      </header>
      <main>
        <ItemCount stock={5} initial={1} />
      </main>
    </>
  );
};

export default ItemListContainer;
