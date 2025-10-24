function ProductItem({product}) {
  return (
    <>
      <h2>{product.name}</h2>
      <p>price: ${product.price}.95</p> 
      <p>description: {product.description}</p> 
      <img src={product.img} />
    </>
  )
}

export default ProductItem
