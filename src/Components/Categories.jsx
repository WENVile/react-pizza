import React, { useState } from 'react';

function Categories() {
	const categories = ['Всі', 'Краща ціна', 'Герої', 'Дивина', 'Файнест', 'Гурме'];

	const [activeCategory, setActiveCategory] = useState(0);

	const onClickCategory = (index) => {
		setActiveCategory(index);
	};

	return (
		<div className="categories">
			<ul>
				{categories.map((el, index) => {
					return (
						<li
							key={index}
							onClick={() => onClickCategory(index)}
							className={activeCategory === index ? 'active' : ''}>
							{el}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Categories;
