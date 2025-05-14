import React, { useState } from "react";

const CommonTabs = ({ tabs, defaultActive = 0 }) => {
  const [activeTab, setActiveTab] = useState(defaultActive);

  return (
    <div className="courses__details-content">
      <ul className="nav nav-tabs" role="tablist">
        {tabs.map((tab, index) => (
          <li className="nav-item" role="presentation" key={index}>
            <button
              className={`nav-link ${activeTab === index ? "active" : ""}`}
              id={`${tab.id}-tab`}
              type="button"
              role="tab"
              aria-controls={`${tab.id}-pane`}
              aria-selected={activeTab === index}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content courses_about" id="myTabContent">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-pane fade ${
              activeTab === index ? "show active" : ""
            }`}
            id={`${tab.id}-pane`}
            role="tabpanel"
            aria-labelledby={`${tab.id}-tab`}
            tabIndex="0"
          >
           <h3> {tab?.title}</h3>
            {tab?.para?.map((item, i) => (
              <p key={`para-${i}`}>{item}</p>
            ))}

            {tab?.heading && <h5>{tab.heading}</h5>}

            {tab?.content?.map((item, i) => (
              <p key={`content-${i}`}>{item}</p>
            ))}

            {tab?.List?.map((item, i) => (
              <p key={`list-${i}`}>{item}</p>
            ))}

            {tab?.heading2 && <h6>{tab.heading2}</h6>}

            {tab?.List2?.map((item, i) => (
              <p key={`list2-${i}`}>{item}</p>
            ))}

            {tab?.para2?.map((item, i) => (
              <p key={`para2-${i}`}>{item}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommonTabs;
