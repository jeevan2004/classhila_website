import React, { useEffect, useState } from "react";
import HomeBanner from "../../assets/image/talenthero.png";
import "./TalentHub.css";
import aboutTalent from "../../assets/image/aboutTalent.png";
import shape1 from "../../assets/image/shape/blue.png";
import shape2 from "../../assets/image/shape/Vector.png";
import VideoImg from "../../assets/image/vv_video.png";
import overView from "../../assets/image/overView.png";
import Eligibility from "../../assets/image/Eligibility.png";
import faq from "../../assets/image/vv_faq.png";
import hiring from "../../assets/image/hiring.png";
import placement from "../../assets/image/placement.png";
import expert from "../../assets/image/expert.png";
import mask from "../../assets/image/vv_mask.png";
import skills from "../../assets/image/skills.png";
import choose from "../../assets/image/vv_choose.png";
import { Accordion, Col, Container, Nav, Row, Tab } from "react-bootstrap";
import Slider from "react-slick";
import Blog1 from "../../assets/image/projectManagemat.png";
import Blog2 from "../../assets/image/ai.png";
import Blog3 from "../../assets/image/samartHome.png";
import Blog4 from "../../assets/image/blockchain.png";
import class1 from "../../assets/image/class1.png";
import class2 from "../../assets/image/class2.png";
import instructions_img from "../../assets/image/instructions_img.png";
import support_img from "../../assets/image/support_img.png";
import potential1 from "../../assets/image/potential1.png";
import potential2 from "../../assets/image/potential2.png";
import opportunities1 from "../../assets/image/opportunities1.png";
import opportunities2 from "../../assets/image/opportunities2.png";
import opportunities3 from "../../assets/image/opportunities3.png";
import step1 from "../../assets/image/step1.png";
import certification1 from "../../assets/image/certification1.png";
import el1 from "../../assets/image/el1.png";
import el2 from "../../assets/image/el2.png";
import owl1 from "../../assets/image/owl1.png";
import owl2 from "../../assets/image/owl2.png";

