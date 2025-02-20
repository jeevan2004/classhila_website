import React from "react";
import { Container } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="blog pt_150">
      <Container>
        <div className="row justify-content-center text-center">
          <div className="col-12 col-lg-6 mx-auto">
            <h2 className="second_heading">Latest Article.</h2>
            <span className="mt-3 d-block primery_color">Latest Article</span>
            <h3 className="main_heading">
              Latest Updates in Online Courses and Education.
            </h3>
            <span className="mt-3 d-block">
              Check back regularly for new courses, special events, and exciting
              opportunities to enrich your education!
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
