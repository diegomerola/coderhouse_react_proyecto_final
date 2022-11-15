import { useState } from "react";
import { createContext } from "react";

// Crear contexto:
export const CartContext = createContext();

const CartContextProvider = (props) => {
  // Estado local:
  const [cartList, setCartList] = useState([]);

  // Funcion para agregar un producto:
  const addToCart = (item, qty) => {
    // Buscar si ya existe el producto en cartList:
    const findItem = cartList.find(
      (element) => Number(item.id) === Number(element.idItem)
    );
    // Si existe se agrega propiedad qtyItem, aumenta su cantidad y lo devuelve:
    findItem
      ? (findItem.qtyItem = findItem.qtyItem + qty)
      : setCartList([
          ...cartList,
          {
            idItem: item.id,
            pictureUrlItem: item.pictureUrl,
            titleItem: item.title,
            priceItem: item.price,
            qtyItem: qty,
          },
        ]);
    console.log(findItem);
  };

  // Funcion para eliminar un producto
  const deleteItem = (id) => {
    console.log(id);
    const nuevoArreglo = cartList.filter((element) => element.idItem !== id);
    setCartList(nuevoArreglo);
  };

  // Funcion para limpiar carrito:
  const removeList = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider
      value={{ cartList, addToCart, deleteItem, removeList }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
