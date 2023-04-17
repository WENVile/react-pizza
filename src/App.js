import Categories from './Components/Categories';
import Sort from './Components/Sort';
import Header from './Components/Header';
import './scss/app.scss';
import PizzaBlock from './Components/PizzaBlock';

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
						<PizzaBlock title="Pizza 1" price={300} />
						<PizzaBlock title="Pizza 2" price={400} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
