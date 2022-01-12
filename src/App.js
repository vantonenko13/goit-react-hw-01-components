import React from "react";

import Profile from "./components/profile/Profile";
import Statistics from "./components/statistics/Statistics";
import FriendList from "./components/friend-list/FriendList";
import TransactionHistory from "./components/transaction-history/TransactionHistory";

import user from "./data/user.json";
import statistics from "./data/statistics.json";
import friends from "./data/friend-list.json";
import transactions from "./data/transactions.json";

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={"Stats"} stats={statistics} />
      <FriendList friendList={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
