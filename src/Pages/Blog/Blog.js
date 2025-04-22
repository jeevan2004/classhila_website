import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Article from "../../Components/Article/Article";

import { BlogData } from "./BlogData";
import { api } from "../../api/api";
import { useAuthContext } from "../../AuthContextAPI";
import Skeleton from "react-loading-skeleton";

const Blog = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [blogData, setBlogData] = useState([]);
  const { currUserData } = useAuthContext();

  const getBlogData = async () => {
    setIsLoading(true);

    let res = await api(
      `api/v1/blog?page=${1}&limit=10`,
      "",
      "get",
      "",

      ""
    );

    if (res?.success) {
      setBlogData(res?.data || []);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getBlogData();
  }, []);

  return (
    <div className="blog pt_150">
      <Container>
        <div className="row justify-content-center text-center">
          <div className="col-12 col-lg-6 mx-auto">
            <h2 className="second_heading ">Latest Article.</h2>
            <span className="mt-4 d-block primary_color fs_18">
              Latest Article
            </span>
            <h3 className="main_heading">
              Latest Updates in Online Courses and Education.
            </h3>
            <span className="mt-3 d-block">
              Check back regularly for new courses, special events, and exciting
              opportunities to enrich your education!
            </span>
          </div>
        </div>
        <div className="row mt-5">
          {blogData?.map((item) => {
            return (
              <>
                <div className="col-md-4 mb-4 mb-lg-5">
                  <Article data={item} />
                </div>
              </>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Blog;
