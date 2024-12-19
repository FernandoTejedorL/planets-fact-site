import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import { GlobalStyles } from './styles/GlobalStyles';
// import Header from './components/header/Header';
// import { useState } from 'react';

const App = () => {
	// const [showMenu, setShowMenu] = useState(false);
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Router />
		</BrowserRouter>
	);
};

export default App;
