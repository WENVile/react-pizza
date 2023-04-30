import React, { useState } from 'react';

import CakeBlock from '../Components/CakeBlock';

function Cakes() {
	const [items, setItems] = useState([]);

	React.useEffect(() => {
		fetch(`https://643ed69e6c30feced834b69c.mockapi.io/cakes`)
			.then((el) => {
				return el.json();
			})
			.then((arr) => {
				setItems(arr);
			});
	}, []);

	return (
		<div className="container">
			<h2 className="content__title">Всі Десерти</h2>
			<div className="content__items">
				{items.map((el) => {
					return (
						<CakeBlock
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

export default Cakes;
