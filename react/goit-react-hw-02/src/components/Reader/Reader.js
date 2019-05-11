import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publication from './Publication';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';
import styles from './Reader.module.css';

export default class Reader extends Component {
  static defaultProps = {
    step: 1,
  };

  static propTypes = {
    step: PropTypes.number,
    items: PropTypes.arrayOf(Object).isRequired,
  };

  state = {
    indexCurrentPage: 0,
  };

  handlePrev = () => {
    this.setState(prevState => ({
      indexCurrentPage: prevState.indexCurrentPage - this.props.step,
    }));
  };

  handleNext = () => {
    this.setState(prevState => ({
      indexCurrentPage: prevState.indexCurrentPage + this.props.step,
    }));
  };

  render() {
    const { items } = this.props;
    const { indexCurrentPage } = this.state;

    return (
      <div className={styles.reader}>
        <Publication item={items[indexCurrentPage]} />
        <Counter currentPage={indexCurrentPage} totalPages={items.length} />
        <Controls
          handlePrev={this.handlePrev}
          handleNext={this.handleNext}
          currentPage={indexCurrentPage}
          totalPages={items.length}
        />
      </div>
    );
  }
}
