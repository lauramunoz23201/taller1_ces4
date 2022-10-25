import ProductsList from './components/ProductsList';
import Cart from './components/Cart';

import './index.css';

// Obtenemos los datos de los productos
import { products } from './data/products';
import { useState } from 'react';
import ProductsAdded from './components/ProductsAdded';
import Summary from './components/Summary';

const App = () => {
	const [cart, setCart] = useState([]);

	const addProduct = product => {
		const tempCart = [...cart];

		const cartProductIndex = cart.findIndex(
			cartProduct => cartProduct.id === product.id
		);

		if (cartProductIndex !== -1) {
			const cartProduct = cart.find(
				cartProduct => cartProduct.id === product.id
			);

			if (cartProduct) {
				if (cartProduct.quantity < product.stock) {
					tempCart[cartProductIndex] = {
						...product,
						quantity: cartProduct.quantity + 1,
					};

					setCart(tempCart);
				}
			}
		} else {
			setCart([...tempCart, { ...product, quantity: 1 }]);
		}
	};

	const removeProduct = product => {
		const tempCart = [...cart];

		const cartProductIndex = cart.findIndex(
			cartProduct => cartProduct.id === product.id
		);

		if (tempCart[cartProductIndex].quantity === 1) {
			setCart(tempCart.filter(cartProduct => cartProduct.id !== product.id));
		} else {
			const cartProduct = tempCart.find(
				cartProduct => cartProduct.id === product.id
			);

			if (cartProduct) {
				tempCart[cartProductIndex] = {
					...product,
					quantity: product.quantity - 1,
				};

				setCart(tempCart);
			}
		}
	};

	return (
		<>
			<header className='header'>
				<div className='container_header'>
					{/* Este componente recibe el array de productos mediante las propiedades y los renderiza */}
					<h1>Tienda</h1>

					<div className='cart'>
						<h2 className='n-products'>
							<ProductsAdded cart={cart} products={products} />
						</h2>
						<br></br>
					</div>
				</div>
			</header>

			<div className='container_body'>
				<h3>Productos</h3>
				<br />
				<div className='list_products'>
					<ProductsList products={products} addProduct={addProduct} />
				</div>

				<div className='added_products'>
					{cart.length > 0 && (
						<>
							<div>
								<hr></hr>
								<h3>Carrito</h3>
								<Cart
									cart={cart}
									addProduct={addProduct}
									removeProduct={removeProduct}
								/>
							</div>
						</>
					)}

					<div className='container_summary'>
						<h2>Summary</h2>
						<Summary cart={cart} />
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
