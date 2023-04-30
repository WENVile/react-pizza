import React, { useState } from 'react';

import DrinksBlock from '../Components/DrinksBlock';

function Drinks() {
	const [items, setItems] = useState([]);

	React.useEffect(() => {
		fetch(`https://643ed69e6c30feced834b69c.mockapi.io/drinks`)
			.then((el) => {
				return el.json();
			})
			.then((arr) => {
				setItems(arr);
			});
	}, []);

	return (
		<div className="container">
			<h2 className="content__title">Всі напої</h2>
			<div className="content__items">
				{items.map((el) => {
					return (
						<DrinksBlock
							key={el.id}
							title={el.title}
							price={el.price}
							imageUrl={el.imageUrl}
							types={el.types}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Drinks;
