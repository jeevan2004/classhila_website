import React, { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
// import "../../yet-another-react-lightbox/dist/plugins/zoom.css"; // ✅ Fixed import
import "../../../node_modules/yet-another-react-lightbox/dist/styles.css";
// import "../../../node_modules/yet-another-react-lightbox/plugins/zoom.css";

import "./ourWorkShop.css";

import workshop1 from "../../assets/image/workshop/workshop1.png";
import workshop2 from "../../assets/image/workshop/workshop2.png";
import workshop3 from "../../assets/image/workshop/workshop3.png";
import workshop4 from "../../assets/image/workshop/workshop4.png";

const OurWorkShop = () => {
  const data = [
    { image: workshop1 },
    { image: workshop2 },
    { image: workshop3 },
    { image: workshop4 },
  ];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = data.map((item) => ({ src: item.image }));

  return (
    <div className="our-work-shop py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12">
            <div className="text-center mb-5">
              {/* <div className="pre_heading">Our Workshop</div> */}
              <h1 className="main_heading mb-3">Our Workshop</h1>
              <p className="main_text">
                Classhila offers immersive online and offline workshops in
                Finance Literacy and Acting, designed to suit your learning
                preferences. And this is just the beginning—we're gearing up to
                launch an exciting series of workshops on trending topics,
                designed to empower you with diverse skill sets for holistic,
                unstoppable personal and professional growth in today's rapidly
                evolving, dynamic world.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {data.map((item, i) => (
            <div className="col-md-3 mb-4" key={i}>
              <div className="box">
                <img
                  className="w-100"
                  src={item.image}
                  alt={`workshop-${i}`}
                  onClick={() => {
                    setIndex(i);
                    setOpen(true);
                  }}
                  style={{ cursor: "pointer", borderRadius: "10px" }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {open && (
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            index={index}
            slides={slides}
            plugins={[Zoom]}
          />
        )}
      </div>
    </div>
  );
};

export default OurWorkShop;
