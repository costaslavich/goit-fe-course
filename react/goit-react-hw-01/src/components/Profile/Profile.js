import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ avatar, name, tag, location }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img
        className={styles.avatar}
        src={avatar}
        alt="user avatar"
        width="120"
      />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
    <ul className={styles.stats}>
      <li className={styles.item}>
        <span className={styles.label}>Followers</span>
        <br />
        <span className={styles.quantity}>{1000}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.label}>Views</span>
        <br />
        <span className={styles.quantity}>{2000}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.label}>Likes</span>
        <br />
        <span className={styles.quantity}>{3000}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  alt: '',
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  alt: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
