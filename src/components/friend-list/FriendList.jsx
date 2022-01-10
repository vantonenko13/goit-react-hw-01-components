import React from "react";
import PropTypes from "prop-types";

import Item from "./FriendListItem";

import cl from "./styles/FriendList.module.scss";

const FriendList = ({ friendList }) => {
  return (
    <ul className={cl.friendList}>
      {friendList &&
        friendList.length &&
        friendList.map((friend) => {
          return <Item key={`friend-${friend.name}-${friend.id}`} friend={friend} />;
        })}
    </ul>
  );
};

FriendList.propTypes = {
  friendList: PropTypes.arrayOf(PropTypes.object),
};

export default FriendList;
