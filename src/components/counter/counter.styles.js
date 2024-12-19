import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import {
	FONT_FAMILY,
	FONT_SIZE,
	FONT_WEIGHT,
	LETTER_SPACING
} from '../../styles/fonts';

const StyledCounter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5625rem 1.5rem;
	height: 3rem;
	min-width: 20.4375rem;
	border: 0.0625rem solid ${COLORS.transparentWhite};

	@media screen and (width>=768px) {
		height: 5.5rem;
		min-width: 10.25rem;
		padding: 1rem 0.9375rem;
		flex-direction: column;
		align-items: flex-start;
	}

	@media screen and (width>=1024px) {
		height: 8rem;
		min-width: 15.9375rem;
		padding: 1rem 0.9375rem;
		flex-direction: column;
		align-items: flex-start;
	}
`;

const StyledTopic = styled.span`
	font-size: ${FONT_SIZE.xs};
	font-weight: ${FONT_WEIGHT.bold};
	line-height: 1rem;
	letter-spacing: ${LETTER_SPACING.m};
	opacity: 50%;
`;

const StyledMagnitude = styled.span`
	font-family: ${FONT_FAMILY.antonio};
	font-weight: ${FONT_WEIGHT.medium};
	font-size: 1.25rem;
	letter-spacing: ${LETTER_SPACING.s};

	@media screen and (width>=768px) {
		font-size: 1.5rem;
	}

	@media screen and (width>=1024x) {
		font-size: ${FONT_SIZE.l};
	}
`;

export { StyledCounter, StyledTopic, StyledMagnitude };
