import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledMenu = styled.nav`
	position: fixed;
	left: 0;
	top: 5.1875rem;
	display: flex;
	flex-direction: column;
	height: 487px;
	width: 100vw;
	padding-inline: 1.5rem;
	background-color: ${COLORS.dark};
	display: ${({ $showMenu }) => ($showMenu ? 'block' : 'none')};
`;

export { StyledMenu };
