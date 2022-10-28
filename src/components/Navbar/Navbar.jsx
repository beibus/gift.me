import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Navbar.css";
import IconHome from "../../image/icon-home.png";
import IconFavorite from "../../image/icon-favorite.png";
import IconMan from "../../image/icon-man.png";
import IconList from "../../image/icon-list.png";
import IconFriends from "../../image/icon-friends.png";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        <img src={IconHome} alt="" />
        Главная
      </a>
      <a className="menu-item" href="/profile">
        <img src={IconMan} alt="" />
        Профиль
      </a>
      <a className="menu-item" href="/mywishlist">
        <img src={IconList} alt="" />
        Мои желания
      </a>
      <a className="menu-item" href="/friends">
        <img src={IconFavorite} alt="" />
        Избранное
      </a>
      <a className="menu-item" href="/friends">
        <img src={IconFriends} alt="" />
        Мои друзья
      </a>
    </Menu>
  );
};
