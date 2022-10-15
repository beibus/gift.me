import "./Wishlist.css";
import React from "react";
import Data from "../../data.json";
function Wishlist() {
  return (
    <>
      <h2 className="wishlist-rus">Лента желаний</h2>
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
