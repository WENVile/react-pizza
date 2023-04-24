import React from 'react';

function Categories({ activeCategory, onClickCategory }) {
	const categories = ['Всі', 'Краща ціна', 'Герої', 'Дивина', 'Файнест', 'Гурме'];
	console.log(activeCategory);

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
