import "./Navibar.scss"
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

            <Navbar expand = "lg" id ="nav-menu" className="navbar navbar-expand-lg bg-body-tertiary">
                <Container fluid>
                    
                    <Navbar.Brand >
                        <LinkContainer to={"/"}>
                            <img id="logo-small" src={SmallLogo} alt="small logo for mobile"/>
                        </LinkContainer>
                    </Navbar.Brand>
                    <LinkContainer to={"/cart"}><CartWidget id="mobile-cart"/></LinkContainer>

                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto"
                        navbarScroll>
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

                    
                </Container>
                    

            </Navbar>   
            

        <Searchbar/>
    </header>
    )
} 

 export default Navibar
