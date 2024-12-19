import { useState } from 'react';
import { PLANETS_INFO } from '../../constants/planets-info';
import ListItem from '../listItem/ListItem';
import { StyledListItemContainer, StyledMenu } from './menu.styles';

const Menu = () => {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<>
			<StyledMenu $showMenu={showMenu}>
				<StyledListItemContainer>
					{PLANETS_INFO.map(planet => (
						<ListItem key={planet.id} {...planet} setShowMenu={setShowMenu} />
					))}
				</StyledListItemContainer>
			</StyledMenu>
			<img
				onClick={() => setShowMenu(!showMenu)}
				src='/assets/images/icon-hamburger.svg'
				alt='hamburgericon'
			/>
		</>
	);
};

export default Menu;
