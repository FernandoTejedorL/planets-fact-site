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
`;

export { StyledCounter, StyledTopic, StyledMagnitude };
