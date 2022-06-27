import React from "react";
import { Link, Outlet } from "react-router-dom";
import { BigSidebar, Navbar, SmallSidebar } from "../../components";
import Wrapper from "../../Wrappers/SharedLayout";

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayout;
