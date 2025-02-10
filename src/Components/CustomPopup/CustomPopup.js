import React, { useState } from "react";
import "./customPopup.css";

const CustomPopup = (props) => {
  // console.log(props, "props");

  return (
    <div>
      <>
        <div
          className={`modal fade common_popup ${props.show ? "show" : ""}`}
          id={props.id}
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          style={{
            zIndex: "9999",
            display: `${props.show ? "block" : "none"}`,
          }}
        >
          <div
            className={`modal-dialog modal-${props.size} modal-dialog-centered`}
          >
            <div className="modal-content px-0">
              <div className="modal-header border-0 p-0">
                {props?.title ? (
                  <h4 className="m-0 p-0 ps-3">{props?.title}</h4>
                ) : (
                  ""
                )}

                <button
                  type="button"
                  className="btn-close"
                  // data-bs-dismiss="modal"
                  // aria-label="Close"
                  onClick={() => props.close(false)}
                ></button>
              </div>
              <div className="modal-body p-0">{props.children}</div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default CustomPopup;
