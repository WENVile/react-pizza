import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCategoryId, setSortId } from '../redux/slices/filterSlice';

import Categories from '../Components/Categories';
import Sort from '../Components/Sort';
import PizzaBlock from '../Components/PizzaBlock';

function Home() {
	const activeCategory = useSelector((state) => state.filterSlice.categoryId);
	const sortType = useSelector((state) => state.filterSlice.sort);
	const dispatch = useDispatch();
	const [items, setItems] = useState([]);

	//const [sortType, setSortType] = React.useState({ name: 'популярністю', sort: 'rating' });

	React.useEffect(() => {
		fetch(
			`https://643ed69e6c30feced834b69c.mockapi.io/items?${
				activeCategory === 0 ? '' : 'category=' + activeCategory
			}&sortBy=${sortType.sort}${sortType.sort === 'rating' ? '&order=desc' : '&order=asc'}`,
		)
			.then((el) => {
				return el.json();
			})
			.then((arr) => {
				setItems(arr);
			});
	}, [activeCategory, sortType]);

	return (
		<div className="container">
			<div className="content__top">
				<Categories
					activeCategory={activeCategory}
					onClickCategory={(index) => dispatch(setCategoryId(index))}
				/>

				<Sort sortType={sortType} setSortType={(index) => dispatch(setSortId(index))} />
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
	);
}

export default Home;
