import React from "react";
import PropTypes from "prop-types";

import cl from "./FriendList.module.scss";

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

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  }),
};

export default FriendListItem;
