import React from "react";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import ItemCount from "../ItemCount/ItemCount";
import data from "../../utilities/db.js";
import myPromise from "../../utilities/myPromise";

const ItemListContainer = ({ greeting }) => {
  // Destructuring de greeting:
  const { titulo, subtitulo } = greeting;

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
        <ItemList datos={datos} />
      </main>
    </>
  );
};

export default ItemListContainer;
