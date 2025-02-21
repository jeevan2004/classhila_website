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

  const BlogData = [
    {
      id: "importance-feedback-in-online-learning",
      image: blank_image,
      heading: `Maximizing Your Online Learning Experience: Essential Strategies `,
      content: `Discover strategies to optimize your online courses, from setting a study schedule to actively participating in discussions.`,
      contentList: [
        `To truly benefit from your online courses, it's important to adopt effective strategies that enhance your learning experience. Start by setting clear goals for what you want to achieve by the end of the course. This focus will keep you motivated and directed throughout your studies.`,
      ],
    },
  ];
  const blog = BlogData[0];
  const LatestArticle = [1, 2, 3];
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
      <Review />

      <div className="plan p-100">
        <div className="container ">
          {/* Header Section */}
          <div className="text-center mb-5">
            <h1
              className="display-4 mb-3"
              style={{ color: "rgba(237, 115, 48, 1)" }}
            >
              Select a Plan That Suits You.
            </h1>
            <p className="text-muted">
              Explore flexible pricing options tailored to fit your learning
              needs. Choose from our affordable plans
            </p>
          </div>
          <div className="row justify-content-center gx-5">
            <div className="col-md-4">
              <Plan />
            </div>
            <div className="col-md-4">
              <Plan />
            </div>
          </div>
        </div>
      </div>

      <FAQPage />
      <div className="home_single_blog ">
        <Container>
          <div className="row justify-content-center text-center">
            <div className="col-12 col-lg-8 mx-auto">
              <div className="text-center mb-5">
                <h6 className="pre_heading mb-2">Latest Article</h6>

                <h1
                  className="display-4 mb-3"
                  style={{ color: "rgba(237, 115, 48, 1)" }}
                >
                  Latest Updates in Online <br /> Courses and Education.
                </h1>
                <p className="">
                  Check back regularly for new courses, special events, and
                  exciting opportunities to enrich your education!
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-7">
              <div className="card_image">
                <img className="w-100" src={blog?.image} />
              </div>
              <div className="content">
                <h5>{blog?.heading}</h5>
                {blog?.contentList.map((item) => {
                  return (
                    <>
                      <p>{item}</p>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="col-md-5">
              <div className="latest_sec">
                {/* <h4>Latest Article</h4> */}
                <ul>
                  {LatestArticle?.map((item) => {
                    return (
                      <>
                        <li>
                          <img src={blank_image} alt="" />
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
                            <Link to={"#"}>{"Read More >"}</Link>
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
