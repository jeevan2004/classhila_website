import React from "react";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import blank_image from "../../assets/image/blank_image.png";
import fb from "../../assets/image/facebook.png";
import twitter from "../../assets/image/twitter.png";
import insta from "../../assets/image/instagram.png";
import youtube from "../../assets/image/youtube.png";

import "./blog.css";
import { BlogData } from "./BlogData";

const SingleBlog = () => {
  const { name } = useParams();
  const blog = BlogData.find((item) => item.id === name);
  const LatestArticle = [1, 2, 3, 4, 5];
  return (
    <div className="single_blog pt_150">
      <Container>
        <div className="row justify-content-center text-center">
          <div className="col-12 col-lg-6 mx-auto">
            <h2 className="second_heading ">Single Blog</h2>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-8">
            <div className="card_image">
              <img className="w-100" src={blog?.image} />
            </div>
            <div className="content">
              <h5>{blog?.heading}</h5>
              {blog?.contentList.map((item) => {
                return (
                  <>
                    <p>{item}</p>
                  </>
                );
              })}
            </div>
          </div>
          <div className="col-md-4">
            <div className="latest_sec">
              <h4>Latest Article</h4>
              <ul>
                {LatestArticle?.map((item) => {
                  return (
                    <>
                      <li>
                        <img src={blank_image} alt="" />
                        <div className="contents">
                          <h5>How They Impact Your Online Education Journey</h5>
                          <Link to={"#"}>{"Read More >"}</Link>
                        </div>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="share_on">
          <p>
            Share On :
            <Link>
              {" "}
              <img src={fb} />{" "}
            </Link>
            <Link>
              {" "}
              <img src={insta} />{" "}
              <Link>
                {" "}
                <img src={twitter} />{" "}
              </Link>
              <Link>
                {" "}
                <img src={youtube} />{" "}
              </Link>
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default SingleBlog;
