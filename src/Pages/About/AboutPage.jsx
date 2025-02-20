// import "bootstrap-icons/font/bootstrap-icons.css";

import BestCoaching from "../../Components/BestCoaching/BestCoaching";
import Plan from "../../Components/Plan/Plan";
import WithUs from "../../Components/WithUs/WithUs";
import "./about.css";
const AboutPage = () => {
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

  return (
    <>
      <div className="about_us">
        <div className="about_top">
          <div className="container">
            <h2 className="second_heading">About Us</h2>
            <span>Home - About Us</span>

            <p>
              Classhila is an innovative educational platform designed to
              empower students in India with affordable and inclusive
              preparation for competitive exams. We provide personalized
              learning paths, expert guidance, and smart resources to help
              students reach their full potential. With a commitment to
              accessibility and quality, Classhila strives to bridge the gap
              between students and their career aspirations by offering tailored
              support and comprehensive exam coverage.
            </p>
          </div>
        </div>
        <WithUs />
        <div className="vision text-center p-70">
          <div className="container">
            <div className="mb-5">
              <h4 className="second_heading">Vision</h4>
              <p>
                Empowering every student with accessible, inclusive, and
                transformative education for a brighter future.
              </p>
            </div>
            <div className="">
              <h4 className="second_heading">Mission</h4>
              <p>
                To make quality education affordable and inclusive, fostering
                academic and personal and academic growth for all.
              </p>
            </div>
          </div>
        </div>
        <div className="total_counter">
          <div className="container">
            <div className="counter_inner">
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
      </div>
    </>
  );
};

export default AboutPage;
