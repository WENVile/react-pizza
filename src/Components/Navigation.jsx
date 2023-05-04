import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
	return (
		<div className="navigation">
			<ul>
				<li>
					<Link className="nav-li" to="/">
						Піца
					</Link>
				</li>
				<li>
					<Link className="nav-li" to="/drinks">
						Напої
					</Link>
				</li>
				<li>
					<Link className="nav-li" to="/cakes">
						Десерти
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Navigation;