const TalentHub = () => {
  useEffect(() => {
    document.title = "NextGen 5.0 - Transform Your Future";
  }, []);
  const [activeTab, setActiveTab] = useState("tab1");
  const handleSelect = (key) => setActiveTab(key);

  var settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    variableWidth: false,
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
  const data = [1, 2, 3, 4];
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
      {" "}
      <section>
        <div
          className="hero_banner talentHub"
          style={{ backgroundImage: `url(${HomeBanner})` }}
        >
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
                    Transform Your Future
                  </h1>
                  <p
                    data-sal-delay="200"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    className="sal-animate"
                  >
                    with Our Proven Program for Aspiring Data Science AI and  ML
                    AND Software Developers!
                  </p>

                  <div
                    className="banner-btn sal-animate"
                    data-sal-delay="400"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                  >
                    <a className="btn_primary mt-5 " href="#">
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
                <div className="pre_heading">About the Talent Hub</div>
                <h1 className="main_heading mt-3 mb-3">
                  {" "}
                  Empowering Final-Year Students and Graduates{" "}
                  <span className="secondary_text">
                    to Launch Their Careers
                  </span>
                </h1>
                <p className="main_text">
                  The Talent Hub5.0  is meticulously crafted for final-year
                  degree students and recent graduates who are ready to embark
                  on their professional journeys in the competitive IT industry.
                  In today's fast-paced job market, having a degree is just the
                  starting point; employers seek candidates who possess not only
                  theoretical knowledge but also practical skills and hands-on
                  experience.
                </p>

                <p className="main_text mt-3">
                  Our program bridges this critical gap, offering you a robust
                  framework to transform your academic background into
                  actionable expertise. Through a blend of rigorous coursework,
                  real-world projects, and personalised mentorship, we equip you
                  with the essential tools needed to thrive in your chosen
                  career path.
                </p>

                <button className="btn_primary mt-3">
                  Join Now <i class="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about_vvgrad course_overview p-100">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="content">
                <div className="pre_heading">Course Overview</div>
                <h1 className="main_heading mt-3 mb-3">
                  {" "}
                  Course Duration
                  <span className="secondary_text">6-8 Months</span>
                </h1>
                <p className="main_text">
                  The duration of the course varies based on your chosen job
                  track, ensuring a personalised learning experience tailored to
                  your career goals. Whether you aspire to be a Full Stack
                  Developer, Data Analyst, QA Engineer, or Software Developer,
                  our program provides the comprehensive mastery you need.
                </p>

                <button className="btn_primary mt-3">
                  Join Now <i class="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about_img mt-md-0 mt-5">
                <img src={overView} alt="" />

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
          </div>
        </div>
      </section>
      <section className="eligibility p-100">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about_img">
                <img src={Eligibility} alt="" />

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
                <div className="pre_heading">Eligibility</div>
                <h1 className="main_heading mt-3 mb-3">
                  {" "}
                  Open to
                  <span className="secondary_text">All Graduates</span>
                </h1>
                <p className="main_text">
                  We welcome graduates from diverse academic backgrounds,
                  including:
                </p>
                <ul>
                  <li>B.Tech (All Branches)</li>
                  <li>B.Sc (Bachelor of Science)</li>
                  <li>B.Com (Bachelor of Commerce)</li>
                  <li>BBA (Bachelor of Business Administration)</li>
                </ul>
                <p className="main_text">
                  With no CGPA cut-off, our program is accessible to anyone
                  passionate about advancing their career in IT.
                </p>

                <button className="btn_primary mt-3">
                  Join Now <i class="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about_vvgrad instructions_sec p-100">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="content">
                <div className="pre_heading">Instructions</div>
                <h1 className="main_heading mt-3 mb-3">
                  {" "}
                  Mode of Instruction
                  <span className="secondary_text">
                    Flexible Learning Options
                  </span>
                </h1>
                <p className="main_text">
                  Choose between online or offline learning formats that suit
                  your schedule. Each day consists of:
                </p>
                <ul className="icon_with mt-4">
                  <li className="d-flex">
                    <span>
                      <img src={class1} alt="class1" />
                    </span>
                    <span>
                      <h5>4 Hours of Classes</h5>
                      <p>Focused lectures and interactive discussions.</p>
                    </span>
                  </li>
                  <li className="d-flex">
                    <span>
                      <img src={class2} alt="class1" />
                    </span>
                    <span>
                      <h5>4 Hours of Lab Work</h5>
                      <p>
                        Hands-on practice to apply your learning and develop
                        real-world skills.
                      </p>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about_img">
                <img src={instructions_img} alt="" />

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
          </div>
        </div>
      </section>
      <section className="support p-100">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about_img">
                <img src={support_img} alt="" />

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
                <div className="pre_heading">Support</div>
                <h1 className="main_heading mt-3 mb-3">
                  {" "}
                  Dedicated Support:
                  <br />{" "}
                  <span className="secondary_text">Guidance at Every Step</span>
                </h1>

                <ul className="tab_sec">
                  <li>
                    <h5>Dedicated Success Coaches</h5>
                    <p>
                      Receive one-on-one guidance throughout the program, with
                      personalised support to help you stay on track.
                    </p>
                  </li>
                  <li>
                    <h5>Live Sessions with Course Mentors</h5>
                    <p>
                      Engage in interactive learning sessions with industry
                      experts to master complex topics.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about_vvgrad potential p-100">
        <div className="container">
          <div className="content mx-auto">
            <div className="pre_heading mx-auto">Potential</div>
            <h1 className="main_heading mt-3 mb-3 text-center">
              {" "}
              Unlock Your Potential with the
              <br />{" "}
              <span className="secondary_text">
                All-New Talent Hub 5.0 Program!
              </span>
            </h1>
          </div>
          <div className="row g-5 pt-5">
            <div className="col-md-6">
              <div class="card">
                <img
                  class="card-img-top"
                  src={potential1}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Comprehensive Learning Experience</h5>
                  <h6>Live & Offline Sessions (Mon-Fri)</h6>
                  <p class="card-text">
                    Participate in interactive sessions where you’ll learn best
                    practices in coding, receive essential interview tips, and
                    interact with industry experts.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div class="card">
                <img
                  class="card-img-top"
                  src={potential2}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">
                    Personalized Guidance Every Step of the Way
                  </h5>
                  <h6>Dedicated Success Coach</h6>
                  <p class="card-text">
                    Individualised support to navigate the program.
                  </p>
                  <h6>Placement Success Manager</h6>
                  <p class="card-text">
                    Personalised feedback on your interview skills and
                    preparation for job opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about_vvgrad opportunities p-100">
        <div className="container">
          <div className="content mx-auto">
            <div className="pre_heading mx-auto">Opportunities</div>
            <h1 className="main_heading mt-3 mb-3 text-center">
              {" "}
              Placement
              <span className="secondary_text">Opportunities</span>
            </h1>
          </div>
          <div className="row pt-5">
            <div className="col-md-4 mb-4">
              <div class="card">
                <img
                  class="card-img-top"
                  src={opportunities1}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Mega Offline Placement Drives</h5>
                  <p class="card-text">
                    Connect with top employers through placement drives held
                    every three months.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div class="card">
                <img
                  class="card-img-top"
                  src={opportunities2}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">AI-Powered Mock Interviews</h5>
                  <p class="card-text">
                    Practice your interview skills and receive tailored feedback
                    using advanced AI-driven simulations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div class="card">
                <img
                  class="card-img-top"
                  src={opportunities3}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Masterclasses by Industry Experts</h5>
                  <p class="card-text">
                    Stay updated with the latest trends through exclusive
                    expert-led masterclasses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="breakdown course  p-100 ">
        <div className="container">
          <div className="row justify-content-center mb-3 pb-4">
            <div className="col-md-6 text-center">
              <h3 className="pre_heading mx-auto">Course</h3>
              <h1 className="main_heading mt-3 mb-3">
                Course Structure and
                <span className="secondary_text"> Job Tracks</span>
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
                    <h4>Step 1</h4>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab2">
                    {" "}
                    <h4>Step 2</h4>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab3">
                    {" "}
                    <h4>Step 3</h4>
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
                          Fundamentals <br /> (Duration: 2 Months)
                        </h4>
                        <div className="inner_content">
                          <h5
                            className="main_text mb-3"
                            style={{
                              color: "rgba(242, 99, 34, 1)",
                              fontWeight: "600",
                            }}
                          >
                            Daily Classes:
                          </h5>
                          <ul className="ps-4">
                            <li>4 Hours Classes + 4 Hours Labs</li>
                          </ul>{" "}
                          <h4
                            className="main_text mb-1 mt-3"
                            style={{
                              color: "rgba(242, 99, 34, 1)",
                              fontWeight: "600",
                            }}
                          >
                            Courses Include:
                          </h4>
                          <ul className="ps-4">
                            <li>HTML, CSS, Python, SQL, DSA</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-6 text-center">
                        <div className="choose_img">
                          <img src={step1} alt="" />

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
                          Fundamentals <br /> (Duration: 2 Months)
                        </h4>
                        <div className="inner_content">
                          <h5
                            className="main_text mb-3"
                            style={{
                              color: "rgba(242, 99, 34, 1)",
                              fontWeight: "600",
                            }}
                          >
                            Daily Classes:
                          </h5>
                          <ul className="ps-4">
                            <li>4 Hours Classes + 4 Hours Labs</li>
                          </ul>{" "}
                          <h4
                            className="main_text mb-1 mt-3"
                            style={{
                              color: "rgba(242, 99, 34, 1)",
                              fontWeight: "600",
                            }}
                          >
                            Courses Include:
                          </h4>
                          <ul className="ps-4">
                            <li>HTML, CSS, Python, SQL, DSA</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-6 text-center">
                        <div className="choose_img">
                          <img src={step1} alt="" />

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
                          Fundamentals <br /> (Duration: 2 Months)
                        </h4>
                        <div className="inner_content">
                          <h5
                            className="main_text mb-3"
                            style={{
                              color: "rgba(242, 99, 34, 1)",
                              fontWeight: "600",
                            }}
                          >
                            Daily Classes:
                          </h5>
                          <ul className="ps-4">
                            <li>4 Hours Classes + 4 Hours Labs</li>
                          </ul>{" "}
                          <h4
                            className="main_text mb-1 mt-3"
                            style={{
                              color: "rgba(242, 99, 34, 1)",
                              fontWeight: "600",
                            }}
                          >
                            Courses Include:
                          </h4>
                          <ul className="ps-4">
                            <li>HTML, CSS, Python, SQL, DSA</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-6 text-center">
                        <div className="choose_img">
                          <img src={step1} alt="" />

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
      <div className="choose_us certification  p-100">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center">
              <div className="choose_img">
                <img src={certification1} alt="" />

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
                <div className="pre_heading">Certification</div>
                <h1 className="main_heading mt-3 mb-3">
                  Get Certified and
                  <span className="secondary_text"> Elevate Your Career</span>
                </h1>

                <ul className="choose_us_list mt-5">
                  <li>
                    <img src={hiring} alt="" />
                    <p>
                      <b>Industry Company-Ready Certification (ICRC 5.0 ) </b>{" "}
                      Gain an ICRC after completing projects and passing a
                      pre-placement test. This certification showcases your job
                      readiness with real-world skills.
                    </p>
                  </li>
                  <li>
                    <img src={placement} alt="" />
                    <p>
                      <b>Shareable & Credible</b> Share your certification on
                      LinkedIn, Twitter, WhatsApp, or email. Let potential
                      employers know about your accomplishments.
                    </p>
                  </li>
                  <li>
                    <img src={skills} alt="" />
                    <p>
                      <b>Let Companies Compete for You</b> With your industry
                      CRC, attract high-paying job offers from top companies.
                      India.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="achievers insights_sec ceo p-100">
        <div className="container">
          <div className="row justify-content-center mb-5 ">
            <div className="col-12 col-md-6 text-center">
              <div className="pre_heading mx-auto mb-3 ">Insights</div>
              <div className="main_heading">
                Motivational Insights from
                <span className="secondary_text"> Company Leaders</span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-2 mb-4">
              <div className="achiver_cont ">
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
            <div className="col-md-10  mb-4">
              <Slider {...settings}>
                {data?.map((item) => {
                  return (
                    <>
                      <div className="achiver_box m-0">
                        <div className="author">
                          <div className="author_img">
                            <img
                              src="	https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/academy/apple-ceo.svg"
                              alt=""
                            />
                          </div>
                          <div className="author_content">
                            <h3 className="sub_heading">Satya Nadella</h3>
                            <span className="main_text">Microsoft</span>
                          </div>
                        </div>
                        <p className="main_text mb-3 mt-3">
                          “Skills matter more than degrees, and learning never
                          stops.”
                        </p>
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

            {/* <div className="col-md-5">
              <div className="achiver_box">
                <div className="author">
                  <div className="author_img">
                    <img
                      src="	https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/academy/apple-ceo.svg"
                      alt=""
                    />
                  </div>
                  <div className="author_content">
                    <h3 className="sub_heading">Satya Nadella</h3>
                    <span className="main_text">Microsoft</span>
                  </div>
                </div>
                <p className="main_text mb-3 mt-3">
                  “Skills matter more than degrees, and learning never stops.”
                </p>
                <div className="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <span className="main_text ms-2">48</span>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="achiver_box">
                <div className="author">
                  <div className="author_img">
                    <img
                      src="	https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/academy/apple-ceo.svg"
                      alt=""
                    />
                  </div>
                  <div className="author_content">
                    <h3 className="sub_heading">Rohan S</h3>
                    <span className="main_text">Corporate</span>
                  </div>
                </div>
                <p className="main_text mt-3 mb-3">
                  “The programs at vvGrad helped me upskill and advance in my
                  career.”
                </p>
                <div className="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <span className="main_text ms-2">48</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="faq talentFAq p-100">
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
                      <b>
                        What is the duration of the vvGrad 5.0 Talent Hub
                        program?
                      </b>{" "}
                      The program spans 6-8 months, depending on the job track
                      you select.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>What qualifications do I need to enroll?</b> The
                      program is open to all graduates from diverse academic
                      backgrounds, with no CGPA cut-off.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>
                        What are the job opportunities after completing this
                        program?
                      </b>{" "}
                      Graduates can expect roles in top companies, with salaries
                      ranging from ₹3 LPA to ₹12 LPA based on the job track.
                    </p>
                  </li>

                  <li>
                    <p>
                      <b>
                        What are the job opportunities after completing this
                        program?
                      </b>{" "}
                      Graduates can expect roles in top companies, with salaries
                      ranging from ₹3 LPA to ₹12 LPA based on the job track.
                    </p>
                  </li>

                  <li>
                    <p>
                      <b>
                        Graduates can expect roles in top companies, with
                        salaries ranging from ₹3 LPA to ₹12 LPA based on the job
                        track.
                      </b>{" "}
                      Graduates can expect roles in top companies, with salaries
                      ranging from ₹3 LPA to ₹12 LPA based on the job track.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Is there a certification upon completion?</b>Is there a
                      certification upon completion?
                    </p>
                  </li>

                  <li>
                    <p>
                      <b>Is there a certification upon completion?</b>Is there a
                      certification upon completion?
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="get_touch talentGetTouch p-100">
        <div className="shape1">
          <img src={owl1} alt="" />
        </div>
        <div className="shape2">
          <img src={owl2} alt="" />
        </div>
        <div className="shape3">
          <img src={el1} alt="" />
        </div>
        <div className="shape4">
          <img src={el2} alt="" />
        </div>
        <div className="container">
          <div className="content">
            <div className="main_heading mb-3 text_white">
              Join the Talent Hub 5.0 Program Today!
            </div>
            <div className="main_text mb-4 text_white">
              Next Batch Starts on Nov 5th - Book Your FREE Demo!
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

export default TalentHub;
