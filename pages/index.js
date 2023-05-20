import Image from "next/image";
import Programmes from "../components/Programmes";
import Navbar from "../components/Navbar";
import MainBanner from "../components/MainBanner";
import CloseIcon from "@mui/icons-material/Close";
import Involve from "../components/Involve";
 
import Footer from "../components/Footer";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
 
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import Head from "next/head";
import Objectives from "../components/Objectives";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import poster from '../assets/img/poster.jpeg'
export default function Home() {
  const [open, setOpen] = useState(false);

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }
  const controlOpen = async () => {
    await timeout(3000);
    setOpen(true);
  };
  useEffect(() => {
    controlOpen();
  }, []);
  return (
    <div>
      <Head>
        <title>Caravan camps</title>
        <meta
          name="description"
          content="
          The Caravan camps are an immersive learning experience designed to acquaint your children with the core Islamic disciplines, lifestyle, contemporary issues, and leadership skills. The Camp will include activities that introduce the participants to the living landscape around them with trekking, as well as to sustainable and regenerative living practices such as permaculture, conscious and responsible consumption, minimalism, etc."
        />
        <meta property="og:title" content="Caravan camps" key="title" />
        <link rel="canonical" href="https://www.caravancamps.in" />
        <link rel="icon" 
        href="/favicon.ico" 
    
        />
     
      </Head>
      <Navbar />



      <a href="whatsapp://send?phone=+919947186911" data-action="share/whatsapp/share"  className="float"  >
 <WhatsAppIcon style={{fontSize:'34px'}}/>
  </a>

      <main className="home " style={{scrollBehavior:'smooth'}}>
        <MainBanner />
        <div className="home__social">
          <a href="https://www.facebook.com/profile.php?id=100089193994936&mibextid=ZbWKwL">
            <div className="social__circle rounded-full">
              <FacebookIcon id="social__ic" />
            </div>
          </a>

          <div className="social__circle rounded-full">
            <TwitterIcon id="social__ic" />
          </div>
          <div className="social__circle rounded-full">
            <InstagramIcon id="social__ic" />
          </div>
          {/* <a href="https://www.youtube.com/c/BolsterFoundation"> */}
            <div className="social__circle rounded-full">
              <YouTubeIcon id="social__ic" />
            </div>
          {/* </a> */}
        </div>
        <div className="home__about">
          <div className="home__about__head">
            <div className="home__subhead">
              <h3>About</h3>
            </div>
          </div>
          <div className="home__about__content grid grid-cols-1 gap-5 lg:gap-10 lg:grid-cols-3">
            <div className="home__about__img"></div>
            <div className="home__about__content__right lg:col-span-2">
              <p>

              The Caravan camps are an immersive learning experience designed to acquaint your children with the core Islamic disciplines, lifestyle, contemporary issues, and leadership skills. The Camp will include activities that introduce the participants to the living landscape around them with trekking, as well as to sustainable and regenerative living practices such as permaculture, conscious and responsible consumption, minimalism, etc.
            
              </p>
                <a href="https://forms.gle/FPDqfa57UPTzUZhs7"><button>Register now</button></a>
                
      
            </div>
          </div>
        </div>

        <Programmes />

        <Involve />

      <Objectives   />

        {/* <Blogs /> */}
        {/* <SocialEmbed /> */}
      </main>

      <Footer />
      <Modal
        id="modal"
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal">
          <div className="modal__head">
            <CloseIcon id="close__icon" onClick={() => setOpen(false)} />
          </div>
          <div className="modal__footer">
           
            <div className="modal__footer__div">
              <a href="https://forms.gle/FPDqfa57UPTzUZhs7">
                <button>REGISTER NOW</button>
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
