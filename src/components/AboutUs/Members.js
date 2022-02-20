import React from "react";
import MembersCSS from "./Members.module.css";

function Members() {
  return (
    <div className={MembersCSS.base}>
      <div className={MembersCSS.content}>
        <img src="img/aboutus/HJ_1.png" alt="HJ_1" />
        <div className={MembersCSS.text}>
          <h2>Hojung Son</h2>
          <h3>CEO</h3>
        </div>
      </div>
      <div className={MembersCSS.content}>
        <img src="" alt="" />
        <div className={MembersCSS.text}>
          <h2>Myungseon Ryou</h2>
          <h3>CTO</h3>
        </div>
      </div>
        <div className={MembersCSS.content}>
          <img src="img/aboutus/C.png" alt="" />
          <div className={MembersCSS.text}>
            <h2>Cheong Lee</h2>
            <h3>App Developer</h3>
          </div>
        </div>
        <div className={MembersCSS.content}>
          <img src="img/aboutus/SH.png" alt="" />
          <div className={MembersCSS.text}>
            <h2 style={{letterSpacing: "-0.05rem"}} >Seohyun Yoon</h2>
            <h3>R{"&"}D Director</h3>
          </div>
        </div>
        <div className={MembersCSS.content}>
          <img src="img/aboutus/JA.png" alt="" />
          <div className={MembersCSS.text}>
            <h2>Jinah Park</h2>
            <h3 style={{letterSpacing: "-0.05rem"}} >Marketing Team <br/>Leader</h3>
          </div>
        </div>
        <div className={MembersCSS.content}>
          <img src="img/aboutus/HJ_2.png" alt="" />
          <div className={MembersCSS.text}>
            <h2>Hyunjae Lee</h2>
            <h3>Researcher</h3>
          </div>
        </div>
        <div className={MembersCSS.content}>
          <img src="img/aboutus/YA.png" alt="" />
          <div className={MembersCSS.text}>
            <h2>Yoona Kim</h2>
            <h3>Designer</h3>
          </div>
        </div>
      </div>
  );
}

export default Members;
