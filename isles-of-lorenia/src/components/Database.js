// src/components/Database.js
import React, { useEffect, useState } from "react";

const Database = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/data/items.json")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching items:", error));
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead className="table-light">
          <tr>
            <th colSpan="2">Name</th>
            <th colSpan="2">Tags</th>
            <th colSpan="5">Description</th>
            <th colSpan="1">Weight</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td colSpan="2">{item.name}</td>
              <td colSpan="2">{item.tags}</td>
              <td colSpan="5">{item.description}</td>
              <td colSpan="1">{item.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Database;
