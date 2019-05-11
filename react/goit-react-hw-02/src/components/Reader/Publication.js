import React from 'react';
import PropTypes from 'prop-types';
import styles from './Reader.module.css';

const Publications = ({ item }) => (
  <article className={styles.publication}>
    <h2>{item.title}</h2>
    <p>{item.text}</p>
  </article>
);

Publications.propTypes = {
  item: PropTypes.arrayOf(Object).isRequired,
};

export default Publications;
