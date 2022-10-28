import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Sidebar.css";
import Irina from "../../image/irina.png";
import Edit from "../../image/edit.png";

function Sidebar() {
  return (
    <div className="Sidebar" id="outer-container">
      <Navbar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap">
        <div>
          <h1 className="page-wrap-welcom">Добро пожаловать, Ирина!</h1>
          <h2 className="page-wrap-wish">Мои желания</h2>
        </div>
        <div>
          <img src={Irina} alt="" />
          <img className="edit" src={Edit} alt="" />
          <p className="page-wrap-more">Смотерь еще</p>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default Sidebar;
