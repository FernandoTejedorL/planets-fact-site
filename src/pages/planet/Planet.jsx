import { useState } from 'react';
import Counter from '../../components/counter/Counter';
import { PLANETS_INFO } from '../../constants/planets-info';
import {
	StiledSourceDiv,
	StyledButton,
	StyledButtonsContainer,
	StyledCounterContainer,
	StyledDescription,
	StyledDetailsContainer,
	StyledLink,
	StyledPlanetImg,
	StyledPlanetInfo,
	StyledPlanetName,
	StyledPlanetSecondary,
	StyledSource
} from './planet.styles';
import Header from '../../components/header/Header';

const Planet = ({ planetName }) => {
	const [viewShown, setViewShown] = useState('overview');
	const planet = PLANETS_INFO.find(
		planet => planet.name.toLowerCase() === planetName
	);
	let images = '';
	let description = '';
	let source = '';
	let subimages = '';
	if (viewShown === 'overview') {
		images = planet.images.planet;
		description = planet.overviewContent;
		source = planet.overviewSource;
	} else if (viewShown === 'structure') {
		images = planet.images.internal;
		description = planet.structureContent;
		source = planet.structureSource;
	} else if (viewShown === 'surface') {
		images = planet.images.planet;
		subimages = planet.images.geology;
		description = planet.geologyContent;
		source = planet.geologySource;
	}
	return (
		<>
			<Header />
			<StyledButtonsContainer>
				<StyledButton onClick={() => setViewShown('overview')}>
					OVERVIEW
				</StyledButton>
				<StyledButton onClick={() => setViewShown('structure')}>
					STRUCTURE
				</StyledButton>
				<StyledButton onClick={() => setViewShown('surface')}>
					SURFACE
				</StyledButton>
			</StyledButtonsContainer>
			<StyledDetailsContainer>
				<StyledPlanetImg src={images} alt='' />
				{viewShown === 'surface' && (
					<StyledPlanetSecondary src={subimages} alt='' />
				)}
				<StyledPlanetInfo>
					<StyledPlanetName>{planet.name.toUpperCase()}</StyledPlanetName>
					<StyledDescription>{description}</StyledDescription>
					<StiledSourceDiv>
						<StyledSource>Source :</StyledSource>
						<StyledLink href={source}>Wikipedia</StyledLink>
						<img src='/assets/images/icon-source.svg' alt='' />
					</StiledSourceDiv>
				</StyledPlanetInfo>
				<StyledCounterContainer>
					<Counter topic={'ROTATION TIME'} magnitude={planet.rotation} />
					<Counter topic={'REVOLUTION TIME'} magnitude={planet.revolution} />
					<Counter topic={'RADIUS'} magnitude={planet.radius} />
					<Counter topic={'AVERAGE TEMP.'} magnitude={planet.temperature} />
				</StyledCounterContainer>
			</StyledDetailsContainer>
		</>
	);
};

export default Planet;
