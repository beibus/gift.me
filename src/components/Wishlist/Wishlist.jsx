import "./Wishlist.css";
import React from "react";
import { useState } from "react";
import { Modal } from "antd";
import Watch from "../../image/applewatch.png";
import Data from "../../data.json";
function Wishlist() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="wish" id="wishlist">
      <h2 className="wishlist-rus">Лента желаний</h2>
      <div className="wishlist">
        {Data.map((item) => (
          <div className="wishlist-card">
            <img
              className="wishlist-product"
              onClick={showModal}
              src={item.image}
              alt=""
            />
          </div>
        ))}
      </div>
      <Modal
      className="modal-content"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
  
      >
        <div className="more-info">
          <img src={Watch} alt="" />
          <div className="more_info_right">
            <h3 className="right_h3">Название</h3>
            <h3 className="right_h3">Apple Watch</h3>
            <h3 className="right_h3">Описание</h3>
            <p className="info_right_p">Всегда включённый дисплей Retina
              .По сравнению с Apple Watch SE
          увеличен примерно на 20%</p>
          <div className="more_info_right_bottom">
              <button className="end_button">
              Добавить
                </button>
              <svg className="end_svg" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M3.63621 7.20829L10.0002 13.5723L16.3642 7.20829C16.9269 6.64564 17.243 5.88251 17.243 5.08679C17.243 4.29108 16.9269 3.52795 16.3642 2.96529C16.0856 2.68669 15.7549 2.4657 15.3909 2.31492C15.0268 2.16414 14.6367 2.08654 14.2427 2.08654C13.447 2.08654 12.6839 2.40264 12.1212 2.96529L10.0002 5.08629L7.87921 2.96629C7.31512 2.41118 6.55453 2.10146 5.76312 2.10459C4.97171 2.10772 4.21359 2.42345 3.65391 2.983C3.09423 3.54255 2.77832 4.30059 2.77501 5.092C2.77169 5.88341 3.08123 6.64407 3.63621 7.20829ZM9.29321 1.55029L10.0002 2.25729L10.7072 1.55029C11.1708 1.08266 11.7221 0.711196 12.3296 0.457221C12.9371 0.203246 13.5888 0.0717627 14.2472 0.0703209C14.9057 0.068879 15.5579 0.197507 16.1666 0.448819C16.7752 0.700132 17.3281 1.06918 17.7937 1.53478C18.2593 2.00037 18.6284 2.55334 18.8797 3.16195C19.131 3.77056 19.2596 4.42281 19.2582 5.08126C19.2567 5.73971 19.1253 6.39139 18.8713 6.99889C18.6173 7.60639 18.2458 8.15774 17.7782 8.62129L10.7082 15.6923C10.6153 15.7853 10.505 15.859 10.3836 15.9094C10.2623 15.9597 10.1321 15.9856 10.0007 15.9856C9.86929 15.9856 9.73917 15.9597 9.61777 15.9094C9.49637 15.859 9.38608 15.7853 9.29321 15.6923L2.22221 8.62229C1.74822 8.16023 1.3707 7.60865 1.11154 6.99955C0.85238 6.39045 0.716746 5.73596 0.712505 5.07403C0.708264 4.4121 0.8355 3.75592 1.08683 3.14355C1.33816 2.53118 1.70859 1.9748 2.17662 1.50671C2.64465 1.03861 3.20097 0.668108 3.8133 0.41669C4.42564 0.165271 5.0818 0.0379429 5.74373 0.0420903C6.40566 0.0462378 7.06018 0.181779 7.66931 0.440851C8.27845 0.699923 8.83008 1.07737 9.29221 1.55129L9.29321 1.55029Z" fill="#1F3E6C"/>
              </svg>
          </div>
            
          </div>
          
        </div>
     
      </Modal>
    </div>
  );
}

export default Wishlist;
