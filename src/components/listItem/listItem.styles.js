import styled from 'styled-components';
import { FONT_SIZE, LETTER_SPACING, LINE_HEIGHT } from '../../styles/fonts';
import { COLORS } from '../../styles/colors';

const StyledDivLi = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 90vw;
	border-bottom: 0.0625rem solid ${COLORS.transparentWhite};
`;

const StyledNameAndColor = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5625rem;
`;

const StyledListItem = styled.li`
	font-size: ${FONT_SIZE.m};
	line-height: ${LINE_HEIGHT.m};
	letter-spacing: ${LETTER_SPACING.l};
`;

const StyledListItemDeco = styled.div`
	height: 20px;
	width: 20px;
	border-radius: 50%;
	background-color: ${({ $color }) => $color};
`;

export { StyledDivLi, StyledNameAndColor, StyledListItem, StyledListItemDeco };
