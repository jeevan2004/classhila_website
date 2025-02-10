import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import TopHeader from "../topHeader/TopHeader";
import Footer from "../Footer/Footer";

const PublicLayout = () => {
  return (
    <>
      {/* <TopHeader /> */}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default PublicLayout;
