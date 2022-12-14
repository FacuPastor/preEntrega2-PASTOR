import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <Navbar className='' bg="primary" expand="lg">
            <Container className='navContainer'>
            <div className="flex justify-between items-center marca">
                <span>
                    <Link to={`/`} >
                        <img className="h-5 inline mx-3 imgLogo logo" alt='logo' src='/img/logo.jpg'></img>
                        <Navbar.Brand to="/">Shoes Point</Navbar.Brand>
                    </Link>
                </span>
            </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                
                                                 
                                <NavLink to={`/`} className="links">Inicio</NavLink>
                         
                            <NavDropdown className="links" title="MARCAS" id="basic-nav-dropdown">
                                <NavDropdown.Item className="links marcas" href="#action/3.1">                           
                                    <li>                        
                                        <NavLink to={`/marca/Adidas`} className="links">Adidas</NavLink>
                                    </li>
                                    <li>                        
                                        <NavLink to={`/marca/New Balance`} className="links">New Balanace</NavLink>
                                    </li>
                                    <li>                        
                                        <NavLink to={`/marca/Nike`} className="links">Nike</NavLink>
                                    </li>
                                    <li>                        
                                        <NavLink to={`/marca/Puma`} className="links">Puma</NavLink>
                                    </li>
                                    <li>                        
                                        <NavLink to={`/marca/Vans`} className="links">Vans</NavLink>
                                    </li>
                                </NavDropdown.Item>
                            </NavDropdown>
 
                       

                    </Nav>
                </Navbar.Collapse>
                <CartWidget/>
            </Container>
        </Navbar>
    );
}

export default NavBar;


