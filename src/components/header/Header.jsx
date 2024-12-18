import Menu from '../menu/Menu';
import { StyledHeader, StyledLogo } from './header.styles';

const Header = ({ setShowMenu, showMenu }) => {
	return (
		<StyledHeader>
			<StyledLogo>THE PLANETS</StyledLogo>
			<Menu showMenu={showMenu} />
			<img
				onClick={() => setShowMenu(!showMenu)}
				src='/assets/images/icon-hamburger.svg'
				alt='hamburgericon'
			/>
		</StyledHeader>
	);
};
export default Header;
