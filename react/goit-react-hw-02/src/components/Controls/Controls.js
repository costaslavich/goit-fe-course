import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ handlePrev, handleNext }) => (
  <section className={styles.controls}>
    <button className={styles.button} type="button" onClick={handlePrev}>
      Назад
    </button>

    <button className={styles.button} type="button" onClick={handleNext}>
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  handlePrev: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
};

export default Controls;
