import useAuth from "./hooks/use-auth";

import Profile from "./components/profile/Profile";
import Statistics from "./components/statistics/Statistics";
import FriendList from "./components/friend-list/FriendList";
import TransactionHistory from "./components/transaction-history/TransactionHistory";

import "./styles/global.scss";

function App() {
  const { user, statistics, friends, transactions } = useAuth();

  return (
    <div>
      <Profile user={user} />
      <Statistics title={"Stats"} stats={statistics} />
      <FriendList friendList={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
