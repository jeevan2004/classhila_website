// import "bootstrap-icons/font/bootstrap-icons.css";

import BestCoaching from "../../Components/BestCoaching/BestCoaching";
import Plan from "../../Components/Plan/Plan";
import WithUs from "../../Components/WithUs/WithUs";
import star_grey from "../../assets/image/icon/star_grey.png";
import star_orange from "../../assets/image/icon/star_orange.png";
import ellipse_yellow from "../../assets/image/icon/ellipse_yellow.png";
import ellipse_orange from "../../assets/image/icon/ellipse_orange.png";
import "./about.css";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();
  const categories = ["All", "SSC", "CBSC", "Groups", "RRB", "Civil Services"];

  const courseCards = [
    {
      subject: "Maths",
      title: "How To Solve This Problem?",
      students: 150,
      lessons: 14,
      mentor: "Maths",
      mentorRole: "Mentor",
    },
    {
      subject: "Science",
      title: "How To Understand Women?",
      students: 250,
      lessons: 8,
      mentor: "Archana Sabba",
      mentorRole: "Mentor",
    },
    {
      subject: "Subject",
      title: "I Dont Know What To Say",
      students: 100,
      lessons: 12,
      mentor: "Surender Reddy",
      mentorRole: "Mentor",
    },
    {
      subject: "Maths",
      title: "How To Solve This Problem?",
      students: 150,
      lessons: 14,
      mentor: "Maths",
      mentorRole: "Mentor",
    },
    {
      subject: "Maths",
      title: "How To Solve This Problem?",
      students: 150,
      lessons: 14,
      mentor: "Maths",
      mentorRole: "Mentor",
    },
    {
      subject: "Maths",
      title: "How To Solve This Problem?",
      students: 150,
      lessons: 14,
      mentor: "Maths",
      mentorRole: "Mentor",
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
      <div className="about_us">
        <div className="about_top">
          <div className="container">
            <h2 className="second_heading">About Us</h2>
            {/* <span>Home - About Us</span> */}

            <h6>
              Classhila is an innovative educational platform designed to
              empower students in India with affordable and inclusive
              preparation for competitive exams. We provide personalized
              learning paths, expert guidance, and smart resources to help
              students reach their full potential. With a commitment to
              accessibility and quality, Classhila strives to bridge the gap
              between students and their career aspirations by offering tailored
              support and comprehensive exam coverage.
            </h6>
          </div>
        </div>
        <WithUs btn={false} />
        <div className="vision text-center p-70">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="mb-5">
                  <h4 className="second_heading">Vision</h4>
                  <p>
                  To create a world where every student, regardless of their background, is empowered with a well-rounded education that nurtures resilience, critical thinking, and a passion for lifelong learning, equipping them to confidently navigate and succeed in the complexities of the modern world.

                  </p>
                </div>
                <div className="">
                  <h4 className="second_heading">Mission</h4>
                  <p>
                  Our mission is to break down barriers to quality education and create a supportive, inclusive learning environment ensuring that every student, including those with special needs, reach their full potential. We are dedicated to providing a transformative educational experience by leveraging innovative teaching methods and affordable access to expert guidance that fosters academic excellence, personal growth, and social development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="total_counter">
          <div className="container">
            <div className="counter_inner">
              <div className="row" style={{ padding: "0 90px" }}>
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
        </div>
        <div className="discover">
          <div
            className="container-fluid"
            style={{ backgroundColor: "#FFF5F0", padding: "80px 0" }}
          >
            <div className="row justify-content-center text-center">
              <div className="col-12 col-lg-8">
                <div className="mb-2">
                  <span>DISCOVER NEW SKILLS</span>
                </div>

                <h2
                  style={{
                    color: "#FF6B00",
                    fontSize: "45px",
                    fontWeight: "700",
                    marginBottom: "1.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  Join Our Community Of
                  <br />
                  Learners!
                </h2>

                <div className="mb-4">
                  <p>
                    Connect with like-minded individuals and engage in
                    collaborative learning.
                    <br />
                    Sign up now to be part of our vibrant community!
                  </p>
                </div>

                <button
                  className="btn_secondary mx-auto"
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#9e8466")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "#8B7355")
                  }
                  onClick={() => navigate("/register")}
                >
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <BestCoaching />
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
                    Explore flexible pricing options tailored to fit your
                    learning needs. Choose from our affordable plans
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
            <div className="shape">
              <img src={star_grey} alt="" className="shape1" />
              <img src={star_orange} alt="" className="shape2" />
              <img src={ellipse_orange} alt="" className="shape3" />
              <img src={ellipse_yellow} alt="" className="shape4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
