import React from "react";
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utilities/firebaseConfig";

const ItemDetailContainer = () => {
  // Obtener id:
  const { id } = useParams();

  // UseState para guardar datos de consulta asincronica:
  const [dato, setDato] = useState({});

  // UseEffect componentDidUpdate:
  useEffect(() => {
    // Consulta Firebase:
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "productos"));
      const data = querySnapshot.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));
      const dataFind = data.find((elemento) => elemento.id === id);
      setDato(dataFind);
    }
    fetchData();
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
