import { NavLink } from 'react-router-dom';
import {
	StyledChevron,
	StyledDivLi,
	StyledListItem,
	StyledListItemDeco,
	StyledNameAndColor
} from './listItem.styles';

const ListItem = ({ name, color, setShowMenu }) => {
	return (
		<StyledDivLi>
			<StyledNameAndColor>
				<StyledListItemDeco $color={color} />
				<StyledListItem>
					<NavLink
						onClick={() => setShowMenu(false)}
						to={`/planet/${name.toLowerCase()}`}
					>
						{name.toUpperCase()}
					</NavLink>
				</StyledListItem>
			</StyledNameAndColor>
			<StyledChevron src='/assets/images/icon-chevron.svg' alt='' />
		</StyledDivLi>
	);
};
export default ListItem;
