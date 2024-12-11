// src/components/Database.js
import React, { useState, useEffect } from "react";
import Tab from "./Tab";

const Database = () => {
  const [tabsData, setTabsData] = useState({
    ancestries: [],
    backgrounds: [],
    items: [],
    feats: [],
    traits: [],
    flairs: [],
  });

  const tabs = [
    "ancestries",
    "backgrounds",
    "items",
    "feats",
    "traits",
    "flairs",
  ];

  useEffect(() => {
    // Load JSON files for each tab
    const fetchData = async () => {
      const fetchedData = {};
      for (const tab of tabs) {
        try {
          const response = await fetch(`/data/${tab}.json`);
          const data = await response.json();
          fetchedData[tab] = data;
        } catch (error) {
          console.error(`Error fetching ${tab}:`, error);
        }
      }
      setTabsData(fetchedData);
    };

    fetchData();
  }, []); // Empty dependency array to run only once after the component mounts

  return (
    <div>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        {tabs.map((tab) => (
          <li className="nav-item" role="presentation" key={tab}>
            <a
              className="nav-link"
              id={`${tab}-tab`}
              data-bs-toggle="tab"
              data-bs-target={`#${tab}-tab-pane`}
              type="button"
              role="tab"
              href={`#${tab}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <div className="tab-content" id="myTabContent">
        {tabs.map((tab) => {
          console.log(tabsData[tab]);
          return <Tab items={tabsData[tab]} />;
        })}
      </div>
    </div>
  );
};

export default Database;
