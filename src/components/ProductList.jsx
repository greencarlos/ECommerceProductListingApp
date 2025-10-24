import { useState } from "react";
import ProductItem from "./ProductItem";

function ProductList({ products }) {
  const [category, setCategory] = useState("none");

  const handleChange = (evt) => {
    setCategory(evt.target.value);
  };

  return (
    <>
      <h1>Product List</h1>
      <p>Select a category:</p>
      <select onChange={handleChange}>
        <option key={10}>none</option>
        {products.map((product, i) => (
          <option key={i}>{product.category}</option>
        ))}
      </select>
      {category === "none"
        ? products.map((product, i) => (
            <ProductItem key={i} product={product} />
          ))
        : products
            .filter((product) => product.category === category)
            .map((product, i) => <ProductItem key={i} product={product} />)}
    </>
  );
}

export default ProductList;
