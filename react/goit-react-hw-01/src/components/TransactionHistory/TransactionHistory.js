import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const Transaction = ({ id, type, amount, currency }) => (
  <table className={styles.transaction_history}>
    <thead className={styles.transaction_head}>
      <tr>
        <th className={styles.transaction_item}>{id}</th>
        <th className={styles.transaction_item}>{type}</th>
        <th className={styles.transaction_item}>{amount}</th>
        <th className={styles.transaction_item}>{currency}</th>
      </tr>
    </thead>

    <tbody className={styles.transaction_body}>
      <tr>
        <th className={styles.transaction_item}>{id}</th>
        <th className={styles.transaction_item}>{type}</th>
        <th className={styles.transaction_item}>{amount}</th>
        <th className={styles.transaction_item}>{currency}</th>
      </tr>
    </tbody>
  </table>
);

export const TransactionHistory = ({ items = [] }) => (
  <ul className={styles.transaction_list}>
    {items.map(item => (
      <li key={item.id}>
        <Transaction {...item} />
      </li>
    ))}
  </ul>
);

Transaction.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistory;
