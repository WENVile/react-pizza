import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { setCategoryId, setSortId } from '../redux/slices/filterSlice';

import Categories from '../Components/Categories';
import Sort from '../Components/Sort';
import PizzaBlock from '../Components/PizzaBlock';


function Home() {
	const [items, setItems] = useState([]);
	const activeCategory = useSelector((state) => state.filterSlice.categoryId);
	const categories = useSelector((state) => state.filterSlice.categories);
	const sortType = useSelector((state) => state.filterSlice.sort);
	const dispatch = useDispatch();
	

	

	React.useEffect(() => {
		axios
			.get(
				
				`https://643ed69e6c30feced834b69c.mockapi.io/items?
				${
					activeCategory === 0 ? '' : 'category=' + activeCategory
				}&sortBy=${sortType.sort}${sortType.sort === 'rating' ? '&order=desc' : '&order=asc'}`,
			)
			.then((res) => setItems(res.data));

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
			<h2 className="content__title">{categories[activeCategory]}</h2>
			<div className="content__items">
			{items.map((el) => {
					return <PizzaBlock key={el.uniqueId} {...el} />;
				})}
				
			</div>
		</div>
	);
}

export default Home;
