import React from "react";
import "../Sidebar/Sidebar.css";

const Sidebar = () => {
  const menuItems = [
    {
      path: "/",
      name: "Home Page",
      icon: "*",
    },
    {
      path: "/",
      name: "Profile",
      icon: "*",
    },
    {
      path: "/",
      name: "My Wishlist",
      icon: "*",
    },
    {
      path: "/",
      name: "Favorites",
      icon: "*",
    },
    {
      path: "/",
      name: "My Friends",
      icon: "*",
    },
  ];
  return (
    <div className="container">
      <div className="sidebar">
        <div className="top-section">
          <h1 className="logo">Logo</h1>
          <div className="bars">=</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
