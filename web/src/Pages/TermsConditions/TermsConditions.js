import React, { useEffect, useState } from "react";
import { api } from "../../api/api";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import "./terms.css";

const TermsConditions = () => {
  const [data, setData] = useState();
  const CourseData = async () => {
    let res = await api(
      `api/v1/terms&conditions/getall`,
      "",
      "get",
      "",
      // currUserData?.token,
      ""
    );
    if (res) {
      // setSubscriptionData(res?.data);
      setData(res);
      console.log(res, "card aaaaaaaaaaa");
    }
  };
  useEffect(() => {
    CourseData();
  }, []);

  return (
    <>
      <div className="terms">
        <Breadcrumb
          name={"Terms & Condistions"}
          pageName={"Terms & Condistions"}
        />
        <div className="terms-area ">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="terms-info-wrap">
                  <h4 className="title">Terms & Conditions</h4>

                  <ul className="list-wrap">
                    {data?.map((item) => {
                      return (
                        <>
                          <li>
                            <div className="content">
                              <p>{item.content}</p>
                            </div>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsConditions;
