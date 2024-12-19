import { Route, Routes } from 'react-router-dom';
import { ROUTES_INFO } from '../constants/routes-info';
import Home from '../pages/home/Home';
import Planet from '../pages/planet/Planet';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			{ROUTES_INFO.map(route => {
				const planetName = route.name;
				return (
					<Route
						key={route.id}
						path={route.path}
						element={<Planet planetName={planetName} />}
					/>
				);
			})}
		</Routes>
	);
};

export default Router;
