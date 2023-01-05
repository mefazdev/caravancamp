import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import manner from "../assets/img/manner.jpg";
import swimming from '../assets/img/swimming.jpg'
import karatte from '../assets/img/karatte.jpg'
import spiritual from '../assets/img/spiritual.webp'
import goal from '../assets/img/goal.jpg'
import lifestyle from '../assets/img/lifestyle.jpg'
import careerg from '../assets/img/careerg.jpg'
import wellness from '../assets/img/wellness.jpg'
import pri from '../assets/img/pri.jpg'
export default function Programmes() {
  return (
    <div>
      <Navbar />

      <div className="programmes" style={{scrollBehavior:'smooth'}}>
        <div className="programmes__main">
          <div className="subheads">
            <h1>Programmes</h1>
          </div>
        </div>

        <div className="programmes__content">
          <div className="do__sub">
            <h2>Our Programmes</h2>
          </div>
          <div className="prgm__content__row gap-5 grid md:grid-cols-2 lg:grid-cols-3">
          
            <div className="prgm__content__row__boxes"
             style={{
              backgroundImage: `url(${pri.src})`,
            }}>
              <div className="prgm__row__caption">
                <h3> Core islamic principles </h3>
              </div>
            </div>
         
            <div className="prgm__content__row__boxes"
            style={{
              backgroundImage: `url(${spiritual.src})`,
            }}
            >
              <div className="prgm__row__caption">
                <h3>Identity and spirituality</h3>
              </div>
            </div>
   
            <div className="prgm__content__row__boxes"
             style={{
              backgroundImage: `url(${goal.src})`,
            }}
            >
              <div className="prgm__row__caption">
                <h3> Goal setting </h3>
              </div>
            </div>
         
                    
            
          <div className="prgm__content__row__boxes"
             style={{
              backgroundImage: `url(${careerg.src})`,
            }}
            >
              <div className="prgm__row__caption">
                <h3>Career planning</h3>
              </div>
            </div>
 
            <div className="prgm__content__row__boxes"
             style={{
              backgroundImage: `url(${lifestyle.src})`,
            }}
            >
              <div className="prgm__row__caption">
                <h3>Islamic lifestyle</h3>
              </div>
            </div>
         

  
            <div className="prgm__content__row__boxes"
            style={{
              backgroundImage: `url(${wellness.src})`,
            }}
            >
              <div className="prgm__row__caption">
                <h3>Wellness & healthy food habits</h3>
              </div>
            </div>
 

 
            <div
              className="prgm__content__row__boxes"
              style={{
                backgroundImage: `url(${manner.src})`,
              }}
            >
              <div className="prgm__row__caption">
                <h3>Manners and etiquettes</h3>
              </div>
            </div>
              
            <div
              className="prgm__content__row__boxes"
              style={{
                backgroundImage: `url(${swimming.src})`,
              }}
            >
              <div className="prgm__row__caption">
                <h3>Indoor games & swimming</h3>
              </div>
            </div>
         
      
            <div
              className="prgm__content__row__boxes"
              style={{
                backgroundImage: `url(${karatte.src})`,
              }}
            >
              <div className="prgm__row__caption">
                <h3>Kalarippayatt</h3>

              </div>
            </div>
 
        </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
