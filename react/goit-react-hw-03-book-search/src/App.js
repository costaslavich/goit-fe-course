import React, { Component } from 'react';
import genres from './genres.json';
import BookList from './components/BookList/BookList';
import Loader from './components/Loader/Loader';
import ErrorNotification from './components/ErrorNotification/ErrorNotification';
import SearchForm from './components/SearchForm/SearchForm';
import * as articleAPI from './services/api';

// const Spinner = require('react-spinkit');

const mapper = items =>
  items.map(
    ({
      id,
      volumeInfo: {
        imageLinks: { smallThumbnail: url },
        authors: [author],
        averageRating: rating,
        pageCount,
        title,
        publisher,
        publishedDate,
      },
    }) => ({
      id,
      url,
      author,
      title,
      publisher,
      publishedDate,
      rating,
      pageCount,
    }),
  );

export default class App extends Component {
  state = {
    items: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.fetchItems({ query: 'react', genre: 'computers' });
  }

  fetchItems = ({ query, genre }) => {
    this.setState({ isLoading: true });

    articleAPI
      .fetchItems(query, genre)
      .then(({ data }) => {
        this.setState({ items: mapper(data.items) });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { items, isLoading, error } = this.state;
    return (
      <div>
        <SearchForm genres={genres} onSubmit={this.fetchItems} />
        {error && <ErrorNotification text={error.message} />}

        {isLoading && <Loader />}
        {items.length > 0 && <BookList items={items} />}
      </div>
    );
  }
}
// <Spinner name="ball-scale-multiple" />
