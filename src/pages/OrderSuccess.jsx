import React from 'react';
import { useDispatch } from 'react-redux';
import { clearItems } from '../redux/slices/cartSlice';

function OrderSuccess() {
	const dispatch = useDispatch();
	dispatch(clearItems());
	return (
		<>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					margin: 0 + 'auto',
					marginBottom: '40px',
				}}>
				<img width="20%" src="img/success.svg" alt="success" />
			</div>
			<h2
				style={{
					display: 'flex',
					justifyContent: 'center',
					margin: 0 + 'auto',
					textAlign: 'center',
				}}>
				Ваше замовлення № {Math.round(Math.random() * 100000)} додано в обробку
			</h2>
		</>
	);
}

export default OrderSuccess;
