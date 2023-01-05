 
import React from "react";
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
    <div className="h__prgm">
      <div className="h__prgm__content">
        <div className="h__prgm__content__subhead">
          <h3>Our programmes</h3>
        </div>

        {/* <div className="prgm__content__main gap-3 lg:gap-5 grid lg:grid-cols-2">
          <div className="prgm__content__main__left">
            <div className="prgm__content__main__left__caption">
              <h3> Bolster Girls Campus </h3>
            </div>
          </div>
          <div className="prgm__content__main__right">
            <h4> Bolster Girls Campus </h4>
            <p>
              
              
               Bolster Girls Campus
              (BGC) is a residential program for girls by Bolster Foundation.
              The project is by educated youngsters bestowed to do courses in
              reputed institutions like the Indian Institute of Technology
              Kanpur, Jawaharlal Nehru University, University of Delhi, and Azim
              Premji University. BGCoffers Higher Secondary schooling in
              science, commerce, and humanities streams, regress coaching for
              different medical entrance exams, Foundation for CA/CMA,
              foundation course for UPSC, and entrance examination training for
              various universities and premier institutes. BGC does not limit
              its students to boxes of limited choices. BGC encourages them to
              seek opportunities beyond conventions. BGC&apos;s personalized learning
              approach and effective career solutions help students to
              understand their passions, skills, and areas of strengths and
              weaknesses. It is BG&apos;s promise: You will do what you love!
            </p>
            <a href="https://www.bolstercampus.in/">
              <button>Learn More</button>
            </a>
          </div>
        </div> */}
        <div className="prgm__content__row gap-5 grid lg:grid-cols-3">
          
            <div className="prgm__content__row__boxes"
             style={{
              backgroundImage: `url(${pri.src})`,
            }}
            >
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
  );
}
