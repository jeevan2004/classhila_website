import React, { useEffect, useState } from "react";
import { api } from "../../api/api";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import "./terms.css";

const PrivacyPolicy = () => {
  const [data, setData] = useState();
  const CourseData = async () => {
    let res = await api(
      `api/v1/privacypolicy/getall`,
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
        <Breadcrumb name={"Privacy Policy"} pageName={"Privacy Policy"} />
        <div className="terms-area ">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="terms-info-wrap">
                  <h4 className="title">Privacy Policy</h4>

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

export default PrivacyPolicy;
