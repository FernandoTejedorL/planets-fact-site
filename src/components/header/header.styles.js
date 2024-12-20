import styled from 'styled-components';
import {
	FONT_FAMILY,
	FONT_SIZE,
	FONT_WEIGHT,
	LETTER_SPACING
} from '../../styles/fonts';
import { COLORS } from '../../styles/colors';
import { Link } from 'react-router-dom';

const StyledHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 1.5rem;
	border-bottom: 0.0625rem solid ${COLORS.transparentWhite};

	@media screen and (width>=768px) {
		flex-direction: column;
		align-items: center;
		gap: 2.4375rem;
	}

	@media screen and (width>=1024px) {
		flex-direction: row;
		justify-content: space-between;
	}
`;

const StyledLogo = styled.h1`
	font-family: ${FONT_FAMILY.antonio};
	font-weight: ${FONT_WEIGHT.medium};
	font-size: ${FONT_SIZE.l};
	letter-spacing: ${LETTER_SPACING.s};
`;

export { StyledHeader, StyledLogo };
