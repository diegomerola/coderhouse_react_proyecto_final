import {
  query,
  where,
  collection,
  getDocs,
  doc,
  getDoc,
} from "@firebase/firestore";

import { db } from "./firebaseConfig";

// Consultar los productos en Firestore:
export const fetchCategory = async (idCategory) => {
  // Crear consulta:
  let consulta = query(collection(db, "productos"));
  if (idCategory) {
    consulta = query(
      collection(db, "productos"),
      where("category_id", "==", idCategory)
    );
  }
  // Hacer consulta:
  const querySnapshot = await getDocs(consulta);

  // Crear objeto con la misma estructura que en Firestore:
  const data = querySnapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  }));
  return data;
};

// Consultar un producto segun su ID:
export const fetchID = async (idItem) => {
  const docRef = doc(db, "productos", idItem);
  const docSnap = await getDoc(docRef);

  // Crear objeto con la misma estructura que en Firestore:
  if (docSnap.exists()) {
    return {
      id: idItem,
      ...docSnap.data(),
    };
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};
