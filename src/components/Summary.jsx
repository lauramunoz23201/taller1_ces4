import { useEffect, useState } from 'react';

const Summary = ({ cart }) => {
	const [discount, setDiscount] = useState(0);
	const [subtotal, setSubtotal] = useState(0);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		let mySubtotal = 0;

		cart.forEach(product => {
			mySubtotal = mySubtotal + product.price * product.quantity;
		});

		setSubtotal(mySubtotal);
	}, [cart, discount]);

	useEffect(() => {
		setTotal(subtotal - discount);
	}, [subtotal, discount]);

	const handleDiscountChange = event => {
		const value = event.target.value;

		if (value < 0) {
			setDiscount(0);
		} else if (value > 100) {
			setDiscount(100);
		} else {
			setDiscount(value);
		}
	};

	return (
		<div>
			<input type='number' onChange={handleDiscountChange} value={discount} />
			<div>
				<div>Subtotal {subtotal}</div> 
			</div>
			<div>
				<div>Coupon {discount}</div>
			</div>
			<div>
				<div>Total {total}</div>
			</div>
		</div>
	);
};

export default Summary;
