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
import Review from "../../Components/Review/Review";
import Plan from "../../Components/Plan/Plan";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import blank_image from "../../assets/image/blank_image.png";
import img1 from "../../assets/image/img1.png";
import latest1 from "../../assets/image/latest1.png";
import latest2 from "../../assets/image/latest2.png";
import latest3 from "../../assets/image/latest3.png";

import star_grey from "../../assets/image/icon/star_grey.png";
import star_orange from "../../assets/image/icon/star_orange.png";
import ellipse_yellow from "../../assets/image/icon/ellipse_yellow.png";
import ellipse_orange from "../../assets/image/icon/ellipse_orange.png";
import Faq from "../../Components/faq/Faq";
import ReactPlayer from "react-player";

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

  const BlogData = [
    {
      id: "importance-feedback-in-online-learning",
      image: img1,
      heading: `Maximizing Your Online Learning Experience: Essential Strategies `,
      content: `Discover strategies to optimize your online courses, from setting a study schedule to actively participating in discussions.`,
      contentList: [
        `To truly benefit from your online courses, it's important to adopt effective strategies that enhance your learning experience. Start by setting clear goals for what you want to achieve by the end of the course. This focus will keep you motivated and directed throughout your studies.`,
      ],
    },
  ];
  const blog = BlogData[0];
  const LatestArticle = [
    {
      id: "importance-feedback-in-online-learning",
      image: latest1,
      heading: `Maximizing Your Online Learning Experience: Essential Strategies `,
      content: `Discover strategies to optimize your online courses, from setting a study schedule to actively participating in discussions.`,
      contentList: [
        `To truly benefit from your online courses, it's important to adopt effective strategies that enhance your learning experience. Start by setting clear goals for what you want to achieve by the end of the course. This focus will keep you motivated and directed throughout your studies.`,
      ],
    },
    {
      id: "importance-feedback-in-online-learning",
      image: latest2,
      heading: `Maximizing Your Online Learning Experience: Essential Strategies `,
      content: `Discover strategies to optimize your online courses, from setting a study schedule to actively participating in discussions.`,
      contentList: [
        `To truly benefit from your online courses, it's important to adopt effective strategies that enhance your learning experience. Start by setting clear goals for what you want to achieve by the end of the course. This focus will keep you motivated and directed throughout your studies.`,
      ],
    },
    {
      id: "importance-feedback-in-online-learning",
      image: latest3,
      heading: `Maximizing Your Online Learning Experience: Essential Strategies `,
      content: `Discover strategies to optimize your online courses, from setting a study schedule to actively participating in discussions.`,
      contentList: [
        `To truly benefit from your online courses, it's important to adopt effective strategies that enhance your learning experience. Start by setting clear goals for what you want to achieve by the end of the course. This focus will keep you motivated and directed throughout your studies.`,
      ],
    },
  ];

  const planData = [
    {
      plan: "Monthly",
      price: "599",
      duration: "Monthly",
      services: [
        `Unlimited Access Courses`,
        `Certificate After Completion`,
        `Excercise Files & Notes`,
        `Personalized Feedback`,
        `Community Support`,
      ],
    },
    {
      plan: "Quarterly",
      price: "3594",
      duration: "Quarterly",
      services: [
        `Unlimited Access Courses`,
        `Certificate After Completion`,
        `Excercise Files & Notes`,
        `Personalized Feedback`,
        `Community Support`,
      ],
    },
    {
      plan: "Yearly",
      price: "7189",
      duration: "Yearly",
      services: [
        `Unlimited Access Courses`,
        `Certificate After Completion`,
        `Excercise Files & Notes`,
        `Personalized Feedback`,
        `Community Support`,
      ],
    },
  ];
  return (
    <>
      <HomeBanner />

      <WithUs btn={true} />
      <OurGoal />
      <OurMentor viewMore={false} viewAll={true} />

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
      <Review />

      <div className="plan p-100">
        <div className="container ">
          {/* Header Section */}
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="text-center mb-5">
                <h1
                  className="main_heading mb-3"
                  style={{ color: "rgba(237, 115, 48, 1)" }}
                >
                  Select a Plan That Suits You.
                </h1>
                <p className="main_text">
                  Explore flexible pricing options tailored to fit your learning
                  needs. Choose from our affordable plans
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center gx-5">
            {planData?.map((item) => {
              return (
                <>
                  <div className="col-md-6 col-lg-4">
                    <Plan data={item} />
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="shape">
          <img src={star_grey} alt="" className="shape1" />
          <img src={star_orange} alt="" className="shape2" />
          <img src={ellipse_orange} alt="" className="shape3" />
          <img src={ellipse_yellow} alt="" className="shape4" />
        </div>
      </div>
      <div className="faq_sec">
        <Faq />
      </div>
      <div className="home_single_blog p-70">
        <Container>
          <div className="row justify-content-center text-center">
            <div className="col-12 col-lg-6 mx-auto">
              <div className="text-center mb-5">
                <h6 className="pre_heading mb-2 text-uppercase">
                  Latest Article
                </h6>

                <h1
                  className="main_heading mb-3"
                  style={{ color: "rgba(237, 115, 48, 1)" }}
                >
                  Latest Updates in Online <br /> Courses and Education.
                </h1>
                <p className="main_text">
                  Check back regularly for new courses, special events, and
                  exciting opportunities to enrich your education!
                </p>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-7">
              <div className="card_image">
                <img className="w-100" src={blog?.image} />
              </div>
              <div className="content">
                <h5>{blog?.heading}</h5>
                {blog?.contentList.map((item) => {
                  return (
                    <>
                      <p>{item}</p>
                      <Link to={"#"}>{"Read More >"}</Link>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="col-lg-5">
              <div className="latest_sec">
                {/* <h4>Latest Article</h4> */}
                <ul>
                  {LatestArticle?.map((item) => {
                    return (
                      <>
                        <li>
                          <img src={item?.image} alt="" />
                          <div className="contents">
                            <h5>
                              How They Impact Your Online Education Journey
                            </h5>
                            <p>
                              Juggling work, family, and studies can be
                              daunting. This article offers tips on time
                              management, prioritization, and setting realistic
                              goals.
                            </p>
                            <Link to={"/blog/maximizing-online-learning"}>
                              {"Read More >"}
                            </Link>
                          </div>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <button className="btn_primary px-5 mt-4 mx-auto">More</button>
        </Container>
      </div>
    </>
  );
};

export default Home;
