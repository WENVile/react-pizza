import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';

function CakeBlock({ id, uniqueId, price, title, imageUrl, types }) {
	const dispatch = useDispatch();
	const pizzasTypeName = ['220 г', '340 г'];
	const [pizzaCount, setPizzaCount] = useState(0);
	const [activeType, setActiveType] = useState(types[0]);

	const onClickPizzaAdd = () => {
		const item = {
			id,
			uniqueId,
			title,
			price,
			imageUrl,
			type: pizzasTypeName[activeType],
		};
		dispatch(addItem(item));

		setPizzaCount(pizzaCount + 1);
	};
	const onClickPizzaType = (type) => {
		setActiveType(type);
	};

	return (
		<div className="pizza-block-wrapper">
			<div className="pizza-block">
				<img className="pizza-block__image" src={imageUrl} alt="Pizza" />
				<h4 className="pizza-block__title">{title}</h4>
				<div className="pizza-block__selector">
					<ul>
						{types.map((type, index) => {
							return (
								<li
									onClick={() => onClickPizzaType(type)}
									key={index}
									className={activeType === type ? 'active' : ''}>
									{pizzasTypeName[type]}
								</li>
							);
						})}
					</ul>
				</div>
				<div className="pizza-block__bottom">
					<div className="pizza-block__price">{price} грн</div>
					<button onClick={onClickPizzaAdd} className="button button--outline button--add">
						<svg
							width="12"
							height="12"
							viewBox="0 0 12 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
								fill="white"
							/>
						</svg>
						<span>Додати</span>
						<i>{pizzaCount}</i>
					</button>
				</div>
			</div>
		</div>
	);
}

export default CakeBlock;
