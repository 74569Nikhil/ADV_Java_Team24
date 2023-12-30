import { Carousel } from "react-bootstrap";
import img1 from '../Components/Slider/1.jpg';
import img2 from '../Components/Slider/2.jpg';
import img3 from '../Components/Slider/3.jpg';
import img4 from '../Components/Slider/4.jpg';
// import img5 from '../Components/Slider/c.png';
// import img6 from '../Components/Slider/c++.jpg';
// import img7 from '../Components/Slider/java.png';
// import img8 from '../Components/Slider/Asp.net.png';
// import img9 from '../Components/Slider/Mysql.jpg';
// import img10 from '../Components/Slider/html.jpg';
import img11 from '../Components/Slider/random.png';
import '../CSS/Home.css';
import Footer from "./Footer";



export function Home() {

    return (
        <>


            <div class="header-quote-container">
                <div class="header-quote">
                    <p class="quote-text">
                        "The more that you read, the more things you will know."
                    </p>
                </div>
            </div>

            <Carousel>
                <Carousel.Item>
                    <img src={img1} alt="First slide" className="d-block w-100 img-fluid" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={img2} alt="Second slide" className="d-block w-100 img-fluid" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={img3} alt="Third slide" className="d-block w-100 img-fluid" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={img4} alt="Third slide" className="d-block w-100 img-fluid" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>



            <table border="4" class="mt-5 container fluid">
            <h1 class="Key" >KEY SUPPORTERS</h1>

            <div class="supporter-container ">
                <div class="supporter grey-background">
                    <p style={{ fontSize: '50px' }}>🏦</p>
                    <h3>Bank of America</h3>
                </div>

                <div class="supporter grey-background">
                <p style={{ fontSize: '50px' }}>📱</p>               
                    <h3>SamSung</h3>               
                </div>
                
                <div class="supporter grey-background">
                <p style={{ fontSize: '50px' }}>🏭</p>
                    <h3>TATA</h3>        
                </div>
            
                <div class="supporter grey-background">
                <p style={{ fontSize: '50px' }}>⚙️</p>
                    <h3>Hitachi</h3>                   
                </div>
                
                <div class="supporter grey-background">
                <p style={{ fontSize: '50px' }}>🌐</p>
                    <h3>Google</h3>                
                </div>

                <div class="supporter grey-background">
                <p style={{ fontSize: '50px' }}>🍫</p>
                    <h3>Nestle</h3>
                </div>
                
                <div class="supporter grey-background">
                <p style={{ fontSize: '50px' }}> 🏎️</p>
                    <h3>volkswagen</h3>      
                </div>
                
                <div class="supporter grey-background">
                <p style={{ fontSize: '50px' }}>👕</p>
                    <h3>Jack & Jones</h3>
                </div>
            </div>

   

            </table>


            <div>
                <img src={img11} alt="Your Image" className="img-fluid" />
            </div>
            <Footer></Footer>
        </>



    );
}