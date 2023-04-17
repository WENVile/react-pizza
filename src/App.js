import Categories from './Components/Categories';
import Sort from './Components/Sort';
import Header from './Components/Header';
import './scss/app.scss';
import PizzaBlock from './Components/PizzaBlock';
import pizzas from './pizzas.json';

function App() {
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
						{pizzas.map((el) => {
							return (
								<PizzaBlock
									key={el.id}
									title={el.title}
									price={el.price}
									imageUrl={el.imageUrl}
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
