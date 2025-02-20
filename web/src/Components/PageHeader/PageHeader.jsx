import hero from "../../assets/image/girl-1.webp";
import author_images from "../../assets/image/author-1.png";
import shap1 from "../../assets/image/shape/shap1.png";
import shap2 from "../../assets/image/shape/shap2.png";
import shap3 from "../../assets/image/shape/shap3.png";
import shap4 from "../../assets/image/shape/shap4.png";
import shap5 from "../../assets/image/shape/shap5.png";
import shap6 from "../../assets/image/shape/shap6.png";

const PageHeader = ({
  heading,
  heading2,
  heading3,
  content,
  btnText,
  btnLink,
}) => {
  return (
    <>
      <div className="hero-banner hero-style-1 page_banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-content">
                <h1
                  className="title sal-animate"
                  data-sal-delay="100"
                  data-sal="slide-up"
                  data-sal-duration="1000"
                >
                  {heading2 ? (
                    <span className="color-secondary">{heading2}</span>
                  ) : (
                    ""
                  )}
                  <br />
                  {heading}
                  <br />
                  {heading3}
                </h1>
                <p>{content}</p>
                {btnText ? (
                  <div>
                    <a
                      className="btn_primary mt-4 d-inline-block"
                      href="/course-style-1"
                    >
                      {btnText} <i className="icon-4"></i>
                    </a>
                  </div>
                ) : (
                  ""
                )}

                <ul className="shape-group">
                  <li>
                    <img src={shap1} alt="Shape" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-thumbnail">
                <img src={hero} alt="Girl Image" />
              </div>
            </div>
          </div>
        </div>
        <div className="shape-7">
          <img src={shap2} alt="Shape" />
        </div>
      </div>
    </>
  );
};

export default PageHeader;
