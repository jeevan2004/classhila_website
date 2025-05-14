import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blank_image from "../../assets/image/blank_image.png";
import "./article.css";
import Skeleton from "react-loading-skeleton";

const Article = ({ data }) => {
  console.log(data, "sdata");
  const [imageLoaded, setImageLoaded] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setContentLoaded(true);
    }, 800); // Adjust this delay as needed
    return () => clearTimeout(timer);
  }, []);
  const getPreviewText = (text, wordLimit = 20) => {
    if (!text) return "";

    const words = text.trim().split(/\s+/);
    if (words.length <= wordLimit) return text;

    return words.slice(0, wordLimit).join(" ") + " ...";
  };

  return (
    <div className="article_card">
      <div className="card_image">
        {!imageLoaded && <Skeleton height={200} />}

        <img
          src={data?.image}
          style={{ display: imageLoaded ? "block" : "none" }}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <div className="card_content">
        <div className="mt-3">
          {contentLoaded ? (
            <h5>{data?.title}</h5>
          ) : (
            <Skeleton width={`80%`} height={20} />
          )}
        </div>

        {/* Content/Description */}
        <div>
          {contentLoaded ? (
            <p>{getPreviewText(data?.content)}</p>
          ) : (
            <>
              <Skeleton count={2} />
            </>
          )}
        </div>

        <div className="mt-3">
          {contentLoaded ? (
            <Link to={data?._id}>{"Read More >"}</Link>
          ) : (
            <Skeleton width={`80%`} height={20} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Article;
