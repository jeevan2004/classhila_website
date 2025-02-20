import React from "react";
import { Link } from "react-router-dom";
import blank_image from "../../assets/image/blank_image.png";
import "./article.css";
const Article = ({ data }) => {
  console.log(data, "sdata");
  return (
    <div className="article_card">
      <div className="card_image">
        <img src={data?.image} />
      </div>
      <div className="card_content">
        <h5>{data?.heading}</h5>
        <p>{data?.content}</p>
        <Link to={data?.id}>{"Read More >"}</Link>
      </div>
    </div>
  );
};

export default Article;
