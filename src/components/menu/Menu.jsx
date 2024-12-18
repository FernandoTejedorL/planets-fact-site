import { NavLink } from 'react-router-dom';

const Menu = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink>Mercury</NavLink>
				</li>
				<li>
					<NavLink>Venus</NavLink>
				</li>
				<li>
					<NavLink>Earth</NavLink>
				</li>
				<li>
					<NavLink>Mars</NavLink>
				</li>
				<li>
					<NavLink>Jupiter</NavLink>
				</li>
				<li>
					<NavLink>Saturn</NavLink>
				</li>
				<li>
					<NavLink>Uranus</NavLink>
				</li>
				<li>
					<NavLink>Neptune</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;
