import "./Wishlist.css";
import React from "react";
import Product from "../../image/applewatch.png";
import Data from "../../data.json";
function Wishlist() {
  return (
    <>
      <div className="wishlist">
        {Data.map((item) => (
          <div className="wishlist-card">
            <img className="wishlist-product" src={item.image} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}

export default Wishlist;
