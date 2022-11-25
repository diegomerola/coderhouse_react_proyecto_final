import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utilities/firebaseConfig";

const ItemListContainer = ({ greeting }) => {
  // Destructuring de greeting:
  const { titulo, subtitulo } = greeting;

  // UseState para guardar datos de consulta asincronica:
  const [datos, setDatos] = useState([]);

  // Obtener idCategory:
  const { idCategory } = useParams();

  // UseEffect componentDidUpdate:
  useEffect(() => {
    // Consulta Firebase:
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "productos"));
      const data = querySnapshot.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));
      if (idCategory === undefined) {
        setDatos(data);
      } else {
        const dataFilter = data.filter(
          (element) => element.category_id === idCategory
        );
        setDatos(dataFilter);
      }
    }
    fetchData();
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
