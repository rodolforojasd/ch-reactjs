import "./Navbar.scss"
import Searchbar from "./Searchbar/Searchbar"
import CartWidget from "../CartWidget/CartWidget"
import BigLogo from "../../assets/icons/logo.webp"
import SmallLogo from "../../assets/icons/faviconb.svg"
// import Nav from "react-bootstrap/Nav"
// import Navbar from "react-bootstrap/Navbar"



const Navbar = () =>{
     
     return (
        <header id="header" className="header-area">
            <div id="header-logo-area"className="row">
                <div className="col">
                    <a href="index.html"><img className="icon" id="big-logo"  src={BigLogo} alt="logo brand for desktop"/></a>
                </div>

                <CartWidget id="desktop-cart"/>
                
            </div>

            <nav id ="nav-menu" className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                <a className="navbar-brand" href="index.html">
                   
                    <img id="logo-small" src={SmallLogo} alt="small logo for mobile"/>
                </a >
                
                <i className="bi bi-person-fill"></i>
                
                <CartWidget id="mobile-cart"/>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link"  href="pages/whiskies.html">Whiskies</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="pages/cervezas.html">Cervezas</a>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" href="pages/vinos.html">Vinos</a>
                    </li>
        
                    <li className="nav-item">
                        <a className="nav-link" href=".pages/burbujas.html">Burbujas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="pages/licores.html">Licores</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="pages/bebidas.html">Bebidas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="pages/comida.html">Comida</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="pages/varios.html">Varios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="pages/nosotros.html">Quiénes somos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="pages/contacto.html">Contacto</a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        <Searchbar/>
    </header>
    )
} 

 export default Navbar
