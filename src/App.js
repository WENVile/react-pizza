import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import './scss/app.scss';
import Home from './pages/Home';
import Drinks from './pages/Drinks';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import Navigation from './Components/Navigation';
import Cakes from './pages/Cakes';
import OrderSuccess from './pages/OrderSuccess';

function App() {
	return (
		<div className="wrapper">
			<Header />
			<Navigation />

			<div className="content">
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/drinks" element={<Drinks />} />
					<Route path="/cakes" element={<Cakes />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/success" element={<OrderSuccess />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
