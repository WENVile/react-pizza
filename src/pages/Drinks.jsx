import React, { useState } from 'react';
import axios from 'axios';

import DrinksBlock from '../Components/DrinksBlock';

function Drinks() {
	const [items, setItems] = useState([]);

	React.useEffect(() => {
		axios
			.get(`https://643ed69e6c30feced834b69c.mockapi.io/drinks`)
			.then((res) => setItems(res.data));
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
