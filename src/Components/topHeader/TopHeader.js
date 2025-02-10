import React from "react";
import "./topHeader.css";
const TopHeader = () => {
  return (
    <>
      <div class="top-bar-area inc-pad text-light">
        <div class="container">
          <div class="row align-center">
            <div class="col-lg-6 info">
              <ul>
                <li>
                  <i class="fas fa-map-marker-alt"></i> Bengaluru Karnataka
                  560069
                </li>
                <li>
                  <i class="fas fa-envelope-open"></i> info@vvgrad.com
                </li>
              </ul>
            </div>
            <div class="col-lg-6 info-2">
              <div class="info">
                <ul>
                  <li>Follow Us On :</li>
                </ul>
              </div>
              <div class="social">
                <ul>
                  <li>
                    <a href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
