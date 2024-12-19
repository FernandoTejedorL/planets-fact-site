import Menu from '../menu/Menu';
import { StyledHeader, StyledLogo } from './header.styles';

const Header = () => {
	return (
		<StyledHeader>
			<StyledLogo>THE PLANETS</StyledLogo>
			<Menu />
		</StyledHeader>
	);
};
export default Header;
