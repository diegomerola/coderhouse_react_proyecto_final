import React from "react";
import Item from "../Item/Item";

const ItemList = ({ datos }) => {
  return (
    <section>
      <div className="container py-4">
        <div className="row">
          <div className="container pb-5">
            <div className="row justify-content-center">
              {datos.length > 0 ? (
                datos.map((element) => (
                  <Item key={element.id} producto={element} />
                ))
              ) : (
                <p>Cargando Componentes...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemList;
