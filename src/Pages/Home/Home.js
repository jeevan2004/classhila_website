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
import SupportPage from "../../Components/SupportChat/SupportChat";
import ImageBg from '../../assets/image/Image-Bg.jpg'
import PM from '../../assets/image/pm.png'
import AiImage from '../../assets/image/AiImage.png'
import OurWorkShop from "../../Components/OurWorkShop/OurWorkShop";
import homeimage2 from "../../assets/image/robot2.jpeg";
import otbi from "../../assets/image/otbi.jpeg";
import otbi1 from "../../assets/image/otbi1.png";

import bggrace from '../../assets/image/bggrace.png'

import Achievements from "../../Components/Achievements/Achievements";
import { api } from "../../api/api";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [blogData, setBlogData] = useState([]);
 
 const getBlogData = async () => {
    setIsLoading(true);
    let res = await api(
      `api/v1/blog`,
      "",
      "get",
      "",
      ""
    );

    if (res?.success) {
      console.log(res, 'blog');
      
      setBlogData(res?.data || []);
     // setTotalPages(res?.totalPages || 1); // ensure API returns totalPages
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getBlogData();
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


{/* <section className="manbanner-section position-relative">
      <div className="manbanner-image-wrapper">
        <img src={bannerImage} alt="AI Club Banner" className="img-fluid w-100" />
        <div className="manbanner-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center text-center text-white">
          <div className="manbanner-content px-4">
            <h1 className="manbanner-title display-4 fw-bold mb-3">
              World's First <span className="text-warning">AI Online Club</span>
            </h1>
            <h2 className="manbanner-subtitle h4">Launched by <strong>ClassHila</strong></h2>
            <p className="manbanner-description mt-3">Empowering young minds with the future of technology!</p>
          </div>
        </div>
      </div>
    </section> */}




<section className="hero-section d-flex align-items-center justify-content-center" style={{
  backgroundImage: `url(${ImageBg})`
}}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
        <h1 className="hero-title">World's First AI Online Club launched by Classhila </h1>
      <p className="hero-subtitle">Classhila creates history by launching the world's first Online AI Club, setting a global precedent in AI education.</p> 
      <a href="#join-now" className="btn btn-primary mx-2 btn-lg cta-button">Read More</a>
      {/* <p className="hero-subtitle">Invest in your Career</p>
      {/* <a href="#join-now" className="btn btn-primary mx-2 btn-lg cta-button">Learn new skills</a>
      <a href="#join-now" className="btn btn-primary mx-2 btn-lg cta-button">Get Certified</a>
      <a href="#join-now" className="btn btn-primary mx-2 btn-lg cta-button">Best courses offered </a> */}
        </div>
        <div className="col-md-6">
          <img src={AiImage} />
        </div>
      </div>


     
    </div>
  </section>
  <section className="hero-section hero_section2 d-flex align-items-center justify-content-center pb-5"    style={{
  backgroundImage: `url(${bggrace})`
}}>
    <div className="container">
      <div className="row align-items-center">
      <div className="col-md-6">
          <img src={homeimage2} />
        </div>
        <div className="col-md-6">
        <h1 className="hero-title">World's First </h1>
      <p className="hero-subtitle">Introducing Classhila’s World’s First Online AI Club — a revolutionary initiative redefining the future of AI education and collaboration. Powered by Classhila, a trailblazing EdTech platform, this global-first club serves as a vibrant community where AI enthusiasts, learners, and innovators converge to explore, create, and lead in the evolving world of artificial intelligence.

</p>
      {/* <p className="hero-subtitle">Invest in your Career</p> */}
      <a href="#join-now" className="btn btn-primary mx-2 btn-lg cta-button">Learn new skills</a>
      <a href="#join-now" className="btn btn-primary mx-2 btn-lg cta-button">Get Certified</a>
      <a href="#join-now" className="btn btn-primary mx-2 btn-lg cta-button">Best courses offered </a>
        </div>
       
      </div>


     
    </div>
  </section>
  
  <section className="hero-section  hero_section d-flex align-items-center justify-content-center pb-5">
    <div className="container">
      <div className="row align-items-center">
      <div className="col-md-6">
        <div className="image_fram">
          <img src={otbi1} />
          </div>
        </div>
        <div className="col-md-6">
        <h1 className="hero-title">Historic First</h1>
        <h4>Classhila is India's first EdTech Company backed by Osmania University's Technology Business Incubation</h4>

      <p className="hero-subtitle">Classhila holds the distinguished honor of being India's first EdTech Company to receive backing from Osmania Technology Business Incubation (OTBI) of India's Premier university-Osmania University. This landmark partnership validates Classhila's cutting-edge approach, combining Osmania University's research legacy with Classhila's scalable, tech-driven education model- bridging academic and industry to build future-ready learning solutions.</p>
      <a href="#join-now" className="btn btn-primary mx-2 btn-lg cta-button">Affordable & Accessible Education</a>
      <a href="#join-now" className="btn btn-primary mx-2 btn-lg cta-button"> Cross Cultural Learning</a>


           
        </div>
       
      </div>


     
    </div>
  </section>
  <Achievements />
  <OurWorkShop />
 
 
      <HomeBanner />
      

      <WithUs btn={true} />
      <OurGoal />
      {/* <OurMentor viewMore={false} viewAll={true} /> */}

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
                  <div className="col-md-6 col-lg-4 mb-4">
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
                  Latest Articles
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
                <img className="w-100" src={PM} />
              </div>
              <div className="content">
                <h5>PM Schools For Rising India (PM SHRI Scheme)- Transforming India's Education Landscape</h5>
               
                      <p>Approved by the Union Cabinet on 7 September 2022, the centrally sponsored PM SHRI (PM Schools for Rising India) scheme aims to develop over 14,500 exemplar PM SHRI Schools by upgrading existing institutions across Central/State/UT governments and local bodies. With a total outlay of ₹27,360 crore (Central share: ₹18,128 crore) over five years, these schools will demonstrate effective implementation of National Education Policy 2020 and mentor neighboring institutions.  The total cost of the project will be Rs. 27360 crore spread over a period of 5 years which includes a central share of Rs. 18128 crore.

                      </p>
                      <p><b>Key Highlights:</b> <br />
Progress: 12,084 schools selected across 32 States/UTs (including KVS/NVS) through a transparent challenge method (Phases 1-4)  
- Primary: 1,329 | Elementary: 3,340 | Secondary: 2,907 | Senior Secondary: 4,508  </p>


<p><b>Comprehensive Upgrades: </b> <br />
Primary/Elementary: Balvatika facilities, Jadui Pitara, child-friendly furniture, play materials  
Secondary/Senior Secondary: Smart classrooms, STEM labs (Science/ICT/Atal Tinkering), skill labs, innovation councils, sports infrastructure 
Governance: 33 States/UTs including KVS & NVS have signed MoUs with the Education Ministry to implement the PM SHRI scheme.  </p>


<p>Selection of PM SHRI schools is done through Challenge Mode wherein Schools compete to become benchmarks for 21st-century education in India.  
PM SHRI Scheme is being implemented by saturating all the components such as Bala feature and Jadui Pitara, Support at Pre-school Education, Smart Classrooms, Computer Lab/ ICT Lab, Atal Tinkering Lab, Skill Lab, School Innovation Councils, Child Friendly Furniture, Outdoor Play Materials etc. in Primary and Elementary Schools and Furniture, Fully equipped integrated Science Lab/Physics Lab/Chemistry Lab/ Biology Lab, Playground with well-equipped sports facilities etc. for secondary and senior secondary schools.</p>
                      <Link to={"#"}>{"Read More >"}</Link>
                   
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
