import React from "react";
import "./testimonialCard.css";

const TestimonialCard = ({ item }) => {
  return (
    <>
      <div class="testimonial__items">
        <div class="testimonial-grid">
          <div class="thumbnail">
            <img
              src="https://edublink.html.devsblink.com/assets/images/testimonial/testimonial-01.png"
              alt="Testimonial"
            />
            <span class="qoute-icon">
              <i class="fas fa-quote-right"></i>
            </span>
          </div>
          <div class="content">
            <p>
              {item?.content ||
                " Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation."}
            </p>
            <div class="rating-icon">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <h5 class="title">{item?.name || "Ray Sanchez"}</h5>
            {/* <span class="subtitle">Student</span> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
