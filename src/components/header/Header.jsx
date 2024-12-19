import { Link } from 'react-router-dom';
import Menu from '../menu/Menu';
import { StyledHeader, StyledLogo } from './header.styles';

const Header = () => {
	return (
		<StyledHeader>
			<Link to={'/'}>
				<StyledLogo>THE PLANETS</StyledLogo>
			</Link>
			<Menu />
		</StyledHeader>
	);
};
export default Header;
