import "./Navbar.scss"
import Searchbar from "./Searchbar/Searchbar"
import CartWidget from "../CartWidget/CartWidget"
import BigLogo from "../../assets/icons/logo.webp"
import SmallLogo from "../../assets/icons/faviconb.svg"
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav, Container} from 'react-bootstrap'






const Navibar = () =>{
     
     return (
        <header id="header" className="header-area">
            <div id="header-logo-area" className="row">
                <div className="col">
                    <LinkContainer to={"/"}>
                        <img className="icon" id="big-logo"  src={BigLogo} alt="logo brand for desktop"/>
                    </LinkContainer>
                </div>

                <LinkContainer to={"/cart"}>
                    <CartWidget id="desktop-cart"/>
                </LinkContainer>
                
            </div>

            <Navbar id ="nav-menu" className="navbar navbar-expand-lg bg-body-tertiary">
                <Container fluid>
                    <LinkContainer to={"/"}>
                        <Navbar.Brand >
                            <img id="logo-small" src={SmallLogo} alt="small logo for mobile"/>
                        </Navbar.Brand>
                    </LinkContainer>
                    <i className="bi bi-person-fill"></i>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer  to="/products/whiskies">
                                <Nav.Link>Whiskies</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/products/cervezas">
                                <Nav.Link>Cervezas</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/products/vinos">
                                <Nav.Link>Vinos</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/products/espumantes">
                                <Nav.Link>Espumantes</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/products/licores">
                                <Nav.Link>Licores</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/products/comida">
                                <Nav.Link>Comida</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/products/varios">
                                <Nav.Link>Varios</Nav.Link>
                            </LinkContainer>


                            <LinkContainer to="/quienes somos">
                                <Nav.Link>Quiénes somos</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/contacto">
                                <Nav.Link>Contacto</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </ Navbar.Collapse>

                    <LinkContainer to={"/cart"}><CartWidget id="mobile-cart"/></LinkContainer>
                </Container>
                    

            </Navbar>   
            

        <Searchbar/>
    </header>
    )
} 

 export default Navibar
