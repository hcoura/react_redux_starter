import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';

const App = ({children}) => {
  return (
    <div>
      <Header />
      <div className="container">
        {children}
      </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired
};

export default App;
