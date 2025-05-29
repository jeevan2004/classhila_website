import React from "react";
import mask from "../../assets/image/mask.png";
import blank from "../../assets/image/blank.png";
import star from "../../assets/image/Star.png";
import star_yellow from "../../assets/image/icon/star_yellow.png";
import "./review.css";
import Slider from "react-slick";

const Review = () => {
  const tabSlider = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
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

  const testmonialData = [
    {
      image: blank,
      name: "Priyadarshini Reddy",
      post: "Hyderabad, TS Board",
      content:
        "I was struggling with Geometry and Algebra in my TS 10th class. Classhila's interactive approach made complex problems so simple! The step-by-step explanations and practice tests helped me score 95% in Maths. The teachers understand exactly what the TS Board expects. Thank you Classhila!",
    },
    {
      image: blank,
      name: "Arjun",
      post: "Delhi, CBSE Board",
      content:
        "Classhila's CBSE 10th Maths course is amazing! The way they explain Trigonometry and Statistics made everything click for me. I went from failing in Maths to scoring 92% in my boards. The detailed explanation of the teacher was super helpful, and I could study at my own pace.",
    },
    {
      image: blank,
      name: "Virat",
      post: "Vijayawada, AP Board",
      content:
        "Thanks to Classhila, I conquered my fear of Maths! Their AP 10th class course covers every topic thoroughly. The practice papers were exactly like our board exam. I scored 89% and now I'm confident about taking Maths in 11th. Best decision ever!",
    },
    {
      image: blank,
      name: "Mrinalini Sharma",
      post: "Mumbai, CBSE Board",
      content:
        "The best part about Classhila's CBSE Maths course is how they make learning fun! Real-life examples in Coordinate Geometry and Surface Areas made me actually enjoy Maths. I scored 88% in boards and my parents are so proud. I highly recommend it to all 10th graders.",
    },
    {
      image: blank,
      name: "Lakshmi",
      post: "Warangal, TS Board",
      content:
        "I joined Classhila just 2 months before my TS 10th exams. Their crash course and practice questions were perfect! The teacher knew exactly which topics were important for the TS Board. From 45% in pre-boards to 91% in finals - Classhila made this miracle happen.",
    },
  ];

  return (
    <div className="review p-100">
      <div className="container">
        <div className="review_inner">
          <img src={mask} alt="decorative mask" />
          <div className="review_content">
            <Slider {...tabSlider}>
              {testmonialData.map((item, index) => (
                <div key={index}>
                  <div className="review_content_inner">
                    <div className="author">
                      <img src={item.image || blank} alt={item.name} />
                      <h2>{item.name}</h2>
                      <p>{item.post}</p>
                    </div>
                    <div className="author_content">
                      <img src={star} alt="star" />
                      <p>"{item.content}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className="shape">
        <img src={star_yellow} alt="star shape" className="shape1" />
      </div>
    </div>
  );
};

export default Review;
