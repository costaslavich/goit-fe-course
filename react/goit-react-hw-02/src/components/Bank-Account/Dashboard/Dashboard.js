import React, { Component } from 'react';
import Controls from '../Controls/Controls';
import Balance from '../Balance/Balance';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import styles from '../../../stylesBank.css';

const shortid = require('shortid');

const date = new Date();

export default class Dashboard extends Component {
  state = {
    history: [],
    balance: 0,
  };

  onClickButtonDeposit = (value, name) => {
    const item = {
      id: shortid.generate(),
      type: name,
      amount: value,
      date: date.toLocaleString(),
    };

    this.setState(prevState => ({ history: [...prevState.history, item] }));

    this.setState(prevState => ({
      balance: prevState.balance + value,
    }));
  };

  onClickButtonWithdraw = (value, name) => {
    const item = {
      id: shortid.generate(),
      type: name,
      amount: value,
      date: date.toLocaleString(),
    };

    this.setState(prevState => ({ history: [...prevState.history, item] }));

    this.setState(prevState => ({
      balance: prevState.balance - value,
    }));
  };

  render() {
    const { history, balance } = this.state;

    return (
      <div className={styles.dashboard}>
        <Controls
          onClickDeposit={this.onClickButtonDeposit}
          onClickWithdraw={this.onClickButtonWithdraw}
          balance={balance}
        />
        <Balance balance={balance} transactions={history} />
        <TransactionHistory transactions={history} />
      </div>
    );
  }
}
