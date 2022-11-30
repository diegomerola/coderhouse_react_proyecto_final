import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import {
  serverTimestamp,
  doc,
  setDoc,
  collection,
  updateDoc,
  increment,
} from "firebase/firestore";
import { db } from "../utilities/firebaseConfig";

const Cart = () => {
  // Obtener contexto:
  const test = useContext(CartContext);
  const { cartList, deleteItem, removeList, calcItemSubTotal, calcItemTotal } =
    test;

  // Funcion para crear una orden de compra:
  const createOrder = () => {
    let order = {
      buyer: {
        name: "An Ecommerce Client",
        email: "client@coderhouse.com",
        phone: "123456789",
      },
      total: calcItemTotal(), // calcular el importe total de la orden.
      items: cartList.map((element) => ({
        id: Number(element.id),
        price: element.price,
        title: element.title,
        qty: element.cantidad,
      })), // mapear carrito para agregar solo los datos solicitados de cada producto.
      date: serverTimestamp(), // método de firebase para asignar la fecha y hora del servidor.
    };

    // Funcion para agregar una orden nueva a firebase:
    const firestoreAddOrder = async () => {
      // Crear la coleccion orders con ID automatico:
      const newOrderRef = doc(collection(db, "orders"));

      // Agregar order:
      await setDoc(newOrderRef, order);
      return newOrderRef;
    };
    // Ejecutar firestoreAddOrder:
    firestoreAddOrder()
      .then((response) => {
        // Mostrar datos de la orden creada:
        alert("Orden ID:" + response.id);

        // Actualizar stock:
        cartList.forEach(async (element) => {
          const itemRef = doc(db, "productos", element.id);
          await updateDoc(itemRef, {
            stock: increment(-element.cantidad),
          });
        });

        // Limpiar carrito:
        removeList();
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className="page">
      <section className="shopping-cart ">
        <div className="container pt-5">
          <div className="row text-center pt-2">
            <div className="col-lg-6 m-auto">
              <h1 className="font-size-md light-300">Carrito de Compras</h1>
              <h4 className="light-300">Subtitulo de prueba</h4>
            </div>
          </div>
          {cartList.length === 0 ? (
            <>
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center mb-2">
                  <Link to={"/"} className="text-decoration-none text-dark">
                    <i className="fa fa-long-arrow-left"></i>
                    <span className="ms-1">Back to shop</span>
                  </Link>
                </div>
                <div>
                  <p className="text-center text-muted">Carrito Vacio</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="d-flex justify-content-between mb-2">
                <div className="d-flex align-items-center">
                  <Link to={"/"} className="text-decoration-none text-dark">
                    <i className="fa fa-long-arrow-left"></i>
                    <span className="ms-1">Back to shop</span>
                  </Link>
                </div>

                <div className="d-flex align-items-center">
                  <button className="btn btn-dark" onClick={removeList}>
                    <span className="me-1">Borrar Carrito</span>
                    <i className="fa-solid fa-circle-minus"></i>
                  </button>
                </div>
              </div>

              <div className="content">
                <div className="row">
                  <div className="col-md-12 col-lg-9">
                    <div className="items">
                      {cartList.map((element) => (
                        <div className="product" key={element.id}>
                          <div className="row">
                            <div className="col-md-3">
                              <Link
                                to={`/item/${element.id}`}
                                className="text-decoration-none text-dark"
                              >
                                <img
                                  className="img-fluid mx-auto d-block image"
                                  src={element.pictureUrl}
                                  alt={element.brand}
                                />
                              </Link>
                            </div>
                            <div className="col-md-9">
                              <div className="info">
                                <div className="row">
                                  <div className="col-md-8 product-name">
                                    <div className="product-name">
                                      <h6 className="bold-600 mb-1">
                                        {element.title}
                                      </h6>

                                      <div className="product-info">
                                        <div>
                                          <span>Cantidad: </span>
                                          <span className="value">
                                            {element.cantidad} Items
                                          </span>
                                        </div>
                                        <div>
                                          <span>Precio Unitario: </span>
                                          <span className="value">
                                            $ {element.price}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-2 text-center ">
                                    <h6 className="bold-600 mb-1">Subtotal:</h6>
                                    <span>
                                      $
                                      {calcItemSubTotal(
                                        element.cantidad,
                                        element.price
                                      )}
                                    </span>
                                  </div>
                                  <div className="col-md-2 text-center text-muted p-0">
                                    <button className="btn-delete">
                                      <i
                                        onClick={() => deleteItem(element.id)}
                                        className="fa-solid fa-trash"
                                      ></i>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-3">
                    <div className="summary">
                      <h3>Resumen</h3>
                      <div className="summary-item">
                        <span className="text">Subtotal</span>
                        <span className="price">${calcItemTotal()}</span>
                      </div>
                      <div className="summary-item">
                        <span className="text">Descuento</span>
                        <span className="price">$0</span>
                      </div>
                      <div className="summary-item">
                        <span className="text">Envio</span>
                        <span className="price">$0</span>
                      </div>
                      <div className="summary-item mt-2">
                        <span className="text">Total</span>
                        <span className="price">${calcItemTotal()}</span>
                      </div>
                      <button
                        onClick={createOrder}
                        type="button"
                        className="btn btn-danger btn-lg btn-block"
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default Cart;
