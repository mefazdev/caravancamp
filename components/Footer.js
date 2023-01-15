import React from "react";
 
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import ApartmentIcon from "@mui/icons-material/Apartment";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__content grid lg:grid-cols-2 gap-5 lg:gap-0">
    
    <div className="grid grid-cols-2">
    <div className="footer__item">
          <Link href="/">
            <h2>Home</h2>
          </Link>
          <Link href="/About">
            <h2>Programmes</h2>
          </Link>
         
          <Link href="/Contact">
            <h2>Register</h2>
          </Link>
          <Link href="/WeDo">
            <h2>Contact us</h2>
          </Link>
        </div>

        <div className="footer__item">
          <Link href="/">
            <h2>Impact</h2>
          </Link>
           
          <Link href="/">
            <h2>Vission</h2>
          </Link>
          <Link href="/">
            <h2>Mission</h2>
          </Link>
          <Link href="/">
            <h2>Who we are</h2>
          </Link>
        </div>
    </div>
       
       
    <div className=" grid grid-cols-2">

<div className="footer__item">
<div className="flex footer__name">
    <ApartmentIcon id="footer__icon" />
    <div>
      <h2>18 Camden road</h2>
      <h3>London</h3>

      <h3>NW1 9dp</h3>
      
    </div>
  </div>
</div>
<div id="footer__adress" className="footer__item">
   
 
  <div className="flex footer__phone">
    <CallIcon id="footer__icon" />
    <div>
    <p>+91 99471 86911 (IND)</p>
    <p>+447534039748 (UK)</p>
    <p>0558600813 (UAE)</p>
    </div>

    
  </div>
  
  <div className="flex footer__phone">
    <EmailIcon id="footer__icon" />
    <p>info@caravancamp.in </p>
  </div>
  {/* <div className="footer__input flex">
    <input placeholder="Subscribe our newsletter" />
    <div className="footer__arrow__div rounded-full">
      <ArrowForwardIcon />
    </div>
  </div> */}
</div>
</div>
        </div>


      <div className="footer__bottom">
         <h4>All rights reserved. Developed by <a href="whatsapp://send?phone=+918606256402" data-action="share/whatsapp/share"   >
              {/* <p style={{textDecoration:'underline',cursor:'pointer'}} className="ml-2"> */}
                
               <span style={{textDecoration:'underline',color:"#fff"}}>Booreact</span>
                 
               
             {/* </p> */}
  </a>
         </h4>
      </div>
    </div>
  );
}
