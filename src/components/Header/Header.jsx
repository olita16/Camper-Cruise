import { useSelector } from 'react-redux'
import { selectFavorites } from '../../redux/adverts/selectors'
import { MainContainer } from '../../layouts/MainContainer'
import { HeaderBlock, Nav, NavigLink } from './Header.styled'
import { Icon } from 'components/icons';

const Header = () => {
    const Favorites = useSelector(selectFavorites);

    return (
        <HeaderBlock>
            <MainContainer>
                <Nav>
                    <ul>
                        <li>
                            <NavigLink to="/">
                                Home
                            </NavigLink>
                        </li>
                        <li>
                            <NavigLink to="/catalog">Catalog</NavigLink>
                        </li>
                        <li>
                            <NavigLink id="favs" to="/favorites">
                                {Favorites.length > 0 && <div>{Favorites.length}</div>}
                                <Icon width={30} height={30} svg={"icon-fav"} />
                            </NavigLink>
                        </li>
                    </ul>
                </Nav>
            </MainContainer>
        </HeaderBlock>
    );
};

export default Header;