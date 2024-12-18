import { PLANETS_INFO } from '../../constants/planets-info';
import ListItem from '../listItem/ListItem';
import { StyledMenu } from './menu.styles';

const Menu = ({ showMenu }) => {
	return (
		<StyledMenu $showMenu={showMenu}>
			<ul>
				{PLANETS_INFO.map(planet => (
					<ListItem key={planet.id} {...planet} />
				))}
			</ul>
		</StyledMenu>
	);
};

export default Menu;
