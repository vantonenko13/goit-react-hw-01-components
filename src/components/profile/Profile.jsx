import React from "react";

import cl from "./Profile.module.scss";

const Profile = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <div className={cl.profile}>
      <div className={cl.description}>
        <img src={avatar} alt="User avatar" className={cl.avatar} />
        <p className={cl.name}>{username}</p>
        <p className={cl.tag}>{tag}</p>
        <p className={cl.location}>{location}</p>
      </div>

      <ul className={cl.stats}>
        <li>
          <span className={cl.label}>Followers</span>
          <span className={cl.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={cl.label}>Views</span>
          <span className={cl.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={cl.label}>Likes</span>
          <span className={cl.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
