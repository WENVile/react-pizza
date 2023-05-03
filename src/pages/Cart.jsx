import React from 'react';
import { useSelector } from 'react-redux';
import CartItems from '../Components/CartItems';
import CartEmpty from '../Components/CartEmpty';

function Cart() {
	const { items, totalPrice } = useSelector((state) => state.cartSlice);
	return (
		<div className="container container--cart">
			{items.length > 0 ? <CartItems items={items} totalPrice={totalPrice} /> : <CartEmpty />}
		</div>
	);
}

export default Cart;
