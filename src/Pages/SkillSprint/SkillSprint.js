import React, { useEffect } from "react";
import aboutTalent from "../../assets/image/skill_about.png";
import skillProgram from "../../assets/image/skill_program.png";
import shape1 from "../../assets/image/shape/blue.png";
import shape2 from "../../assets/image/shape/Vector.png";
import HomeBanner from "../../assets/image/skill_banner.png";
import faq from "../../assets/image/vv_faq.png";

import SkillCourse from "../../assets/image/skill_course.png";
import Blog1 from "../../assets/image/projectManagemat.png";
import Blog2 from "../../assets/image/ai.png";
import Blog3 from "../../assets/image/samartHome.png";
import Blog4 from "../../assets/image/blockchain.png";
import feature1 from "../../assets/image/feature1.png";
import feature2 from "../../assets/image/feature2.png";
import feature3 from "../../assets/image/feature3.png";

import "./skill.css";
import { Accordion, Container } from "react-bootstrap";
import Slider from "react-slick";
const SkillSprint = () => {
  useEffect(() => {
    document.title = "NextGen 5.0 - Your Gateway to Executive Excellence";
  }, []);
  const questions = [
    {
      title: "Executive-Centric Learning",
      content:
        "Tailored for professionals looking to make high-impact career moves.",
    },
    {
      title: "Industry-Ready Certification",
      content: "Showcase your expertise with globally recognized credentials.",
    },
    {
      title: "Flexible Learning Options",
      content: "Online and offline modes to suit your schedule.",
    },
    {
      title: "Real-World Projects",
      content:
        "Work on case studies and projects that mimic live corporate challenges.",
    },
    {
      title: "Mega Placement Drives",
      content: "Exclusive access to job opportunities in top global companies.",
    },
  ];
  const recommendSec = {
    heading: "Exclusive Projects to Boost Your Career",
    subHeading: "",

    items: [
      {
        img: Blog1,
        title: "High-Growth Roles:",
        description: `Access to positions with salaries ranging from ₹12–30 LPA.`,
      },
      {
        img: Blog2,
        title: " Global Opportunities",
        description: `Gain skills and certifications recognized worldwide.`,
      },
      {
        img: Blog3,
        title: "Future-Proof Your Career",
        description: ` Stay ahead with tools and techniques defining tomorrow's industries.`,
      },
    ],
  };
  var settings2 = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: recommendSec.length >= 4 ? 4 : 3,
    slidesToScroll: 1,
    centerMode: true, // Enables center mode
    centerPadding: "0px", // Adds space between slides
    variableWidth: false, // Ensures slides are equal-width
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
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
      <section>
        <div className="hero_banner skill_sprint">
          <div className="containers">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="banner-content">
                  <h1
                    className="title sal-animate"
                    data-sal-delay="100"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                  >
                    Your Gateway to Executive Excellence
                  </h1>
                  <p
                    data-sal-delay="200"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    className="sal-animate"
                  >
                    Next Batch Begins Soon - Enroll Today! Join a Thriving
                    Network of Global Tech Leaders
                  </p>

                  <div
                    className="banner-btn sal-animate"
                    data-sal-delay="400"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                  >
                    <a className="btn_white mt-5 " href="#">
                      Request Callback <i class="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="banner-thumbnail">
                  <div
                    className="thumbnail sal-animate"
                    data-sal-delay="500"
                    data-sal="slide-left"
                    data-sal-duration="1000"
                  >
                    {/* <img src={HomeBanner} alt="Banner" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      <section className="about_vvgrad p-100">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about_img">
                <img src={aboutTalent} alt="" />

                <div className="shape">
                  <img src={shape1} alt="" />
                </div>
                <div className="vector">
                  <img src={shape2} alt="" />
                </div>
                {/* <div className="video_play">
                  <img src={VideoImg} alt="" />
                  <i class="fas fa-play"></i>
                </div> */}
              </div>
            </div>
            <div className="col-md-6">
              <div className="content">
                <div className="pre_heading">About Us</div>
                <h1 className="main_heading mt-3 mb-3">
                  {" "}
                  About
                  <span className="secondary_text"> Skill Sprint 5.0</span>
                </h1>
                <p className="main_text">
                  Skill Sprint 5.0 is not just a course—it's a transformational
                  journey for working professionals, senior executives, and
                  mid-career experts eager to elevate their skills and make a
                  significant career leap. Whether you're aiming to transition
                  into high-demand roles in Cybersecurity, Prominent
                  Engineering, Business Analysis, or Software Development, Skill
                  Sprint 5.0 equips you with cutting-edge skills and a
                  competitive edge.
                </p>

                <p className="main_text mt-3">
                  Designed for Industry 5.0: Prepare to lead the charge in the
                  era of human-machine collaboration with tools and technologies
                  shaping tomorrow's workplaces.
                </p>

                <button className="btn_primary mt-3">
                  Join Now <i class="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="skill_course p-100">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="content">
                <div className="pre_heading">Course Overview</div>
                <h1 className="main_heading mt-3 mb-5">
                  What Makes <br />
                  <span className="secondary_text">
                    {" "}
                    Skill Sprint 5.0 the Best?
                  </span>
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
                <img src={SkillCourse} alt="" />

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
      <section className="skill_program p-100">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about_img">
                <img src={skillProgram} alt="" />

                <div className="shape">
                  <img src={shape1} alt="" />
                </div>
                <div className="vector">
                  <img src={shape2} alt="" />
                </div>
                {/* <div className="video_play">
                  <img src={VideoImg} alt="" />
                  <i class="fas fa-play"></i>
                </div> */}
              </div>
            </div>
            <div className="col-md-6">
              <div className="content">
                <h1 className="main_heading mt-3 mb-3 text_white">
                  {" "}
                  Program
                  <span className="secondary_text"> Highlights</span>
                </h1>
                <div className="second_heading   text_white">
                  1. Advanced Career Tracks
                </div>
                <p className="main_text text_white mt-3 mb-3">
                  Choose from six premium tracks designed to align with industry
                  demands:
                </p>

                <ul className="mb-3">
                  <p className="skill_program_heaiding mb-2">
                    Cybersecurity Specialist
                  </p>
                  <li>
                    <span className="secondary_text">Key Topics:</span> <br />
                    Cyber Threat Detection, Risk Mitigation, Ethical Hacking.
                  </li>
                  <li>
                    <span className="secondary_text">Project:</span> <br />
                    Design a security framework for multi-tiered enterprises.
                  </li>
                </ul>

                <ul className="mb-3">
                  <p className="skill_program_heaiding mb-2">
                    Prominent Engineer (Industry 5.0)
                  </p>
                  <li>
                    <span className="secondary_text">Key Topics:</span> <br />
                    IoT, Robotics, Blockchain, AR/VR, Edge Computing.
                  </li>
                  <li>
                    <span className="secondary_text">Project:</span> <br />
                    Develop an integrated automation solution for smart
                    manufacturing.
                  </li>
                </ul>
                <ul className="mb-3">
                  <p className="skill_program_heaiding mb-2">
                    Prominent Engineer (Industry 5.0)
                  </p>
                  <li>
                    <span className="secondary_text">Key Topics:</span> <br />
                    IoT, Robotics, Blockchain, AR/VR, Edge Computing.
                  </li>
                  <li>
                    <span className="secondary_text">Project:</span> <br />
                    Develop an integrated automation solution for smart
                    manufacturing.
                  </li>
                </ul>
                <ul className="mb-3">
                  <p className="skill_program_heaiding mb-2">
                    Business Analyst
                  </p>
                  <li>
                    <span className="secondary_text">Key Topics:</span> <br />
                    Advanced Data Modeling, Process Optimization, Agile
                    Methodologies.
                  </li>
                  <li>
                    <span className="secondary_text">Project:</span> <br />
                    Create business insights dashboards for enterprise-level
                    decision-making.
                  </li>
                </ul>
                <ul className="mb-3">
                  <p className="skill_program_heaiding mb-2">
                    Software Developer (SDE){" "}
                  </p>
                  <li>
                    <span className="secondary_text">Key Topics:</span> <br />
                    React.js, Node.js, Spring Boot, AWS.
                  </li>
                  <li>
                    <span className="secondary_text">Project:</span> <br />
                    Build a full-stack scalable web application.
                  </li>
                </ul>
                <ul className="mb-3">
                  <p className="skill_program_heaiding mb-2">
                    Data Scientist & AI/ML Expert
                  </p>
                  <li>
                    <span className="secondary_text">Key Topics:</span> <br />
                    Predictive Analytics, TensorFlow, Natural Language
                    Processing (NLP).
                  </li>
                  <li>
                    <span className="secondary_text">Project:</span> <br />
                    Real-time AI-based customer sentiment analysis.
                  </li>
                </ul>
                <ul className="mb-3">
                  <p className="skill_program_heaiding mb-2">
                    DevOps Specialist
                  </p>
                  <li>
                    <span className="secondary_text">Key Topics:</span> <br />
                    Kubernetes, Docker, CI/CD Pipelines, Azure.
                  </li>
                  <li>
                    <span className="secondary_text">Project:</span> <br />
                    Automate a cloud infrastructure deployment for a SaaS
                    platform.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="skill_works p-100">
        <div className="container">
          <div className="row justify-content-center mb-3 pb-4">
            <div className="col-md-8 text-center">
              <h1 className="main_heading mt-3 mb-3">
                How it
                <span className="secondary_text"> Works?</span>
              </h1>
              <div className="main_text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="content">
                <h1>01</h1>
                <div className="sub_heading mb-3">
                   Learn the Fundamentals (2 Months)
                </div>
                <div className="main_text mb-3">
                  <span className="secondary_text">Core Technologies</span>{" "}
                  <br />
                  Python, SQL, DSA, HTML, CSS.
                </div>
                <div className="main_text">
                  <span className="secondary_text">Framework Building</span>{" "}
                  <br />
                  Build strong basics for advanced career tracks.
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="content">
                <h1>02</h1>
                <div className="sub_heading mb-3">
                  Specialize in Your Job Track (4 Months)
                </div>
                <div className="main_text mb-3">
                  Choose your domain and engage in targeted learning.
                </div>
                <div className="main_text">
                  Work on industry-level projects that mirror real-world
                  scenarios.
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="content">
                <h1>03</h1>
                <div className="sub_heading mb-3">
                  Placement Assistance & Networking (Post-Course) by Nxt PrepX
                  and Hire X
                </div>
                <div className="main_text mb-3">
                  Prepare for executive roles with mock panels and AI-driven
                  interview simulations.
                </div>
                <div className="main_text">
                  Get direct access to top companies during placement drives.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className={`p-100 recommended skill_opportunities`}>
        <Container className="">
          <div className="row justify-content-center mb-3 pb-4">
            <div className="col-md-10 text-center">
              <h3 className="pre_heading mx-auto">Opportunities</h3>
              <h1 className="main_heading mt-3 mb-3">
                Career
                <span className="secondary_text"> Outcomes</span>
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
      <div className="skill_features p-100">
        <div className="container">
          <div className="row justify-content-center mb-3 pb-4">
            <div className="col-md-8 text-center">
              <h1 className="main_heading mt-3 mb-3">
                Additional
                <span className="secondary_text"> Features</span>
              </h1>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="content">
                <img src={feature3} alt="" />
                <div className="sub_heading mb-3">Refer & Earn Program</div>
                <div className="main_text mb-3">
                  Invite colleagues and earn rewards when they enroll.
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="content">
                <img src={feature2} alt="" />

                <div className="sub_heading mb-3">
                  Lifetime Access to Learning Materials
                </div>
                <div className="main_text mb-3">
                  Stay updated with exclusive content
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="content">
                <img src={feature1} alt="" />

                <div className="sub_heading mb-3">Executive Alumni Network</div>
                <div className="main_text mb-3">
                  Access insights and mentorship from seasoned professionals
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-5   ">
            <div className="col-md-8 ">
              <div className="text-center d-flex align_items-center justify-content-center ">
                <a className="btn_primary me-3" href="#">
                  Request Callback <i class="fas fa-arrow-right"></i>
                </a>
                <a className="btn_border " href="#">
                  Request Callback <i class="fas fa-arrow-right"></i>
                </a>
              </div>
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
                      <b>What is the duration of the program?</b> The course
                      spans 6 months, with flexible schedules to accommodate
                      professionals.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Who can join this program?</b> Open to mid-level
                      professionals, career shifters, and senior executives
                      across industries.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>What certifications are provided?</b> Participants earn
                      the Industry Company-Ready Certification (CRC), endorsed
                      by industry leaders..
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>How does placement assistance work?</b> Comprehensive
                      support includes AI mock interviews, resume reviews, and
                      placement drives.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Is technical knowledge required?</b> Foundational
                      modules cover the basics, making it accessible even for
                      non-technical executives.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="get_touch p-100">
        <div className="container">
          <div className="content">
            <div className="main_heading mb-3 text_white">
              Join the Revolution with Skill Sprint 5.0!
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

export default SkillSprint;
