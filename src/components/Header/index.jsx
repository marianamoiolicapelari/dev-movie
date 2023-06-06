import Logo from '../../assets/logo.png'

import { Link } from 'react-router-dom'
import { Container, Menu, Li } from './styles'

function Header() {

    return (
        <Container>
            <img src={Logo} alt="logo-dev-movies"/>
            <Menu>
                <Li>
                    <Link to="/">Home</Link>
                </Li>
                <Li>
                    <Link to="/filmes">Filmes</Link>
                </Li>
                <Li>
                    <Link to="/series">Séries</Link>
                </Li>
            </Menu>
        </Container>
    )
}

export default Header