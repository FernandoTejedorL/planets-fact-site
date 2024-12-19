import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledMenu = styled.nav`
	position: fixed;
	left: 0;
	top: 5.1875rem;
	display: ${({ $showMenu }) => ($showMenu ? 'block' : 'none')};
	flex-direction: column;
	height: 30.4375rem;
	width: 100vw;
	padding-inline: 1.5rem;
	background-color: ${COLORS.dark};
	z-index: 1;

	/* @media screen and (width>=768px) {
		position: relative;
		top: 0;
		display: flex;
		flex-direction: row;
		height: 50px;
	} */
`;

const StyledListItemContainer = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	background-color: ${COLORS.dark};
	border-bottom: 0.0625rem solid ${COLORS.transparentWhite};

	@media screen and (width>=768px) {
		border-bottom: none;
	}
`;

export { StyledMenu, StyledListItemContainer };
