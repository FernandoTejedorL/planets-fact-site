import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Planet from '../pages/planet/Planet';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/planet/:planetName' element={<Planet />} />
		</Routes>
	);
};

export default Router;
