import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import {
	FONT_FAMILY,
	FONT_SIZE,
	FONT_WEIGHT,
	LETTER_SPACING,
	LINE_HEIGHT
} from '../../styles/fonts';

const StyledButtonsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	height: 3.125rem;
	border-bottom: 1px solid ${COLORS.transparentWhite};

	@media screen and (width>=768px) {
		display: none;
	}
`;

const StyledButtonsContainerBig = styled.div`
	display: none;
	@media screen and (width>=768px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		gap: 1rem;
	}
`;

const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 3.125rem;
	width: 5rem;
	font-size: ${FONT_SIZE.xs};
	font-weight: ${FONT_WEIGHT.bold};
	color: ${COLORS.white};
	letter-spacing: ${LETTER_SPACING.l};
	background-color: transparent;
	border: none;
	opacity: 50%;
	border-bottom: 4px solid
		${({ $state, $active, $planetColor }) =>
			$state === $active ? $planetColor : 'transparent'};

	@media screen and (width>=768px) {
		width: 17.5625rem;
		height: 2.5rem;
		background-color: ${({ $state, $active, $planetColor }) =>
			$state === $active ? $planetColor : 'transparent'};
		border-bottom: none;
		color: ${COLORS.white};
		opacity: 100%;
		justify-content: flex-start;
		padding-inline: 1.25rem;
		border: 1px solid ${COLORS.transparentWhite};

		@media (hover: hover) {
			&:hover {
				background-color: ${COLORS.transparentWhite};
			}
		}
	}

	@media screen and (width>=1024px) {
		width: 21.875rem;
	}
`;

const StyledNumber = styled.span`
	opacity: 50%;
`;

const StyledToBig = styled.div`
	@media screen and (width>=768px) {
		display: flex;
		flex-direction: row;
		padding-inline: 2.4375rem;
		gap: 4.3125rem;
		justify-content: space-between;
		align-items: center;
	}

	@media screen and (width>=1024px) {
		flex-direction: column;
		align-items: center;
		gap: 2.4375rem;
	}
`;

const StyledToCenter = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StyledDetailsContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	text-align: center;
	padding: 5.9375rem 1.5rem 2.9375rem 1.5rem;

	@media screen and (width>=1024px) {
		width: 90vw;
		flex-direction: row;
		justify-content: space-evenly;
	}
`;

const StyledImageContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const StyledPlanetImg = styled.img`
	height: ${({ $size }) => $size.s};
	width: ${({ $size }) => $size.s};
	margin-bottom: 3.5rem;

	@media screen and (width>=768px) {
		height: ${({ $size }) => $size.m};
		width: ${({ $size }) => $size.m};
	}

	@media screen and (width>=1024px) {
		height: ${({ $size }) => $size.l};
		width: ${({ $size }) => $size.l};
	}
`;

const StyledPlanetSecondary = styled.img`
	position: absolute;
	top: 50%;
	height: 5.0625rem;
	width: 4.375rem;
`;

const StyledPlanetInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;

	@media screen and (width>=768px) {
		align-items: flex-start;
	}

	@media screen and (width>=1024px) {
	}
`;

const StyledPlanetName = styled.span`
	font-family: ${FONT_FAMILY.antonio};
	font-size: ${FONT_SIZE.l};
	font-weight: ${FONT_WEIGHT.medium};

	@media screen and (width>=1024px) {
		font-size: ${FONT_SIZE.xl};
	}
`;

const StyledDescription = styled.span`
	font-size: ${FONT_SIZE.m};
	line-height: ${LINE_HEIGHT.s};
	font-weight: ${FONT_WEIGHT.regular};
	width: 20.4375rem;

	@media screen and (width>=768px) {
		text-align: left;
	}

	@media screen and (with>=1024px) {
		font-size: ${FONT_SIZE.l};
	}
`;

const StiledSourceDiv = styled.div`
	display: flex;
	align-items: center;
	gap: 0.25rem;
`;

const StyledSource = styled.span`
	font-size: ${FONT_SIZE.m};
	line-height: ${LINE_HEIGHT.s};
	font-weight: ${FONT_WEIGHT.regular};
	opacity: 50%;
`;

const StyledLink = styled.a`
	font-size: ${FONT_SIZE.m};
	line-height: ${LINE_HEIGHT.s};
	font-weight: ${FONT_WEIGHT.bold};
	text-decoration: underline;
	opacity: 50%;
`;

const StyledCounterContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	margin: 2.125rem;

	@media screen and (width>=768px) {
		flex-direction: row;
		justify-content: center;
	}
`;

export {
	StyledButtonsContainer,
	StyledButton,
	StyledDetailsContainer,
	StyledPlanetImg,
	StyledPlanetSecondary,
	StyledPlanetInfo,
	StyledPlanetName,
	StyledDescription,
	StiledSourceDiv,
	StyledSource,
	StyledLink,
	StyledCounterContainer,
	StyledButtonsContainerBig,
	StyledToBig,
	StyledNumber,
	StyledImageContainer,
	StyledToCenter
};
