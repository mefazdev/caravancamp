
import Carousel from "react-material-ui-carousel";
import camp1 from '../assets/img/camp-1.jpg'
import camp2 from '../assets/img/camp-2.jpg'
import camp3 from '../assets/img/camp-7.jpg'
import garden from '../assets/img/garden.jpeg'
export default function MainBanner() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        interval={4000}
        //   duration={2000}
        swipe={true}
        indicators={false}
        animation="slide"
        stopAutoPlayOnHover={false}
      >
           <div className="main__banner__box"
            style={{
          

              backgroundImage: `linear-gradient(180deg,rgba(40, 39, 39, 0.139),rgba(10, 10, 11, 0.646)),url(${garden.src})`
   
            }}
           >
          <div className="main__banner__div">
            

            <div className="main__head__div">
              <span>
              
              <h1>Caravan camps</h1>
              </span>
            </div>
          </div>
        </div>
        <div className="main__banner__box"
            style={{
              backgroundImage: `linear-gradient(180deg,rgba(40, 39, 39, 0.139),rgba(10, 10, 11, 0.646)),url(${camp2.src})`
   
            }}
           >
          <div className="main__banner__div">
            

            <div className="main__head__div">
              <span>
             
              <h1>Your journey never ends!</h1>
              </span>
            </div>
          </div>
        </div>
        <div className="main__banner__box"
            style={{
              backgroundImage: `linear-gradient(180deg,rgba(40, 39, 39, 0.139),rgba(10, 10, 11, 0.646)),url(${camp3.src})`
   
            }}
           >
          <div className="main__banner__div">
            

            <div className="main__head__div">
              <span>
              <h1>Caravan camps</h1>
              </span>
            </div>
          </div>
        </div>
 
      </Carousel>
    </div>
  );
}
