import "./Wishlist.css";
import React from "react";
import Modalinfo from "./Modalinfo/Moreinfo";
import { useState } from "react";
import Data from "../../data.json";
function Wishlist() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <h2 className="wishlist-rus">Лента желаний</h2>
      <div className="wishlist">
        <Modalinfo active={modalActive} setActive={setModalActive} />
        {Data.map((item) => (
          <div className="wishlist-card">
            <img
              className="wishlist-product"
              src={item.image}
              alt=""
              onClick={() => setModalActive(true)}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Wishlist;
