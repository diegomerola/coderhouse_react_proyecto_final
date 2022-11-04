import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import { useState, useEffect } from "react";
import data from "../../utilities/db.js";
import myPromise from "../../utilities/myPromise";

const ItemDetailContainer = () => {
  // UseState para guardar datos de consulta asincronica:
  const [dato, setDato] = useState({});

  // UseEffect para cuando el componente este montado:
  useEffect(() => {
    // Hacer consulta asincronica:
    myPromise(2000, data[3])
      .then((response) => setDato(response))
      .catch((error) => console.log(error))
      .finally(() => console.log("Consulta finalizada"));
  }, []);
  return (
    <section>
      <div className="container py-4">
        <div className="row">
          <div className="container pb-5">
            <div className="row d-flex justify-content-center">
              {dato.id ? (
                <ItemDetail key={dato.id} producto={dato} />
              ) : (
                <p>Cargando Componente...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetailContainer;
