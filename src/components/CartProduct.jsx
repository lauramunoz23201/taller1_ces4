const CartProduct = ({ product, addProduct, removeProduct }) => {
	return (
		<div>
			<br></br>
			<br></br>
			<img width={100} height={100} src={product.thumbnail} />
			<p>{product.name}</p>
			<p>{product.price}</p>
			<p>{product.description}</p>
			<button onClick={() => removeProduct(product)}>-</button>
			<div>{product.quantity}</div>
			<button onClick={() => addProduct(product)}>+</button>
			<br></br>
			<br></br>
		</div>
	);
};

export default CartProduct;
