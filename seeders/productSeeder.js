const { Product } = require("../models");
module.exports = async () => {
  const productList = [
    {
      pic: "coffee/cappuccino.png",
      //     alt: "Cappuccino",
      name: "Cappuccino",
      description: "Un cappuccino rico y espumoso con un toque de chocolate.",
      price: 4.99,
      stock: 99,
      featured: false,
      categoryId: 1,
    },
    {
      pic: "coffee/latte.png",
      //     alt: "Latte",
      name: "Latte",
      description:
        "Un latte suave y cremoso con la mezcla perfecta de espresso y leche vaporizada, con un toque de vainilla.",
      price: 4.49,
      stock: 10,
      featured: false,
      categoryId: 1,
    },
    {
      pic: "coffee/americano.png",
      //  alt: "Americano",
      name: "Americano",
      description:
        "Los shots de espresso cubiertos con agua caliente crean una ligera capa de crema que culmina en esta taza maravillosamente rica con profundidad y matices.",
      price: 2.99,
      stock: 34,
      featured: false,
      categoryId: 1,
    },
    {
      pic: "coffee/mocha.png",
      //   alt: "Mocha",
      name: "Mocha",
      description:
        "Un delicioso mocha con una mezcla de espresso, chocolate y leche vaporizada.",
      price: 5.49,
      stock: 62,
      featured: false,
      categoryId: 1,
    },
    {
      pic: "coffee/mocha-white.png",
      //   alt: "Café de Filtro",
      name: "Mocha de Chocolate Blanco",
      description:
        "incorpora chocolate blanco en lugar del chocolate oscuro, manteniendo la misma esencia del mocha tradicional.",
      price: 13.99,
      stock: 123,
      featured: false,
      categoryId: 1,
    },
    {
      pic: "coffee/caramel-crunch-frappuccino.png",
      //   alt: "Cold Brew",
      name: "Frappuccino de Caramelo",
      description:
        "Mezcla de salsa de caramelo oscuro, frappuccino asado, leche y hielo. ¡Cubierto con crema batida, llovizna de caramelo y azúcar caramelo!",
      price: 4.79,
      stock: 28,
      featured: false,
      categoryId: 1,
    },
    {
      pic: "coffee/flat-white.png",
      //  alt: "Cold Brew con Nubes",
      name: "Flat White",
      description: "Sabor equilibrado y su textura suave y sedosa.",
      price: 5.29,
      stock: 90,
      featured: false,
      categoryId: 1,
    },
    {
      pic: "coffee/caramel-macchiato.png",
      name: "Macchiato de Caramelo",
      description:
        "Jarabe cremoso de vainilla, leche vaporizada con espuma aterciopelada, un toque de Espresso Roast, y un final de caramelo mantecoso.",
      price: 4.99,
      stock: 45,
      featured: false,
      categoryId: 1,
    },
    {
      pic: "coffee/espresso.png",
      name: "Espresso",
      description:
        "Descubre el auténtico sabor de nuestro espresso: intenso, suave, con rica crema dorada. Perfecto solo o como base para tus bebidas favoritas.",
      price: 1.99,
      stock: 75,
      featured: false,
      categoryId: 1,
    },
    {
      pic: "coffee/latte-matcha.png",
      name: "Latte Matcha",
      description:
        "La ceremonia del té japonesa enfatiza la humildad, moderación y sencillez, con acciones ritualizadas. Sin embargo, esta bebida suave y cremosa de matcha se puede disfrutar como quieras.",
      price: 6.99,
      stock: 25,
      featured: false,
      categoryId: 1,
    },
    {
      pic: "coffee/mocha-frappe.png",
      name: "Frappe Mocha",
      description:
        "Si disfrutar del clima soleado es su prioridad en verano, pruebe esta bebida dulce, cremosa y fría, con el rico sabor del chocolate y el café.",
      price: 5.49,
      stock: 34,
      featured: false,
      categoryId: 1,
    },
    {
      pic: "coffee/tea-english.png",
      name: "Té negro inglés",
      description:
        "Los atrevidos tés maltosos de la India se combinan con tés brillantes y sabrosos de Sri Lanka y con el suave y ahumado Keemun chino en una mezcla de hojas enteras finamente equilibrada.",
      price: 0,
      stock: 0,
      featured: false,
      categoryId: 1,
    },
    {
      pic: "coffee/ultra-caramel.png",
      name: "Frappuccino Ultra Caramelo",
      description:
        "El Mocha Frappuccino® se envuelve en capas de crema batida infusionada con café frío y rica salsa de caramelo oscuro. Cada sorbo es tan bueno como el anterior, hasta el final.",
      price: 12.99,
      stock: 15,
      featured: false,
      categoryId: 1,
    },
    {
      pic: "bakery/cake-vanilla.png",
      name: "Tarta de Vainilla",
      description: "Tarta suave y esponjosa con sabor a vainilla.",
      price: 3.5,
      stock: 20,
      featured: false,
      categoryId: 2,
    },
    {
      pic: "bakery/brownie-chocolate.png",
      name: "Brownie de Chocolate",
      description: "Delicioso brownie de chocolate con nueces.",
      price: 2.75,
      stock: 12,
      featured: false,
      categoryId: 2,
    },
    {
      pic: "bakery/brekky-roll-beacon.png",
      name: "Sandwich de Beacon",
      description:
        "¡Prueba nuestro sandwich de tocino, huevo y queso! Disfrútalo perfectamente tostado con tu bebida favorita.",
      price: 2.99,
      stock: 32,
      featured: false,
      categoryId: 2,
    },
    {
      pic: "bakery/brekky-roll-vegan.png",
      name: "Sandwich Vegano",
      description:
        "¡Pruebe nuestro delicioso sandwich a base de plantas elaborado con tocino de origen vegetal, huevo de tofu y salsa barbacoa!",
      price: 3.19,
      stock: 19,
      featured: false,
      categoryId: 2,
    },
    {
      pic: "bakery/caramel-slice.png",
      name: "Slice de Caramelo",
      description:
        "Masa de hojaldre dorada con capas de caramelo pegajoso y chocolate con leche.",
      price: 0.99,
      stock: 120,
      featured: false,
      categoryId: 2,
    },
    {
      pic: "bakery/chip-cookie.png",
      name: "Galleta con chispas de Chocolate",
      description:
        "Horneado a la perfección en una de las mejores panaderías de Montevideo con generosos trozos de chocolate con leche. ¡Tan suave, tan masticable, tan bocadillo!",
      price: 0.49,
      stock: 250,
      featured: false,
      categoryId: 2,
    },
    {
      pic: "bakery/choc-muffin-1.png",
      name: "Muffin de Chocolate",
      description:
        "Delicadamente rico y húmedo: la elección perfecta para los amantes del chocolate que buscan un refrigerio dulce. ¡Disfrútalo fresco o tostado!",
      price: 1.39,
      stock: 100,
      featured: false,
      categoryId: 2,
    },
    {
      pic: "bakery/croissant-chocolate-shadow.png",
      name: "Croissant con chispas de chocolate",
      description: "",
      price: 1.99,
      stock: 130,
      featured: false,
      categoryId: 2,
    },
    {
      pic: "bakery/croissant-ham-cheese.png",
      name: "Croissant de jamón y queso",
      description:
        "Suculentas lonchas de jamón triple ahumado junto con queso cheddar añejo intercaladas en un croissant mantecoso.",
      price: 1.49,
      stock: 120,
      featured: false,
      categoryId: 2,
    },
    {
      pic: "bakery/sandwich-vegan-grilled.png",
      name: "Sandwich vegano",
      description:
        "Un sándwich saludable y sustancioso elaborado con verduras a la parrilla, que incluyen pimiento, berenjena, batata y queso feta vegano desmenuzado.",
      price: 2.09,
      stock: 40,
      featured: false,
      categoryId: 2,
    },
    {
      pic: "bakery/toastie-cheesetomato.png",
      name: "Tostadas con jamón y queso",
      description:
        "Lonchas de jamón ahumado y sabroso queso derretido con mostaza dijonesa untada sobre masa madre artesanal ligeramente tostada.",
      price: 0.99,
      stock: 310,
      featured: false,
      categoryId: 2,
    },
    {
      pic: "bakery/wrap-chickenavocado.png",
      name: "Arrollado de pollo y palta",
      description:
        "Tierna pechuga de pollo y lechuga fresca y crujiente con aguacate cremoso, todo envuelto en una tortilla integral.",
      price: 8.99,
      stock: 20,
      featured: false,
      categoryId: 2,
    },
    {
      pic: "categorias/beans.png",
      name: "Paquete de Granos de Café Arábica",
      description: "Paquete de 500g de granos de café Arábica de alta calidad.",
      price: 15.0,
      stock: 30,
      featured: false,
      categoryId: 3,
    },
    {
      pic: "categorias/beans.png",
      name: "Paquete de Granos de Café Robusta",
      description:
        "Paquete de 500g de granos de café Robusta con un sabor fuerte y rico.",
      price: 12.0,
      stock: 25,
      featured: false,
      categoryId: 3,
    },
    {
      pic: "categorias/beans.png",
      name: "Paquete de Granos de Café Mezcla Especial",
      description:
        "Paquete de 500g de una mezcla especial de granos Arábica y Robusta.",
      price: 18.0,
      stock: 20,
      featured: false,
      categoryId: 3,
    },
  ];

  await Product.bulkCreate(productList);
  console.log("Product seeder has been ran.");
};
