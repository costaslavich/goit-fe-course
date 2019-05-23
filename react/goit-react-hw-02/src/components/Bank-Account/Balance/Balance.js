import React from 'react';
import PropTypes from 'prop-types';
import styles from './Balance.module.css';

const Balance = ({ balance, transactions }) => (
  <section className={styles.balance}>
    <span className={styles.balance_downward}>
      <i className={styles.material_icons}>arrow_downward</i>
      {transactions
        .filter(transaction => transaction.type === 'Deposit')
        .reduce((acc, action) => acc + action.amount, 0)}
      $
    </span>

    <span className={styles.balance_upward}>
      <i className={styles.material_icons}>arrow_upward</i>
      {transactions
        .filter(transaction => transaction.type === 'Withdraw')
        .reduce((acc, action) => acc + action.amount, 0)}
      $
    </span>

    <span className={styles.balance_item}>Balance: {balance} $</span>
  </section>
);

Balance.propTypes = {
  balance: PropTypes.number.isRequired,
  transactions: PropTypes.arrayOf(Object).isRequired,
};

export default Balance;
