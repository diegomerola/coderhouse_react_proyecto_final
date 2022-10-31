import React from "react";
import Item from "../Item/Item";
import { useState, useEffect } from "react";
import data from "../../utilities/db.js";
import myPromise from "../../utilities/myPromise";

const ItemList = () => {
  // UseState para guardar datos de consulta asincronica:
  const [datos, setDatos] = useState([]);

  // UseEffect para cuando el componente este montado:
  useEffect(() => {
    // Hacer consulta asincronica:
    myPromise(2000, data)
      .then((response) => setDatos(response))
      .catch((error) => console.log(error))
      .finally(() => console.log("Consulta finalizada"));
  }, []);

  return (
    <section>
      <div className="container py-4">
        <div className="row">
          <div className="container pb-5">
            <div className="row justify-content-center">
              {datos.map((element) => (
                <Item
                  key={element.id}
                  category={element.category}
                  brand={element.brand}
                  title={element.title}
                  price={element.price}
                  pictureUrl={element.pictureUrl}
                  stock={element.stock}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemList;
