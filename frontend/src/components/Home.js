import React from "react";
import main from "../images/main.svg";
import Wrapper from "../Wrappers/Home";
import {Logo} from "./index"


const Home = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>Welcome to my demo page!</p>
          <p>login credential</p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="" className="img main-img" />
      </div>
    </Wrapper>
  );
};


export default Home;
