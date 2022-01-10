import React from "react";

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

export default FriendList;
