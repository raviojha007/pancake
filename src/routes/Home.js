import React from "react";

function Home() {
  return (
    <div className="home content-cont">
      <div className="cont-cont" >
        <p className="sub-text">WebMaker Version 1.2</p>
        <div className="main-text" >
          <p>Website and User</p>
          <p>Interface</p>
          <p>Intergration</p>
        </div>
        <div>

        </div>
        <p className="sub-text">Create your website in the best way possible.</p>
        <div>
          <button className="btn sub-btn">Subscribe</button>
          <button className="btn dem-btn">Demo</button>
        </div>
      </div>
      <div className="img-cont" >
        <div><img className="phn-img" src="main.png"/></div>
        <div><img className="user-img shake" src="1.png"/></div>
        <div><img className="loader-img shake" src="2.png"/></div>
        <div><img className="cpp-img shake" src="3.png"/></div>
        <div><img className="tag-img shake" src="4.png"/></div>
        <div><img className="htl-img shake" src="5.png"/></div>
        <div><img className="con-img shake" src="6.png"/></div>
      </div>
    </div>
  );
}

export default Home;
