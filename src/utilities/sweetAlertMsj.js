import Swal from "sweetalert2";

const msjAlert = (icono, title) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-right",
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: false,
  });
  Toast.fire({
    icon: icono,
    title: title,
  });
};

const showOrder = (msj, orderNumber) => {
  Swal.fire({
    icon: "success",
    title: msj,
    text: `Order ID: ${orderNumber}`,
    buttonsStyling: false,
    customClass: {
      confirmButton: "py-2 px-3 btn btn-dark btn-transition",
    },
  });
};

export { msjAlert, showOrder };
