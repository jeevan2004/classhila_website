import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../AuthContextAPI";

const JoinOurCommunity = () => {
   const {  currUserData } =
      useAuthContext();
  const navigate = useNavigate();
  return (
    <div className="discover ">
      <div
        className="container-fluid"
        style={{ backgroundColor: "#FFF5F0", padding: "80px 0" }}
      >
        <div className="row justify-content-center text-center">
          <div className="col-12 col-lg-9">
            <div className="mb-2">
              <span>DISCOVER NEW SKILLS</span>
            </div>

            <h2
              style={{
                color: "#FF6B00",
                fontSize: "45px",
                fontWeight: "700",
                marginBottom: "1.5rem",
                lineHeight: "1.2",
              }}
            >
              Join Our Community Of
              <br />
              Learners!
            </h2>

            <div className="mb-4">
              <p>
                Connect with like-minded individuals and engage in collaborative
                learning. Sign up now to be part of our vibrant community!
              </p>
            </div>
{!currUserData ? <button
              className="btn_secondary mx-auto"
              onMouseOver={(e) => (e.target.style.backgroundColor = "#9e8466")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#8B7355")}
              onClick={() => navigate("/register")}
            >
              Join Now
            </button>
            :<button
            className="btn_secondary mx-auto"
            onMouseOver={(e) => (e.target.style.backgroundColor = "#9e8466")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#8B7355")}
            onClick={() => navigate("/courses")}
          >
            Our Course
          </button>
            }
            




          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinOurCommunity;
