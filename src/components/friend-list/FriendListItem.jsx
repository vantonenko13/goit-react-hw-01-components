import React from "react";

import cl from "./styles/FriendList.module.scss";

const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;

  return (
    <li className={cl.friend}>
      <span className={`${cl.status} ${isOnline ? cl.active : ""}`}></span>
      <img className={cl.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={cl.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
