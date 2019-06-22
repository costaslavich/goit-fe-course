import React from 'react';
import PropTypes from 'prop-types';
import styles from './BookListItem.module.css';

const BookListItem = ({
  url,
  title,
  author,
  publisher,
  publishedDate,
  pageCount,
  rating,
}) => (
  <div className={styles.BookListItem}>
    <img src={url} alt="img-book-title" />
    <h2>{title}</h2>
    <p>Author: {author}</p>
    <p>Publisher: {publisher}</p>
    <p>PublishedDate: {publishedDate}</p>
    <p>PageCount: {pageCount}</p>
    <p>Rating: {rating}</p>
  </div>
);

BookListItem.defaultProps = {
  rating: 0,
  pageCount: 100,
};

BookListItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  pageCount: PropTypes.number,
  rating: PropTypes.number,
};

export default BookListItem;
