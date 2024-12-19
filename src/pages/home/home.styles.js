import styled from 'styled-components';
import { FONT_SIZE, FONT_WEIGHT, LETTER_SPACING } from '../../styles/fonts';

const StyledHome = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1.5rem;
	height: 100vh;
	padding-inline: 1.5rem;

	@media screen and (width>=768px) {
		justify-content: flex-start;
		padding: 5%;
	}
`;

const StyledHomeText = styled.h2`
	text-align: center;
	font-size: ${FONT_SIZE.l};
	letter-spacing: ${LETTER_SPACING.l};
	font-weight: ${FONT_WEIGHT.medium};
`;

const StyledImageSolar = styled.img`
	height: 12.5rem;
	width: 12.5rem;
	border-radius: 1.25rem;

	@media screen and (width>=768px) {
		height: 20rem;
		width: 20rem;
	}
`;

export { StyledHome, StyledHomeText, StyledImageSolar };
