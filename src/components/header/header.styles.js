import styled from 'styled-components';
import {
	FONT_FAMILY,
	FONT_SIZE,
	FONT_WEIGHT,
	LETTER_SPACING
} from '../../styles/fonts';
import { COLORS } from '../../styles/colors';

const StyledHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 1.5rem;
	border-bottom: 0.0625rem solid ${COLORS.transparentWhite};
`;

const StyledLogo = styled.h1`
	font-family: ${FONT_FAMILY.antonio};
	font-weight: ${FONT_WEIGHT.medium};
	font-size: ${FONT_SIZE.l};
	letter-spacing: ${LETTER_SPACING.s};
`;

export { StyledHeader, StyledLogo };