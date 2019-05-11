import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ handlePrev, handleNext, indexCurrentPage, totalPages }) => (
  <section className={styles.controls}>
    <button
      className={styles.button}
      type="button"
      onClick={handlePrev}
      disabled={indexCurrentPage <= 0}
    >
      Назад
    </button>

    <button
      className={styles.button}
      type="button"
      onClick={handleNext}
      disabled={indexCurrentPage >= totalPages}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  handlePrev: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  indexCurrentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default Controls;
