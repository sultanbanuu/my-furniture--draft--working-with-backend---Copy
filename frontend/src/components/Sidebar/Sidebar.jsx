import React from "react";
import "../Sidebar/Sidebar.css";
import { Category } from "./Category/Category";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <Category />
      <div className="collections">
        <h3>Collections</h3>
      </div>
    </div>
  );
};
