import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';

function PizzaBlock({ id, uniqueId, price, title, imageUrl, sizes, types }) {
	const cartItem = useSelector((state) =>
		state.cartSlice.items.find((obj) => obj.uniqueId === uniqueId),
	);
	const addedCount = cartItem ? cartItem.count : 0;

	const dispatch = useDispatch();
	const pizzasTypeName = ['Тонке', 'Пухке'];
	const [activeType, setActiveType] = useState(0);
	const [activeSize, setActiveSize] = useState(0);
	const priceChanged = [price, price + 50, price + 100];

	const onClickPizzaAdd = () => {
		const item = {
			id,
			uniqueId,
			title,
			price: priceChanged[activeSize],
			imageUrl,
			type: pizzasTypeName[activeType],
			size: sizes[activeSize],
		};
		dispatch(addItem(item));
	};
	const onClickPizzaType = (index) => {
		setActiveType(index);
	};
	const onClickPizzaSize = (index) => {
		setActiveSize(index);
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
									onClick={() => onClickPizzaType(index)}
									key={index}
									className={activeType === index ? 'active' : ''}>
									{pizzasTypeName[type]}
								</li>
							);
						})}
					</ul>
					<ul>
						{sizes.map((size, index) => {
							return (
								<li
									onClick={() => onClickPizzaSize(index)}
									key={index}
									className={activeSize === index ? 'active' : ''}>
									{size} см
								</li>
							);
						})}
					</ul>
				</div>
				<div className="pizza-block__bottom">
					<div className="pizza-block__price">{priceChanged[activeSize]} грн</div>
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
						{addedCount ? <i>{addedCount}</i> : ''}
					</button>
				</div>
			</div>
		</div>
	);
}

export default PizzaBlock;
