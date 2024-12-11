// src/components/Tab.js
import React from "react";

const Tab = ({ items }) => {
  console.log(items);
  if (!items || items.length === 0) {
    return <p>No data available</p>;
  }

  // Get the keys from the first item to use as table headers
  const headers = Object.keys(items[0]);

  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead className="table-light">
          <tr>
            {headers.map((header, index) => (
              <th key={index}>
                {header.charAt(0).toUpperCase() + header.slice(1)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              {headers.map((header, idx) => (
                <td key={idx}>{item[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tab;
