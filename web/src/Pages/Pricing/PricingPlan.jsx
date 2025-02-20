import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PricingPlan.css";

const PricingPlan = () => {
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      name: "Basic Plan",
      price: isYearly ? "$15.99" : "$1.99",
      period: isYearly ? "/Yearly" : "/Monthly",
      features: [
        "Unlimited Access Courses",
        "Certificate After Completion",
        "Interactive practice sessions",
        "High Resolution Videos",
        "24/7 Dedicated Support",
      ],
      buttonStyle: "secondary",
    },
    {
      name: "Pro Plan",
      price: isYearly ? "$25.99" : "$2.99",
      period: isYearly ? "/Yearly" : "/Monthly",
      features: [
        "Unlimited Access Courses",
        "Certificate After Completion",
        "Excercise Files & Notes",
        "Personalized Feedback",
        "Community Support",
      ],
      buttonStyle: "primary",
    },
    {
      name: "Premium Plan",
      price: isYearly ? "$35.99" : "$3.99",
      period: isYearly ? "/Yearly" : "/Monthly",
      features: [
        "Unlimited Access Courses",
        "Certificate After Completion",
        "Community Support",
        "High Resolution Videos",
        "Lifetime Access All Courses",
      ],
      buttonStyle: "secondary",
    },
  ];

  return (
    <>
      <div className="pricing_plan">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h1 className=" mb-3">
              Price List<span className="text-orange">.</span>
            </h1>
            <h2 className="pricing-subtitle mb-3">
              Select A Plan That Suits You<span className="text-orange">.</span>
            </h2>
            <p className="text-muted mb-3">
              Explore flexible pricing options tailored to fit your learning
              needs. Choose from our affordable plans
            </p>

            <div className="pricing-toggle mb-4">
              <button
                className={`btn ${isYearly ? "btn-orange" : "btn-light"} me-2`}
                onClick={() => setIsYearly(true)}
              >
                Yearly
              </button>
              <button
                className={`btn ${!isYearly ? "btn-orange" : "btn-light"}`}
                onClick={() => setIsYearly(false)}
              >
                Monthly
              </button>
            </div>
          </div>

          <div className="row">
            {plans.map((plan, index) => (
              <div className="col-lg-4 mb-4" key={index}>
                <div className="card pricing-card h-100">
                  <div className="card-body d-flex flex-column">
                    <h3 className="card-title pricing-title mb-4">
                      {plan.name}
                    </h3>
                    <div className="pricing-price mb-4">
                      <span className="price">{plan.price}</span>
                      <span className="period">{plan.period}</span>
                    </div>
                    <ul className="list-unstyled mb-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="mb-3">
                          <i className="bi bi-check-circle-fill text-orange me-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button
                      className={`btn btn-${plan.buttonStyle} mt-auto w-100`}
                    >
                      Buy This Plan
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="discover">
          <div
            className="container-fluid mt-5"
            style={{ backgroundColor: "#FFF5F0", padding: "80px 0" }}
          >
            <div className="row justify-content-center text-center">
              <div className="col-12 col-lg-8">
                <div className="mb-2">
                  <span>DISCOVER NEW SKILLS</span>
                </div>

                <h2
                  style={{
                    color: "#FF6B00",
                    fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
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
                    Connect with like-minded individuals and engage in
                    collaborative learning.
                    <br />
                    Sign up now to be part of our vibrant community!
                  </p>
                </div>

                <button
                  className="btn_secondary mx-auto"
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#9e8466")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "#8B7355")
                  }
                >
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPlan;
