import React, { useEffect, useState } from "react";
import "./Nextgen.css";
import AboutImg from "../../assets/image/vv_about.png";
import mask from "../../assets/image/vv_mask.png";
import shape1 from "../../assets/image/shape/blue.png";
import shape2 from "../../assets/image/shape/Vector.png";
import VideoImg from "../../assets/image/vv_video.png";
import img1 from "../../assets/image/vv_icon1.png";
import hiring from "../../assets/image/hiring.png";
import placement from "../../assets/image/placement.png";
import expert from "../../assets/image/expert.png";
import skills from "../../assets/image/skills.png";
import choose from "../../assets/image/vv_choose.png";

import icon1 from "../../assets/image/icon1.svg";
import icon2 from "../../assets/image/icon2.svg";
import icon3 from "../../assets/image/icon3.svg";
import icon4 from "../../assets/image/icon4.svg";
import shape from "../../assets/image/shap.png";
import Blog1 from "../../assets/image/projectManagemat.png";
import Blog2 from "../../assets/image/ai.png";
import Blog3 from "../../assets/image/samartHome.png";
import Blog4 from "../../assets/image/blockchain.png";
import faq from "../../assets/image/vv_faq.png";
import SundarPichai from "../../assets/image/logo/SundarPichai.png";
import SatyaNadella from "../../assets/image/logo/SatyaNadella.png";

