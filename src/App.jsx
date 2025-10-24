import { useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([
    {
      name: "Yeezys",
      category: "shoes",
      price: 120,
      description: "New Yeezes Slides",
      img: "https://i0.wp.com/www.todozapas.com/wp-content/uploads/Adidas-Yeezy-Boost-350-v2-Zebra-detalle-negro-1-scaled.jpeg?w=2560&ssl=1",
    },
    {
      name: "T - Shirt",
      category: "shirt",
      price: 12,
      description: "New T-Shirt",
      img: "https://i5.walmartimages.com/asr/7ffec616-12c7-42df-ad9c-c63164d980b6_1.2eafd147c4ac5e7364d0004c1ae9c423.jpeg",
    },
    {
      name: "Fidget Spinner",
      category: "fidget",
      price: 2,
      description: "Old and Busted Fidget",
      img: "https://oyster.ignimgs.com/wordpress/stg.ign.com/2017/05/Atesson-Tri-Spinner-Ultra.jpg",
    },
  ]);

  return (
    <>
      <ProductList products={products} />
    </>
  );
}

export default App;
