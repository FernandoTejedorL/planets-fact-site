import styled from 'styled-components';
import {
	FONT_SIZE,
	FONT_WEIGHT,
	LETTER_SPACING,
	LINE_HEIGHT
} from '../../styles/fonts';
import { COLORS } from '../../styles/colors';

const StyledDivLi = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 90vw;
	border-bottom: 0.0625rem solid ${COLORS.transparentWhite};

	@media screen and (width>=768px) {
		max-width: 67px;
		border-bottom: none;
	}
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

	@media screen and (width>=768px) {
		opacity: 50%;
		font-weight: ${FONT_WEIGHT.bold};

		@media (hover: hover) {
			&:hover {
				opacity: 100%;
			}
		}
	}
`;

const StyledListItemDeco = styled.div`
	height: 20px;
	width: 20px;
	border-radius: 50%;
	background-color: ${({ $color }) => $color};

	@media screen and (width>=768px) {
		display: none;
	}
`;

const StyledChevron = styled.img`
	@media screen and (width>=768px) {
		display: none;
	}
`;

export {
	StyledDivLi,
	StyledNameAndColor,
	StyledListItem,
	StyledListItemDeco,
	StyledChevron
};
