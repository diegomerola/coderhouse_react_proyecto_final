const data = [
  {
    id: 1,
    category_icon: "laptop",
    category_id: "laptops",
    brand: "HP",
    title: "HP Laptop HP14-dq2029la CORE I5 6GB",
    description:
      "Permanece conectado con lo que más importa gracias a la batería de larga duración y un diseño delgado y portátil de bisel con microbordes. Cuenta con rendimiento confiable y una pantalla expansiva, que te permiten transmitir, navegar y acelerar la realización de tareas.",
    screenSize: "14",
    processor: "I5",
    ram: "6GB",
    space: "256GB",
    so: "windows",
    so_version: "Windows 11",
    color: "Grafito",
    promo: 40,
    price: 100000,
    pictureUrl:
      "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp",
    stock: 0,
  },
  {
    id: 2,
    category_icon: "laptop",
    category_id: "laptops",
    brand: "Asus",
    title: "Asus Laptop X515 CI7-EJ1629W CORE I7 8GB",
    description:
      "Ya sea para trabajar o jugar, ASUS X515 es la laptop para el día a día que ofrece un rendimiento potente y efectos visuales envolventes. Su pantalla NanoEdge cuenta con amplios ángulos de visión de 178° y un revestimiento mate antirreflejo para una experiencia verdaderamente atractiva.",
    screenSize: "15,6",
    processor: "I7",
    ram: "8GB",
    space: "256GB SSD",
    so: "windows",
    so_version: "Windows 11",
    color: "Gris Plata",
    promo: 20,
    price: 175000,
    pictureUrl:
      "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/5.webp",
    stock: 25,
  },
  {
    id: 3,
    category_icon: "laptop",
    category_id: "laptops",
    brand: "HP",
    title: "HP Laptop ZBook Firefly 15 G8 CORE I7 8GB",
    description:
      "El rendimiento de nivel profesional se combina con la verdadera movilidad en esta elegante y potente computadora portátil. Manténgase productivo con componentes de nivel profesional, cámara web mejorada con IA, 9 y una pantalla con colores precisos: todo lo que necesita para colaborar y administrar proyectos.",
    screenSize: "15",
    processor: "I7",
    ram: "8GB",
    space: "256GB SSD",
    so: "windows",
    so_version: "Windows 11",
    color: "Gris Plata",
    promo: 20,
    price: 250000,
    pictureUrl:
      "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp",
    stock: 10,
  },
  {
    id: 4,
    category_icon: "laptop",
    category_id: "laptops",
    brand: "Lenovo",
    title: "Lenovo Laptop Workstation CORE I9 8GB",
    description:
      "La estación de trabajo móvil Lenovo ThinkPad P15 2da Gen incluye nuestro ajuste de modo Ultra-Performance actualizado, que te permite aprovechar todo el potencial del sistema e impulsar el rendimiento. Hemos optimizado el flujo de aire y la saturación térmica también para mantener tu dispositivo en funcionamiento de forma rápida y eficaz.",
    screenSize: "16",
    processor: "I9",
    ram: "8GB",
    space: "512GB SSD",
    so: "windows",
    so_version: "Windows 11",
    color: "Negro",
    promo: 25,
    price: 200000,
    pictureUrl:
      "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/12.webp",
    stock: 12,
  },
  {
    id: 5,
    category_icon: "tablet",
    category_id: "tablets",
    brand: "Lenovo",
    title: "Lenovo Yoga Tab 13 - Shadow Black",
    description:
      "Ponla de pie, cuelga e inclina tu tablet con un soporte de acero inoxidable, mientras sientes el drama y la tensión de tus películas y programas favoritos con una impresionante calidad de imagen 2K a través de Dolby Vision. Disfrutarás de la paleta de colores sRGB completa durante muchas horas con protección ocular.",
    screenSize: "13",
    processor: "Snapdragon 870",
    ram: "8GB",
    space: "128GB SSD",
    so: "android",
    so_version: "Android 11",
    color: "Negro",
    promo: 25,
    price: 159999,
    pictureUrl:
      "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp",
    stock: 10,
  },
  {
    id: 6,
    category_icon: "tablet",
    category_id: "tablets",
    brand: "Lenovo",
    title: "Lenovo Premium Tab P11 - Slate Grey",
    description:
      "Adéntrate en el reino del streaming. Tu experiencia visual es la prioridad de la Tab P11, con una asombrosa resolución 2K en una pantalla IPS de 11”. Los biseles estrechos en los cuatro lados te ofrecen una generosa relación de pantalla del 85% y está certificada para transmitir en HD",
    screenSize: "11",
    processor: "Snapdragon 662",
    ram: "4GB",
    space: "128GB SSD",
    so: "android",
    so_version: "Android 10",
    color: "Gris",
    promo: 25,
    price: 105999,
    pictureUrl:
      "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/2.webp",
    stock: 20,
  },
  {
    id: 7,
    category_icon: "tablet",
    category_id: "tablets",
    brand: "HP",
    title: "Tablet HP Slate 7 ARM Cortex A9 Dual Core",
    description:
      "Exclusiva Tablet HP Slate 7 contiene un procesador ARM Cortex A9 Dual Core 1.6 Ghz 512 Kb de caché nivel 2. Con su almacenamiento eMMC de 8GB podrás llevar fácilmente variedad de archivos a donde tú quieras, pesa tan sólo 375 g. Además de brindar el mejor sonido disponible, gracias a la tecnología Beats Audio.",
    screenSize: "7",
    processor: "Cortex A9",
    ram: "8GB",
    space: "1GB SSD",
    so: "android",
    so_version: "Android 10",
    color: "Blanco",
    promo: 25,
    price: 90000,
    pictureUrl:
      "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/20.webp",
    stock: 10,
  },
  {
    id: 8,
    category_icon: "mobile",
    category_id: "smartphones",
    brand: "Nokia",
    title: "Nokia G50 Dual 5G Snapdragon 480",
    description:
      "Nokia G50 está listo para ti. Conserva la energía con su tecnología de batería adaptable de 2 días, toma fotos nocturnas detalladas con IA aplicada a la imagen y desbloquéalo fácilmente con tu huella dactilar o tu mirada. La impresionante pantalla HD+ 20:9 de 6” da vida a tus historias. Además, Nokia G50 está preparado para Android 11 y versiones posteriores.",
    screenSize: "6",
    processor: "Snapdragon 480",
    ram: "64GB",
    space: "128GB SSD",
    so: "android",
    so_version: "Android 11",
    color: "Negro",
    promo: 25,
    price: 100000,
    pictureUrl:
      "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/8.webp",
    stock: 12,
  },
  {
    id: 9,
    category_icon: "mobile",
    category_id: "smartphones",
    brand: "Samsung",
    title: "Galaxy A52s 5G Octa Core Cortex-A78",
    description:
      "Deleitá tus sentidos con detalles vibrantes. Con la pantalla FHD + Super AMOLED, que alcanza los 800 nits¹, vas a disfrutar de gran nitidez incluso a plena luz del día. Además, la función Eye Comfort Shield² reduce la luz azul, mientras que Super Smooth mantiene la vista fluida, ya sea que estés jugando o caminando. Nada se compara a esta pantalla Infinity-O de 6 pulgadas",
    screenSize: "6",
    processor: "Cortex-A78",
    ram: "6GB",
    space: "128GB SSD",
    so: "android",
    so_version: "Android 12",
    color: "Negro",
    promo: 25,
    price: 124999,
    pictureUrl:
      "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/11.webp",
    stock: 12,
  },
  {
    id: 10,
    category_icon: "mobile",
    category_id: "smartphones",
    brand: "Samsung",
    title: "Galaxy A80 5G Octa Core Cortex-A80",
    description:
      "El Galaxy A72 presenta curvas cómodas y elegantes en un diseño perfecto. El mínimo borde de la cámara combina con el acabado mate en la parte posterior para lograr un aspecto icónico y unificado. Expresa tu estilo con cuatro colores que marcan tendencia: Awesome Violet, Awesome Black, Awesome White y Awesome Blue.",
    screenSize: "7",
    processor: "Cortex A80",
    ram: "8GB",
    space: "256GB SSD",
    so: "android",
    so_version: "Android 11",
    color: "Blanco",
    promo: 25,
    price: 152999,
    pictureUrl:
      "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp",
    stock: 8,
  },
];
export default data;
