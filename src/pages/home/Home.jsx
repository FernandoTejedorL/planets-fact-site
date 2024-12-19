import Header from '../../components/header/Header';
import { StyledHome, StyledHomeText, StyledImageSolar } from './home.styles';

const Home = () => {
	return (
		<>
			<Header />
			<StyledHome>
				<StyledHomeText>Welcome to the Solar System</StyledHomeText>
				<StyledImageSolar src='/assets/images/solar marvel.png' alt='' />
			</StyledHome>
		</>
	);
};

export default Home;
