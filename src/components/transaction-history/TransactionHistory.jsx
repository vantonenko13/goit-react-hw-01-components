import React from "react";
import PropTypes from "prop-types";

import cl from "./TransactionHistory.module.scss";

const TransactionHistory = ({ items }) => {
  return (
    <>
      {items && items.length ? (
        <table className={cl.transactions}>
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => {
              const { id, type, amount, currency } = item;
              return (
                <tr key={`transaction-${id}`}>
                  <td>{type}</td>
                  <td>{amount}</td>
                  <td>{currency}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>No transactions have been made yet</p>
      )}
    </>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};

export default TransactionHistory;
