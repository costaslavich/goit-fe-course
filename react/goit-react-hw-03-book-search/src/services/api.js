import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

export const fetchItems = (query, subject) => {
  return query === '' || subject === ''
    ? axios.get(`${BASE_URL}${query}+subject:${subject}`)
    : axios.get(`${BASE_URL}${query}`);
};

export const fn = () => null;