import highlight from "../../assets/image/vv_highlight.png";
import { Accordion, Col, Container, Nav, Row, Tab } from "react-bootstrap";
import Slider from "react-slick";
const NextgenAcademy = () => {
  useEffect(() => {
    document.title = "NextGen 5.0 - Your Gateway to High-Paying Software Jobs!";
  }, []);

  const [activeTab, setActiveTab] = useState("tab1");

  const handleSelect = (key) => setActiveTab(key);
  const questions = [
    {
      title: "Industry Company-Ready Certification (ICRC)",
      content:
        "Earn India’s first Company-Ready Certification (ICRC 5.0 ), ensuring you stand out in the competitive tech job market.",
    },
    {
      title: "Top Company Mentorship",
      content:
        "Learn from alumni and company experts from top companies like Google, Microsoft, and Amazon.etc…",
    },
    {
      title: "Hands-On Projects",
      content:
        "Build cutting-edge solutions using AI, Machine Learning, IoT, Blockchain, and more.",
    },
    {
      title: "Job-Ready Skills",
      content:
        "Gain expertise in full-stack development, competitive programming, and real-world problem-solving.",
    },
    {
      title: "Flexible Learning",
      content:
        "Juggle studies and vvGrad’s curriculum with just 10 hours of weekly effort alongside your college education.",
    },
    {
      title: "Direct Job Placement Support",
      content:
        "Benefit from placement assistance, career coaching, and a direct pipeline to hiring partners, with salaries Upto ₹30 LPA.",
    },
  ];

  const data = [
    {
      img: icon1,
      heading: "Industry Company Ready Certification (ICRC 5.0)",
      content:
        "Stand out in the job market with this prestigious certification.",
    },
    {
      img: icon2,
      heading: "Job Placement Support",
      content: " Direct access to hiring partners and job opportunities.",
    },
    {
      img: icon3,
      heading: "Real-World Projects",
      content: "Work on AI, IoT, Blockchain, and other high-impact projects.",
    },
    {
      img: icon4,
      heading: "Personalised Mentorship",
      content:
        "Weekly progress tracking and tailored guidance from industry experts.",
    },
    {
      img: icon2,
      heading: "Flexible Learning",
      content: " Learn at your own pace with just 10 hours per week.",
    },
  ];
  const ceoTestimonials = [
    {
      img: SundarPichai,
      name: "Sundar Pichai",
      company: "(Google)",
      post: "",
      content: `“Ambition backed by structured learning leads to unprecedented career success.”`,
    },
    {
      img: SatyaNadella,
      name: "Satya Nadella",
      company: "(Microsoft)",
      post: "",
      content: `“Skills matter more than degrees, and learning never stops.”`,
    },
  ];
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true, // Enables center mode
    centerPadding: "15px", // Space between slides
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
  var settings2 = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true, // Enables center mode
    centerPadding: "0px", // Adds space between slides
    variableWidth: false, // Ensures slides are equal-width
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
  var settings3 = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true, // Enables center mode
    centerPadding: "0px", // Space between slides
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
  const recommendSec = {
    heading: "Exclusive Projects to Boost Your Career",
    subHeading: "",

    items: [
      {
        img: Blog1,
        title: "AI-Powered Chatbot",
        description: `Automate customer support using machine learning and natural language processing.
`,
      },
      {
        img: Blog2,
        title: "IoT Smart Home Automation",
        description: `Design a smart home system integrating cloud computing and AI.`,
      },
      {
        img: Blog3,
        title: "Blockchain Identity Verification",
        description: `Develop decentralised systems for secure online identity verification.`,
      },
      {
        img: Blog4,
        title: "Predictive Maintenance for Smart Manufacturing",
        description: `Use IoT sensors to minimise downtime in manufacturing.`,
      },
    ],
  };
  return (
    <>
      <div className="nextgen_banner">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="content">
                <h1 className="main_heading mb-4">
                  NextGen 5.0 – Your Gateway to High-Paying Software Jobs!
                </h1>
                <p className="main_text mb-5">
                  "Learn from Top Company Alumni and Earn India’s First Industry
                  Companies-Ready Certification (ICRC 5.0 ) to Secure High-Paid
                  Software Jobs!"
                </p>
                <button className="btn_primary">
                  Request Callback <i class="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nextgen_box">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="content">
                <img src={img1} alt="" />

                <p className="main_text mt-3">
                  You can start CCBP 4.0 Academy right after Intermediate/12th
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="content">
                <img src={img1} alt="" />

                <p className="main_text mt-3">
                  You can start CCBP 4.0 Academy right after Intermediate/12th
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="content">
                <img src={img1} alt="" />

                <p className="main_text mt-3">
                  You can start CCBP 4.0 Academy right after Intermediate/12th
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="about_vvgrad p-100">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about_img">
                <img src={AboutImg} alt="" />

                <div className="shape">
                  <img src={shape1} alt="" />
                </div>
                <div className="vector">
                  <img src={shape2} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content">
                <div className="pre_heading">Program Overview</div>
                <h1 className="main_heading mt-3 mb-3">
                  Welcome to
                  <span className="secondary_text"> vvGrad 5.0 Academy</span>
                </h1>
                <p className="main_text">
                  An elite 12-month, part-time program crafted for students
                  post-12th and ongoing degree students (up to the 3rd year).
                  Designed to equip you with in-demand technical skills and
                  certifications, vvGrad 5.0 prepares you for high-paying
                  software jobs, regardless of your college or academic
                  background. Gain hands-on experience, develop real-world
                  solutions, and receive personalized mentorship—all in just 10
                  hours per week.
                </p>

                <button className="btn_primary mt-3">
                  Join Now <i class="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="why_vvgrad p-100">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="content">
                <div className="pre_heading">Why vvGrad?</div>
                <h1 className="main_heading mt-3 mb-3">
                  Why Choose vvGrad 5.0
                  <span className="secondary_text"> NxtGen Academy?</span>
                </h1>

                <div className="why_vvgrad_list">
                  <Accordion defaultActiveKey="0">
                    {questions.map((question, index) => (
                      <Accordion.Item eventKey={index.toString()} key={index}>
                        <Accordion.Header>{question.title}</Accordion.Header>
                        <Accordion.Body>{question.content}</Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div className="why_vvgrad_img">
                <img src={mask} alt="" />

                <div className="shape">
                  <img src={shape1} alt="" />
                </div>
                <div className="vector">
                  <img src={shape2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="highlight p-100">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center">
              <div className="why_vvgrad_img">
                <img src={highlight} alt="" />

                <div className="shape">
                  <img src={shape1} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content">
                <div className="pre_heading">Highlights</div>
                <h1 className="main_heading mt-3 mb-3">
                  Program
                  <span className="secondary_text"> Highlights</span>
                </h1>

                <ul className="highlight_list">
                  <li>
                    <i className="far fa-check-circle me-2"></i>
                    <span>
                      <b>Duration: </b> 12 months (Part-time)
                    </span>
                  </li>
                  <li>
                    <i className="far fa-check-circle me-2"></i>
                    <span>
                      <b>Effort: </b> 10 hours per week
                    </span>
                  </li>
                  <li>
                    <i className="far fa-check-circle me-2"></i>
                    <span>
                      <b>Certification: </b> ICRC 5.0 upon completion
                    </span>
                  </li>
                  <li>
                    <i className="far fa-check-circle me-2"></i>
                    <span>
                      {" "}
                      <b>Placement Support: </b> Career coaching, mock
                      interviews, resume building, and direct hiring access
                    </span>
                  </li>
                  <li>
                    <i className="far fa-check-circle me-2"></i>
                    <span>
                      {" "}
                      <b>Personalized Mentorship: </b> Weekly check-ins, growth
                      plans, and expert guidance
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="breakdown  p-100 ">
        <div className="container">
          <div className="row justify-content-center mb-3 pb-4">
            <div className="col-md-6 text-center">
              <h3 className="pre_heading mx-auto">Curriculum</h3>
              <h1 className="main_heading mt-3 mb-3">
                Curriculum
                <span className="secondary_text"> Breakdown</span>
              </h1>
            </div>
          </div>
          <Tab.Container
            defaultActiveKey="tab1"
            activeKey={activeTab}
            onSelect={handleSelect}
          >
            {/* Left-Side Tabs */}
            <div className="tabs-nav">
              <Nav variant="pills" className="">
                <Nav.Item>
                  <Nav.Link eventKey="tab1">
                    <h4>Module 1</h4>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab2">
                    {" "}
                    <h4>Module 2</h4>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab3">
                    {" "}
                    <h4>Module 3</h4>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab4">
                    {" "}
                    <h4>Module 4</h4>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab5">
                    {" "}
                    <h4>Module 5</h4>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab6">
                    {" "}
                    <h4>Module 6</h4>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <Row>
              {/* Right-Side Content */}
              <Col md={12} className="tabs-content">
                <Tab.Content>
                  <Tab.Pane eventKey="tab1">
                    <div className="row">
                      <div className="col-md-6">
                        <h4 className="second_heading mb-3">
                          This phase builds essential programming skills and
                          prepares you for more advanced learning.
                        </h4>
                        <div className="inner_content">
                          <h5
                            className="main_text mb-3"
                            style={{
                              color: "rgba(242, 99, 34, 1)",
                              fontWeight: "600",
                            }}
                          >
                            Key Topics:
                          </h5>
                          <ul className="ps-4">
                            <li>Python programming</li>
                            <li>Object-Oriented Programming (OOP)</li>
                            <li>Basic data structures & algorithms</li>
                            <li>Computer Science Fundamentals</li>
                          </ul>{" "}
                        </div>

                        <h4
                          className="main_text mb-1 mt-3"
                          style={{
                            color: "rgba(242, 99, 34, 1)",
                            fontWeight: "600",
                          }}
                        >
                          Outcome:
                        </h4>
                        <p className="main_text" style={{ color: "#333" }}>
                          Develop your ability to "think in code" and master
                          core problem-solving skills.
                        </p>
                      </div>
                      <div className="col-md-6 text-center">
                        <div className="breakdown_img">
                          <img src={mask} alt="" />

                          <div className="shape">
                            <img src={shape1} alt="" />
                          </div>
                          <div className="vector">
                            <img src={shape2} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab2">
                    <div className="row">
                      <div className="col-md-6">
                        <h4 className="second_heading mb-3">
                          Become proficient in both front-end and back-end web
                          development to build end-to-end web applications.
                        </h4>
                        <div className="inner_content">
                          <h5
                            className="main_text mb-3"
                            style={{
                              color: "rgba(242, 99, 34, 1)",
                              fontWeight: "600",
                            }}
                          >
                            Key Topics:
                          </h5>
                          <ul className="ps-4">
                            <li>HTML5, CSS3, JavaScript</li>
                            <li>Frontend with React JS</li>
                            <li>Backend with Node.js, Express</li>
                            <li>API design and database management</li>
                          </ul>{" "}
                        </div>

                        <h4
                          className="main_text mb-1 mt-3"
                          style={{
                            color: "rgba(242, 99, 34, 1)",
                            fontWeight: "600",
                          }}
                        >
                          Outcome:
                        </h4>
                        <p className="main_text" style={{ color: "#333" }}>
                          Gain the skills to build scalable and secure
                          applications.
                        </p>
                      </div>
                      <div className="col-md-6 text-center">
                        <div className="breakdown_img">
                          <img src={mask} alt="" />

                          <div className="shape">
                            <img src={shape1} alt="" />
                          </div>
                          <div className="vector">
                            <img src={shape2} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab3">
                    <div className="row">
                      <div className="col-md-6">
                        <h4 className="second_heading mb-3">
                          Strengthen algorithmic thinking and problem-solving to
                          excel in coding competitions and technical interviews.
                        </h4>
                        <div className="inner_content">
                          <h5
                            className="main_text mb-3"
                            style={{
                              color: "rgba(242, 99, 34, 1)",
                              fontWeight: "600",
                            }}
                          >
                            Key Topics:
                          </h5>
                          <ul className="ps-4">
                            <li>Data structures & algorithms</li>
                            <li>Competitive programming</li>
                            <li>Version control (Git)</li>
                            <li>Command-line tools</li>
                          </ul>{" "}
                        </div>

                        <h4
                          className="main_text mb-1 mt-3"
                          style={{
                            color: "rgba(242, 99, 34, 1)",
                            fontWeight: "600",
                          }}
                        >
                          Outcome:
                        </h4>
                        <p className="main_text" style={{ color: "#333" }}>
                          Enhance your problem-solving skills and become
                          interview-ready.
                        </p>
                      </div>
                      <div className="col-md-6 text-center">
                        <div className="breakdown_img">
                          <img src={mask} alt="" />

                          <div className="shape">
                            <img src={shape1} alt="" />
                          </div>
                          <div className="vector">
                            <img src={shape2} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab4">
                    <div className="row">
                      <div className="col-md-6">
                        <h4 className="second_heading mb-3">
                          Dive deep into next-gen technologies and position
                          yourself as a future-ready developer.
                        </h4>
                        <div className="inner_content">
                          <h5
                            className="main_text mb-3"
                            style={{
                              color: "rgba(242, 99, 34, 1)",
                              fontWeight: "600",
                            }}
                          >
                            Key Topics:
                          </h5>
                          <ul className="ps-4">
                            <li>AI/Machine Learning AWS</li>
                            <li>
                              <li>Data Science & Big Data. AWS</li>
                              <li>Internet of Things (IoT) AWS</li>
                              Blockchain & Cybersecurity
                            </li>
                          </ul>{" "}
                        </div>

                        <h4
                          className="main_text mb-1 mt-3"
                          style={{
                            color: "rgba(242, 99, 34, 1)",
                            fontWeight: "600",
                          }}
                        >
                          Outcome:
                        </h4>
                        <p className="main_text" style={{ color: "#333" }}>
                          Work on innovative solutions using cutting-edge
                          technology.
                        </p>
                      </div>
                      <div className="col-md-6 text-center">
                        <div className="breakdown_img">
                          <img src={mask} alt="" />

                          <div className="shape">
                            <img src={shape1} alt="" />
                          </div>
                          <div className="vector">
                            <img src={shape2} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab5">
                    <div className="row">
                      <div className="col-md-6">
                        <h4 className="second_heading mb-3">
                          Apply your skills to build real-world projects with a
                          focus on full-stack and Industry 5.0 technologies.
                        </h4>
                        <div className="inner_content">
                          <h5
                            className="main_text mb-3"
                            style={{
                              color: "rgba(242, 99, 34, 1)",
                              fontWeight: "600",
                            }}
                          >
                            Key Topics:
                          </h5>
                          <ul className="ps-4">
                            <li>
                              AI-Powered Chatbot: Build a chatbot for customer
                              support using AI and machine learning.
                            </li>
                            <li>
                              IoT Smart Home Automation: Create a smart home
                              system with AI-driven automation.
                            </li>
                            <li>
                              Blockchain Identity Verification: Design a
                              decentralized digital identity system for secure
                              online verification.
                            </li>
                            <li>
                              {" "}
                              Predictive Maintenance for Smart Manufacturing:{" "}
                              Develop a predictive solution using IoT sensors to
                              reduce downtime.
                            </li>
                          </ul>{" "}
                        </div>

                        <h4
                          className="main_text mb-1 mt-3"
                          style={{
                            color: "rgba(242, 99, 34, 1)",
                            fontWeight: "600",
                          }}
                        >
                          Outcome:
                        </h4>
                        <p className="main_text" style={{ color: "#333" }}>
                          Create a project portfolio that showcases your
                          expertise to potential employers.
                        </p>
                      </div>
                      <div className="col-md-6 text-center">
                        <div className="breakdown_img">
                          <img src={mask} alt="" />

                          <div className="shape">
                            <img src={shape1} alt="" />
                          </div>
                          <div className="vector">
                            <img src={shape2} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab6">
                    <div className="row">
                      <div className="col-md-6">
                        <h4 className="second_heading mb-3">
                          One Nation 5.0 First Job Placement Preparation
                          Program. <br /> Empowering Aspirants for Success in
                          India's Leading Companies
                        </h4>
                        <div className="inner_content">
                          <h5
                            className="main_text mb-3"
                            style={{
                              color: "rgba(242, 99, 34, 1)",
                              fontWeight: "600",
                            }}
                          >
                            Key Topics:
                          </h5>
                          <ul className="ps-4">
                            <li>
                              {" "}
                              The One Nation 5.0 First Job Placement Preparation
                              Program is your gateway to securing a rewarding
                              career with top companies across India. Tailored
                              to align with the hiring needs of leading
                              organizations, this program provides a structured
                              roadmap to help you succeed in competitive
                              recruitment processes. Whether you're aspiring to
                              work in product-based, service-based, or
                              platform-based companies, Nxt PrepX ensures you’re
                              prepared, confident, and job-ready.
                            </li>
                          </ul>{" "}
                        </div>

                        <h4
                          className="main_text mb-1 mt-3"
                          style={{
                            color: "rgba(242, 99, 34, 1)",
                            fontWeight: "600",
                          }}
                        >
                          Outcome:
                        </h4>
                        <p className="main_text" style={{ color: "#333" }}>
                          Create a project portfolio that showcases your
                          expertise to potential employers.
                        </p>
                      </div>
                      <div className="col-md-6 text-center">
                        <div className="breakdown_img">
                          <img src={mask} alt="" />

                          <div className="shape">
                            <img src={shape1} alt="" />
                          </div>
                          <div className="vector">
                            <img src={shape2} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </section>

      <div className="choose_us p-100">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center">
              <div className="choose_img">
                <img src={choose} alt="" />

                <div className="shape">
                  <img src={shape1} alt="" />
                </div>
                <div className="vector">
                  <img src={shape2} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content">
                <div className="pre_heading">Why Choose Us?</div>
                <h1 className="main_heading mt-3 mb-3">
                  Why Choose Nxt PrepX
                  <span className="secondary_text"> One Nation 5.0?</span>
                </h1>

                <ul className="choose_us_list mt-5">
                  <li>
                    <img src={hiring} alt="" />
                    <p>
                      <b>Aligned with India’s Top Hiring Standards </b> Prepare
                      specifically for the recruitment processes of leading
                      companies in India.
                    </p>
                  </li>
                  <li>
                    <img src={placement} alt="" />
                    <p>
                      <b>End-to-End Placement Preparation</b> Prepare
                      specifically for the recruitment processes of leading
                      companies in India.
                    </p>
                  </li>
                  <li>
                    <img src={skills} alt="" />
                    <p>
                      <b>Job-Ready Skills</b> Prepare specifically for the
                      recruitment processes of leading companies in India.
                    </p>
                  </li>
                  <li>
                    <img src={expert} alt="" />
                    <p>
                      {" "}
                      <b>Expert Guidance</b> Prepare specifically for the
                      recruitment processes of leading companies in India.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="features p-100">
        <div className="container">
          <div className="row justify-content-center mb-3 pb-4">
            <div className="col-md-6 text-center">
              <h3 className="pre_heading mx-auto">Features</h3>
              <h1 className="main_heading mt-3 mb-3">
                Key
                <span className="secondary_text"> Features</span>
              </h1>
            </div>
          </div>

          <div className="features_list">
            <div className="heading">
              Company-Specific{" "}
              <span className="secondary_text">Exam Training</span>
            </div>
            <h6>
              Master aptitude tests, coding challenges, and technical rounds
              tailored to the hiring standards of:
            </h6>
            <ul>
              <li>Product-Based Companies (e.g., Microsoft, Google)</li>
              <li>Service-Based Companies (e.g., TCS, Infosys)</li>
              <li>Platform-Based Companies (e.g., Amazon, Flipkart)</li>
            </ul>
          </div>
          <div className="features_list">
            <div className="heading">
              Job-Ready <span className="secondary_text">Certifications</span>
            </div>
            <h6>
              Gain an Industry Company-Ready Certification (ICRC) to demonstrate
              your expertise and readiness for the job.
            </h6>
          </div>
          <div className="features_list">
            <div className="heading">
              Comprehensive
              <span className="secondary_text">Career Preparation</span>
            </div>

            <ul>
              <li>
                Aptitude & Soft Skills Training: Build problem-solving,
                communication, and interpersonal skills.
              </li>
              <li>
                Mock Interviews: Practice with real-world scenarios, guided by
                AI and professional panels.
              </li>
              <li>
                Resume Optimization: Craft resumes that stand out in applicant
                tracking systems (ATS).
              </li>
            </ul>
          </div>
          <div className="features_list">
            <div className="heading">
              Placement
              <span className="secondary_text">Success Support</span>
            </div>
            <ul className="mb-2">
              <li>
                Access to mega placement drives connecting you with top
                employers.
              </li>
              <li>
                Personalized feedback and one-on-one mentorship to ace every
                hiring round.
              </li>
            </ul>
            <h6>
              Nxt HireX-Our career support continues until you secure a
              high-paying job. Key Support:
            </h6>
            <h6>
              Resume Building:Craft a standout resume that highlights your
              skills and projects.
            </h6>
            <ul>
              <li>
                Mock Interviews: Prepare for technical and HR interviews with
                expert feedback.
              </li>
              <li>
                Placement Assistance: Gain access to top hiring partners and
                exclusive job opportunities.
              </li>
              <li>
                Career Coaching: Receive personalized career guidance throughout
                your journey.
              </li>
            </ul>
            <p className="mt-2">
              <b> Outcome: </b>You'll be job-ready with access to roles offering
              salaries starting at ₹30 LPA.
            </p>
          </div>
        </div>
      </div>

      <section className="benifit_box p-100">
        <div className="container">
          <div className="row justify-content-center mb-3 pb-4">
            <div className="col-md-10 text-center">
              <h3 className="pre_heading mx-auto">Benefits</h3>
              <h1 className="main_heading mt-3 mb-3">
                Program Benefits-
                <span className="secondary_text">Nxt PrepX AND HireX</span>
              </h1>
            </div>
          </div>

          <Slider {...settings}>
            {data?.map((item) => {
              return (
                <>
                  <div className="benifit-item">
                    <div className="benifit-icon benifit-icon-1">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="benifit-content">
                      <h4>{item?.heading}</h4>
                      <p>{item?.content} </p>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </section>
      <section className={`p-100 recommended reNext `}>
        <Container className="">
          <div className="row justify-content-center mb-3 pb-4">
            <div className="col-md-10 text-center">
              <h3 className="pre_heading mx-auto">Testimonials</h3>
              <h1 className="main_heading mt-3 mb-3">
                Exclusive Projects to
                <span className="secondary_text"> Boost Your Career</span>
              </h1>
            </div>
          </div>

          <Slider {...settings2}>
            {recommendSec?.items?.map((item) => {
              return (
                <>
                  <div className="single-team-box">
                    <div className="team-thumb">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="team-content">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </Container>
      </section>
      <div className="achievers insights_sec ceo p-100">
        <div className="container">
          <div className="row justify-content-center mb-5 ">
            <div className="col-12 col-md-6 text-center">
              <div className="pre_heading mx-auto mb-3 ">Testimonials</div>
              <div className="main_heading">
                Testimonials from
                <span className="secondary_text"> Leading CEOs & CTOs</span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-2 mb-4 mb-md-0">
              <div className="achiver_cont">
                <h4>4.9/5</h4>
                <div className="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <p>Rated 4.9 out of 5 from 9,614 customer reviews.</p>
              </div>
            </div>
            <div className="col-md-10 mb-4 mb-md-0">
              <Slider {...settings3}>
                {ceoTestimonials?.map((item) => {
                  return (
                    <>
                      <div className="achiver_box">
                        <div className="author">
                          <div className="author_img">
                            <img src={item?.img} alt="" />
                          </div>
                          <div className="author_content">
                            <h3 className="sub_heading">{item?.name}</h3>
                            <span className="main_text">{item?.company}</span>
                          </div>
                        </div>
                        <p className="main_text mb-3 mt-3">{item?.content}</p>
                        <div className="rating">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <span className="main_text ms-2">48</span>
                        </div>
                      </div>
                    </>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>

      <div className="faq  p-100">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center">
              <div className="choose_img">
                <img src={faq} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="content">
                <div className="pre_heading">FAQ's</div>
                <h1 className="main_heading mt-3 mb-3">
                  Frequently
                  <span className="secondary_text"> Asked Questions</span>
                </h1>

                <ul className="faq_list mt-5">
                  <li>
                    <p>
                      <b>What is the duration of the program? </b> The program
                      lasts 12 months, with 10 hours of weekly study.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>What job roles can I expect?</b> Expect roles in
                      full-stack development, AI/ML, IoT, data science with
                      salaries starting at ₹30 LPA or higher.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Do I need prior coding experience?</b> No prior coding
                      experience is required—just basic high school maths.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="refer p-100">
        <div className="container">
          <div className="content">
            <div className="main_heading mb-3 ">
              Refer & <span className="secondary_text"> Earn Program </span>
            </div>
            <div className="main_text mb-4 ">
              Refer your friends to vvGrad 5.0 Academy and earn rewards when
              they enrol!
            </div>
            <div className="buttons d-flex align-items-center justify-content-center">
              <div className="btn_border me-3">
                Refer Now
                <i class="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="get_touch p-100">
        <div className="container">
          <div className="content">
            <div className="main_heading mb-3 text_white">
              Ready to Transform Your Career?
            </div>
            <div className="main_text mb-4 text_white">
              Start your journey with vvGrad today and unlock a world of
              opportunities.
            </div>
            <div className="buttons d-flex align-items-center justify-content-center">
              <div className="btn_primary me-3">
                Join Now
                <i class="fas fa-arrow-right"></i>
              </div>
              <div className="btn_white">
                Speak to Our Experts
                <i class="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NextgenAcademy;
