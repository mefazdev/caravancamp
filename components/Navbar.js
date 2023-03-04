import Image from "next/image";
import logo from "../assets/images/logo.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Link from "next/link";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import ShareIcon from "@mui/icons-material/Share";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Navbar() {
  const router = useRouter();

  const [collapse, setCollapse] = useState(false);
  const [about, setAbout] = useState(false);
  const [media, setMedia] = useState(false);
  const [social, setSocial] = useState(false);
  const [weDo, setWeDo] = useState(false);

  const changeNavBar = () => {
    if (window.scrollY >= 8) {
      setCollapse(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavBar);
  });
  const controlAbout = () => {
    setAbout(!about);
  };

  const controlMedia = () => {
    setMedia(!media);
  };
  return (
    <div className="navbar">
      <div className="nav__content">
        <div className="nav__container grid grid-cols-2">
          <div>
            <div className="logo__text" style={{ cursor: "pointer" }}>
              <Link href="/">
                <Image src={logo} />
              </Link>
            </div>
          </div>

          <div className="w-full">
            <div className="nav__item__row  flex justify-between">
              <span className="flex">
                <Link href="/">
                  <h6>Home</h6>
                </Link>
              </span>

              <span className="flex">
                <Link href="/Programmes">
                  <h6>Programmes</h6>
                </Link>
              </span>
              <span className="flex nav__item__span group cursor-pointer">
                <h6>Media</h6>
                <ArrowDropDownIcon id="nav__icon" />
                <ul className="dropdown-menu absolute hidden   group-hover:block  ">
                  <span className="development__head cursor-pointer group">
                    {/* <a href="https://www.youtube.com/c/BolsterFoundation"> */}
                    <div className="pt-2">
                      <li className=" px-4 block whitespace-no-wrap text-sm ">
                        Youtube
                      </li>
                    </div>
                    {/* </a> */}

                    <Link href="/Photos">
                      <div
                        className={
                          router.pathname == "/Photos"
                            ? "active__dropdown py-2"
                            : "service__group__span py-2"
                        }
                      >
                        <li className=" px-4 block whitespace-no-wrap text-sm ">
                          Photos
                        </li>
                      </div>
                    </Link>
                    <Link href="/Video">
                      <div
                        className={
                          router.pathname == "/Video"
                            ? "active__dropdown py-2"
                            : "service__group__span py-2"
                        }
                      >
                        <li className=" px-4 block whitespace-no-wrap text-sm ">
                          Video Gallery
                        </li>
                      </div>
                    </Link>
                  </span>
                </ul>
              </span>

              {/* <Link href="/Contact"> */}
              <a href="https://forms.gle/25AUymSpDaNyzmu59"><h6>Register</h6></a>
              
              {/* </Link> */}
              <span className="flex">
                <Link href="/Contact">
                  <h6>Contact us</h6>
                </Link>
              </span>

              <button>Register</button>
            </div>

            <div className="nav__icons">
              <ShareIcon onClick={() => setSocial(!social)} id="share__icon" />
              {social ? (
                <div className="share__div">
                  <a href="https://www.facebook.com/profile.php?id=100089193994936&mibextid=ZbWKwL">
                    <FacebookIcon id="share__social" />
                  </a>

                  <TwitterIcon id="share__social" />
                  <InstagramIcon id="share__social" />
                  {/* <a href="https://www.youtube.com/c/BolsterFoundation"> */}
                  <YouTubeIcon id="share__social" />
                  {/* </a> */}
                </div>
              ) : (
                ""
              )}

              <MenuIcon
                onClick={() => setCollapse(!collapse)}
                id="menu__icon"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <<<<<<<<< COLLAPSE>>>>>>>>>>>>>> */}

      {collapse ? (
        <div className="nav__collapse">
          <Link href="/">
            <div className="collapse_row">
              <p>Home</p>
            </div>
          </Link>
          <Link href="/Programmes">
            <div className="collapse_row">
              <p>Programmes</p>
            </div>
          </Link>

          {/* <Link href="/Register"> */}
          <div className="collapse_row">
            <p>Register</p>
          </div>
          {/* </Link> */}

          <div className="collapse_row flex">
            <div className="flex" onClick={() => controlMedia()}>
              <p>Media</p>
              <ArrowRightIcon id="collapse__arrow" />
            </div>

            {media ? (
              <div className="collapse__collapse">
                {/* <a href="https://www.youtube.com/c/BolsterFoundation"> */}
                <div className="collapse_collapse__row">
                  <p>Youtube</p>
                </div>
                {/* </a> */}

                <Link href="/Photos">
                  <div className="collapse_collapse__row">
                    <p>Photo Gallery</p>
                  </div>
                </Link>

                <Link href="/Video">
                  <div className="collapse_collapse__row">
                    <p>Video Gallery</p>
                  </div>
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>

          <Link href="/Contact">
            <div className="collapse_row">
              <p>Contact us</p>
            </div>
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

{
  /* <a
              href="whatsapp://send?phone=+919605407078"
              data-action="share/whatsapp/share"
            > */
}
