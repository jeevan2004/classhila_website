import React, { useEffect, useRef, useState } from "react";

//
import "./home.css";

import { useAuthContext } from "../../AuthContextAPI";
import HomeBanner from "../../Components/homeBanner/HomeBanner";
import WithUs from "../../Components/WithUs/WithUs";
import BestCoaching from "../../Components/BestCoaching/BestCoaching";
import OurGoal from "../../Components/OurGoal/OurGoal";
import OurMentor from "../../Components/OurMentor/OurMentor";
import FAQPage from "../../Components/faq/FAQPage";

const Home = () => {
  const { popupOpen, setPopupOpen } = useAuthContext();

  const tabs = [
    "tab1",
    "tab2",
    "tab3",
    "tab4",
    "tab5",
    "tab6",
    "tab7",
    "tab8",
    "tab9",
    "tab10",
  ];

  const [activeTab, setActiveTab] = useState("tab1");

  const handleSelect = (selectedTab) => {
    setActiveTab(selectedTab);
  };

  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <HomeBanner />

      <WithUs />
      <OurGoal />
      <OurMentor />

      <div className="total_counter">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="content">
                <h2>100K+</h2>
                <p>Active Students</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="content">
                <h2>90+</h2>
                <p>Schools Enroled</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="content">
                <h2>80+</h2>
                <p>Courses</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="content">
                <h2>50+</h2>
                <p>Expert Instructors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BestCoaching />
      <FAQPage />
    </>
  );
};

export default Home;
