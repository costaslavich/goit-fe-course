import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

export default class Controls extends Component {
  static propTypes = {
    onClickDeposit: PropTypes.func.isRequired,
    onClickWithdraw: PropTypes.func.isRequired,
    balance: PropTypes.number.isRequired,
  };

  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  };

  onCheckedBalance = event => {
    const name = event.target.textContent;
    const value = Number(this.state.value);

    if (value === 0) {
      alert('Введите сумму для проведения операции!');
    } else if (name === 'Withdraw' && value > this.props.balance) {
      alert('На счету недостаточно средств для проведения операции!');
    } else if (name === 'Deposit') {
      this.props.onClickDeposit(value, name);
    } else {
      this.props.onClickWithdraw(value, name);
    }

    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <section className={styles.controls}>
        <input
          type="number"
          className={styles.input}
          onChange={this.handleChange}
          value={value}
          placeholder="Enter amount ..."
        />
        <button
          type="button"
          className={styles.button}
          onClick={this.onCheckedBalance}
        >
          Deposit
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={this.onCheckedBalance}
        >
          Withdraw
        </button>
      </section>
    );
  }
}
