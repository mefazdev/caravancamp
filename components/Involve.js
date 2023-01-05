import React from "react";
 
import MenuBookIcon from '@mui/icons-material/MenuBook';
 
import RocketIcon from '@mui/icons-material/Rocket';
import SchoolIcon from '@mui/icons-material/School';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MicExternalOnIcon from '@mui/icons-material/MicExternalOn';
// import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
export default function Involve() {
  return (
    <div className="hm__involve">
      <div className="hm__involve__contetn">
        <div className="hm__involve__head">
          <h3>Facilitators</h3>
        </div>
        <div className="hm__involve__row gap-10 grid sm:grid-cols-2  lg:grid-cols-5 ">
           
            <div  className="invo__box">
              <MenuBookIcon id="invo__icon" />
              <div className="involve__footer">
                <h4>Scholers</h4>
              </div>
            </div>
        

            <div  className="invo__box">
              <RocketIcon id="invo__icon" />
              <div className="involve__footer">
                <h4>Scientists</h4>
              </div>
            </div>

            <div  className="invo__box">
              <SchoolIcon id="invo__icon" />
              <div className="involve__footer">
                <h4>Educators</h4>
              </div>
            </div>

            <div  className="invo__box">
              <FavoriteIcon id="invo__icon" />
              <div className="involve__footer">
                <h4>Docters</h4>
              </div>
            </div>
            <div  className="invo__box">
              <MicExternalOnIcon id="invo__icon" />
              <div className="involve__footer">
                <h4>Trainers</h4>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
