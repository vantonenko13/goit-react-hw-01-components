import { useMemo } from "react";

import { AuthContext } from "../../contexts/auth-context";

import user from "../../data/user.json";
import statistics from "../../data/statistics.json";
import friends from "../../data/friend-list.json";
import transactions from "../../data/transactions.json";

function AuthProvider(props) {
  const contextValue = useMemo(
    () => ({
      user,
      statistics,
      friends,
      transactions,
    }),
    []
  );

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
