import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const Cart = () => {
  const test = useContext(CartContext);
  const { cartList, deleteItem, removeList } = test;
  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cartList.length === 0 ? (
        <p>Carrito Vacio</p>
      ) : (
        <>
          {cartList.map((element) => (
            <div className="card my-2 col-md-4" key={element.idItem}>
              <Link to={`/item/${element.idItem}`}>Volver</Link>
              <p>Nombre:{element.titleItem}</p>
              <p>Precio:{element.priceItem}</p>
              <p>Cantidad:{element.qtyItem}</p>
              <button onClick={() => deleteItem(element.idItem)}>
                Eliminar
              </button>
            </div>
          ))}
          <button className="text-center" onClick={removeList}>
            Limpiar carrito
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
