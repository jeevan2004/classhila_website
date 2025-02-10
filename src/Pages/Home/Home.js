import React, { useEffect, useRef, useState } from "react";

//
import "./home.css";

import { useAuthContext } from "../../AuthContextAPI";
import HomeBanner from "../../Components/homeBanner/HomeBanner";
import WithUs from "../../Components/WithUs/WithUs";

const Home = () => {
  const { popupOpen, setPopupOpen } = useAuthContext();

  useEffect(() => {
    document.title = "NextGen 5.0 - Transform Your Future with vvGrad";
  }, []);
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
    </>
  );
};

export default Home;
