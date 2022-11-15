import React from "react";
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import data from "../utilities/db.js";
import getItem from "../utilities/getItem";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  // Obtener id:
  const { id } = useParams();

  // UseState para guardar datos de consulta asincronica:
  const [dato, setDato] = useState({});

  // UseEffect para cuando el componente este montado:
  useEffect(() => {
    // Hacer consulta asincronica:
    getItem(
      0,
      data.find((elemento) => elemento.id === parseInt(id))
    )
      .then((response) => setDato(response))
      .catch((error) => console.log(error))
      .finally(() => console.log("Consulta finalizada"));
  }, [id]);
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
