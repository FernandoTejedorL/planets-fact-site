import { NavLink } from 'react-router-dom';
import {
	StyledListItem,
	StyledListItemContainer,
	StyledListItemDeco,
	StyledNameAndColor
} from './listItem.styles';

const ListItem = ({ name, color }) => {
	return (
		<StyledListItemContainer>
			<StyledNameAndColor>
				<StyledListItemDeco $color={color} />
				<StyledListItem>
					<NavLink to={`/planet/${name.toLowerCase()}`}>
						{name.toUpperCase()}
					</NavLink>
				</StyledListItem>
			</StyledNameAndColor>
			<img src='/assets/images/icon-chevron.svg' alt='' />
		</StyledListItemContainer>
	);
};
export default ListItem;
