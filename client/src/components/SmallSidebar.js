import React from "react";
import { FaTimes } from "react-icons/fa";
import { useAppContext } from "../context/appContext";
import links from "../utils/links";
import Wrapper from "../Wrappers/SmallSidebar";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

const SmallSidebar = () => {
  return (
    <Wrapper>
      <div className="sidebar-container show-sidebar"></div>
      <div className="content">
        <button
          type="button"
          className="close-btn"
          onClick={() => {
            console.log("toggle sidebar");
          }}
        >
          <FaTimes />
        </button>
        <header>
          <Logo />
        </header>
        <div className="nav-links"></div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
