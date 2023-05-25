import "./CarouselBanner.scss"
import Carousel from "react-bootstrap/Carousel"
import img1 from "../../assets/banner/gin-banner.png"
import img2 from "../../assets/banner/cervezas-belgas.png"
import img3 from "../../assets/banner/vinos-banner.png"

const CarouselBanner = () =>{
     
     return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src={img1}
            alt="tragos de ginebra"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src={img2}
            alt="cervezas en jarras de diferentes sabores"
          />
  
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src={img3}
            alt="botella de vino"
          /> 
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
} 

 export default CarouselBanner