import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar";
import img1 from "../assets/img/photo-1.jpg";
import img2 from "../assets/img/photo-2.jpg";
 
import img4 from "../assets/img/photo-3.jpg";
import img6 from "../assets/img/photo-4.jpg";
import img7 from "../assets/img/photo-5.jpg";
import img8 from "../assets/img/photo-6.jpg";
import img9 from "../assets/img/photo-7.jpg";
import img10 from "../assets/img/photo-8.jpg";
// import img5 from "../assets/img/photos/img-5.jpg";
// import img6 from "../assets/img/photos/img-6.jpg";
import Footer from "../components/Footer";
import bg from "../assets/img/camp-9.jpg";
export default function Photos() {
  return (
    <div>
      <Navbar />

      <div className="photos" style={{ scrollBehavior: "smooth" }}>
        <div
          className="conatact__main"
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundPosition: "center",
          }}
        >
          <div className="subheads">
            <h1>Photo Gallery</h1>
          </div>
        </div>

        <div className="photo__content">
          <div className="photo__row gap-5 grid md:grid-cols-2 lg:grid-cols-4">
            <div className="photo__item">
              <div className="photo__img">
                <Image src={img1} />
              </div>
              <div className="photo__item__capt"></div>
            </div>
            <div className="photo__item">
              <div className="photo__img">
                <Image src={img4} />
              </div>
            </div>
            <div className="photo__item">
              <div className="photo__img">
                <Image src={img2} />
              </div>
            </div>
            <div className="photo__item">
              <div className="photo__img">
                <Image src={img6} />
              </div>
            </div>
            <div className="photo__item">
              <div className="photo__img">
                <Image src={img7} />
              </div>
            </div>
            <div className="photo__item">
              <div className="photo__img">
                <Image src={img8} />
              </div>
            </div>
            <div className="photo__item">
              <div className="photo__img">
                <Image src={img9} />
              </div>
            </div>
            <div className="photo__item">
              <div className="photo__img">
                <Image src={img10} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
