import React from "react";
import "../Modalinfo/Moreinfo.css";
import { useState } from "react";
// import Data from "../../../data.json";
import Apple from "../../../image/applewatch.png";
import Heart from "../../../image/heart-vector.png";
import Close from "../../../image/close.png";

function Moreinfo({ active, setActive, children }) {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal-content active" : "modal-content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* {Data.map((item) => ( */}
          <div className="wishlist-card-modal">
            <img
              active={modalActive}
              setActive={setModalActive}
              onClick={() => setModalActive(true)}
              className="wishlist-card-modal-close"
              src={Close}
              alt=""
            />
            <img className="wishlist-product-modal" src={Apple} alt="" />
            <div className="wishlist-product-info">
              <h2 className="wishlist-product-title">Название</h2>
              <p className="wishlist-product-brand">Apple watch</p>
              <h2 className="wishlist-product-title">Описание</h2>
              <p className="wishlist-product-description">
                Всегда включённый дисплей Retina .По сравнению с Apple Watch SE
                увеличен примерно на 20%
              </p>
              <div className="button-heart-block">
                <button className="wishlist-product-btn">Добавить</button>
                <img className="wishlist-product-heart" src={Heart} alt="" />
              </div>
            </div>
          </div>
          {/* ))} */}
        </div>
        {children}
      </div>
    </div>
  );
}

export default Moreinfo;
