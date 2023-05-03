import React from 'react';
import { Link } from 'react-router-dom';

function CartEmpty() {
	return (
		<div className="cart--empty">
			<img src="img/empty-cart.png" alt="cart-empty" />
			<h2>Кошик порожній :(</h2>
			<p>Додайте хоча б один товар</p>
			<div className="cart__bottom-buttons">
				<Link to="/" className="button button--outline button--add go-back-btn cart-empty">
					<svg
						width="8"
						height="14"
						viewBox="0 0 8 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M7 13L1 6.93015L6.86175 1"
							stroke="#D3D3D3"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"></path>
					</svg>

					<span>Повернутись назад</span>
				</Link>
			</div>
		</div>
	);
}

export default CartEmpty;
