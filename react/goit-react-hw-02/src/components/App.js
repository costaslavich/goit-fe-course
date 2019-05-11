import React, { Fragment } from 'react';
import Reader from './Reader/Reader';
import publications from '../publications.json';

const App = () => (
  <Fragment>
    <Reader items={publications} />
  </Fragment>
);

export default App;
