import { StyledHome, StyledHomeText, StyledImageSolar } from './home.styles';

const Home = () => {
	return (
		<StyledHome>
			<StyledHomeText>Welcome to the Solar System</StyledHomeText>
			<StyledImageSolar src='/assets/images/solar marvel.png' alt='' />
		</StyledHome>
	);
};

export default Home;
