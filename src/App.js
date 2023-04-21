import React, { useState } from 'react';
import Categories from './Components/Categories';
import Sort from './Components/Sort';
import Header from './Components/Header';
import './scss/app.scss';
import PizzaBlock from './Components/PizzaBlock';

function App() {
	const [items, setItems] = useState([]);

	React.useEffect(() => {
		fetch('https://643ed69e6c30feced834b69c.mockapi.io/items')
			.then((el) => {
				return el.json();
			})
			.then((arr) => {
				setItems(arr);
			});
	}, []);

	console.log('items: ', items);

	return (
		<div className="wrapper">
			<Header />

			<div className="content">
				<div className="container">
					<div className="content__top">
						<Categories />

						<Sort />
					</div>
					<h2 className="content__title">Всі піцци</h2>
					<div className="content__items">
						{items.map((el) => {
							return (
								<PizzaBlock
									key={el.id}
									title={el.title}
									price={el.price}
									imageUrl={el.imageUrl}
									sizes={el.sizes}
									types={el.types}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
