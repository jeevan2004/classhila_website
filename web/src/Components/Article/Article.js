import React from "react";
import { Link } from "react-router-dom";
import blank_image from "../../assets/image/blank_image.png";

const Article = () => {
  return (
    <div className="article_card card">
      <div className="card_image">
        <img src={blank_image} />
      </div>
      <div className="card_content">
        <h5>
          Maximizing Your Online Learning Experience: Essential Strategies
        </h5>
        <p>
          Discover strategies to optimize your online courses, from setting a
          study schedule to actively participating in discussions.
        </p>
        <Link to={"#"}>{"Read More >"}</Link>
      </div>
    </div>
  );
};

export default Article;
