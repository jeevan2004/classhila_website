import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Article from "../../Components/Article/Article";
import { api } from "../../api/api";
import { useAuthContext } from "../../AuthContextAPI";

const Blog = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [blogData, setBlogData] = useState([]);
  const { currUserData } = useAuthContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  
  
  const getBlogData = async () => {
    setIsLoading(true);
    let res = await api(
      `api/v1/blog?page=${currentPage}&limit=10`,
      "",
      "get",
      "",
      ""
    );

    if (res?.success) {
      setBlogData(res?.data || []);
      setTotalPages(res?.totalPages || 1); // ensure API returns totalPages
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getBlogData();
  }, [currentPage]);

  return (
    <div className="blog pt_150">
      <Container>
        <div className="row justify-content-center text-center">
          <div className="col-12 col-lg-6 mx-auto">
            <h2 className="second_heading">Latest Article.</h2>
            <span className="mt-4 d-block primary_color fs_18">Latest Article</span>
            <h3 className="main_heading">
              Latest Updates in Online Courses and Education.
            </h3>
            <span className="mt-3 d-block">
              Check back regularly for new courses, special events, and exciting opportunities to enrich your education!
            </span>
          </div>
        </div>

        <div className="row mt-5">
          {blogData?.map((item, index) => (
            <div className="col-md-4 mb-4 mb-lg-5" key={index}>
              <Article data={item} />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination-container text-center my-4 mb-5">
  <ul className="pagination justify-content-center">
    {/* Previous Button */}
    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
      <button
        className="page-link"
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      >
        Previous
      </button>
    </li>

    {/* Pagination Items */}
    {Array.from({ length: totalPages }, (_, i) => i + 1)
      .filter((page) => {
        return (
          page === 1 ||
          page === 2 ||
          page === totalPages ||
          page === totalPages - 1 ||
          (page >= currentPage - 1 && page <= currentPage + 1)
        );
      })
      .reduce((acc, page, i, arr) => {
        if (i > 0 && page - arr[i - 1] > 1) {
          acc.push("dots");
        }
        acc.push(page);
        return acc;
      }, [])
      .map((item, index) =>
        item === "dots" ? (
          <li className="page-item disabled" key={`dots-${index}`}>
            <span className="page-link">...</span>
          </li>
        ) : (
          <li
            key={item}
            className={`page-item ${item === currentPage ? "active" : ""}`}
          >
            <button className="page-link" onClick={() => setCurrentPage(item)}>
              {item}
            </button>
          </li>
        )
      )}

    {/* Next Button */}
    <li
      className={`page-item ${
        currentPage === totalPages || totalPages === 0 ? "disabled" : ""
      }`}
    >
      <button
        className="page-link"
        onClick={() =>
          setCurrentPage((prev) => Math.min(prev + 1, totalPages))
        }
      >
        Next
      </button>
    </li>
  </ul>
</div>
      </Container>
    </div>
  );
};

export default Blog;
