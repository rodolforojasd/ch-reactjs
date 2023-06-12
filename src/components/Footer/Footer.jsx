import React from "react"
import { Link } from "react-router-dom"
import "./Footer.scss"
import BigLogo from "../../assets/icons/logo.webp"
import MasterCardLogo from "../../assets/icons/icons8-mastercard-logo-100.svg"
import VisaLogo from "../../assets/icons/icons8-visa-100.svg"
import MercadoPago from "../../assets/icons/icons8-mercado-pago-100.svg"

const Footer = () =>{
     
     return (
      
    <footer id="footer-section" className="container-fluid">
        <div className="row text-center">
            <section className="col-sm-12 col-md-6 col-lg-4 col-xlg-4">
                <div className="row footer_wrapper">
                    <Link to="/">
                        <img className="icon" id="footer-logo"  src={BigLogo} alt="logo"/>
                    </Link>
                </div>
                <div className="row footer_wrapper">
                    <input id="footer-newsletter" placeholder="Entra tu correo y recibe nuestras ofertas!"/>
                </div>
                <div className="row text-center footer_wrapper ">
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-twitter"></i>
                    <i className="bi bi-whatsapp"></i>
                </div>
                
            </section>
            <section className="col-sm-6 col-md-6 col-lg-4 col-xlg-4">
                <div className=" row footer_wrapper">
                    
                    <h4 className="text-center">Directorio</h4>
                    <div className="col text-start directory-col-l">
                        <Link className="footer_link" to="/products/whiskies">
                            <p className="footer-text">whiskies</p>
                        </Link>
                        <Link className="footer_link" to="/products/vinos">
                            <p className="footer-text">vinos</p>
                        </Link>
                        <Link className="footer_link" to="/products/cervezas">
                            <p className="footer-text">cervezas</p> 
                        </Link>
                        <Link className="footer_link" to="/products/licores">
                            <p className="footer-text">licores</p>
                        </Link>
                        <Link className="footer_link" to="/products/burbujas">
                            <p className="footer-text">burbujas</p> 
                        </Link>
                    </div>

                    <div className="col text-start directory-col-r">
                        <Link className="footer_link" to="/products/comida">
                            <p className="footer-text">comida</p>
                        </Link>
                        <Link className="footer_link" to="/products/bebidas">
                            <p className="footer-text">bebidas</p>
                        </Link>
                        <Link className="footer_link" to="/products/varios">
                            <p className="footer-text">varios</p> 
                        </Link>
                        <Link className="footer_link" to="/nosotros">
                            <p className="footer-text">sobre nosotros</p>
                        </Link>
                        <Link className="footer_link" to="/contacto">
                            <p className="footer-text">contáctanos</p> 
                        </Link>
                    </div>
                </div>
            </section>

            <section className="col-sm-6 col-md-6 col-lg-4 col-xlg-4">
                <div className=" row footer_wrapper">
                    
                    <h4 className="text-center">Delivery</h4>
                    <div className="row text-center ">
                        <p> De Lunes a Sabado desde las 8 am hasta las 6pm</p>
                        <p> Todas las compras realizadas antes de las 2pm se entregan el mismo día</p>
                
                    </div>
                </div>
                <div className=" row footer_wrapper">
                    
                    <h4 className="text-center">Medios de Pago</h4>
                    <div className="col text-center ">
                        <img className="footer-payment-icon" src={MasterCardLogo} alt="Mastercard Logo"/>
                        <img className="footer-payment-icon" src={VisaLogo} alt="Visa Logo"/>
                        <img className="footer-payment-icon" src={MercadoPago} alt="Mercado Pago Logo"/>
                
                    </div>
                </div>      
            </section>
        </div>
        
    </footer>
  
    )
     
    
} 

 export default Footer