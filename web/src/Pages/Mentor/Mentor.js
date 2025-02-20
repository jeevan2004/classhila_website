import React from "react";
import "./mentor.css";
import OurMentor from "../../Components/OurMentor/OurMentor";
import FAQPage from "../../Components/faq/FAQPage";

const Mentor = () => {
  return (
    <>
      <div className="mentor">
        <div className="container">
          <h2 className="second_heading">Our Faculty & Mentors.</h2>
          <span>Home - Our Faculty & Mentors.</span>
        </div>
      </div>
      <OurMentor />
      <FAQPage />
    </>
  );
};

export default Mentor;
