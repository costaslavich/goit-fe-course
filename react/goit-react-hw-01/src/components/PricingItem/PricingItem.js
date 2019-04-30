import React from 'react';
import PropTypes from 'prop-types';
import styles from './PricingItem.module.css';

const PricingItem = ({ label, icon, capacity, price, description }) => (
  <div className={styles.pricing_item}>
    <i className={styles.icon} style={{ backgroundImage: `url(${icon})` }} />

    <h2 className={styles.label}>{label}</h2>
    <p className={styles.capacity}>{capacity} Storage</p>
    <p className={styles.description}>{description}</p>
    <p className={styles.price}>${price}/MO</p>
    <button className={styles.button} type="button">
      Get Started
    </button>
  </div>
);

const PricingPlan = ([items]) => (
  <ul className={styles.pricing_plan}>
    {items.map(item => (
      <li key={item.price}>
        <PricingItem {...item} />
      </li>
    ))}
  </ul>
);

PricingItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      capacity: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ),
}.isRequired;

export default PricingPlan;
