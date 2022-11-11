import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import data from "../utilities/db.js";
import getItem from "../utilities/getItem";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  // Destructuring de greeting:
  const { titulo, subtitulo } = greeting;

  // UseState para guardar datos de consulta asincronica:
  const [datos, setDatos] = useState([]);

  // Obtener idCategory:
  const { idCategory } = useParams();

  // UseEffect componentDidUpdate:
  useEffect(() => {
    // Hacer consulta asincronica:
    if (idCategory === undefined) {
      // Traigo todos los productos:
      getItem(2000, data)
        .then((response) => setDatos(response))
        .catch((error) => console.log(error))
        .finally(() => console.log("Consulta finalizada"));
    } else {
      // Traigo solo los productos que coinciden con idCategory:
      getItem(
        2000,
        data.filter((element) => element.category_id === idCategory)
      )
        .then((response) => setDatos(response))
        .catch((error) => console.log(error))
        .finally(() => console.log("Consulta finalizada"));
    }
  }, [idCategory]);
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
        <ItemList datos={datos} />
      </main>
    </>
  );
};

export default ItemListContainer;
