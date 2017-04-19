import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({onChange, value, tooltip, onSearch}) => {
  const getInputRef = (input) => {
    $(input).tooltip();
  };
  return (
    <div className="form-inline">
      <input
        ref={getInputRef}
        className="form-control mb-2 mr-sm-2 mb-sm-0"
        type="text"
        onChange={onChange}
        value={value}
        data-toggle="tooltip"
        data-placement="top"
        title={tooltip}
      />
      <button className="btn btn-primary" onClick={onSearch}>Search</button>
    </div>
  );
};

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  tooltip: PropTypes.string,
};

export default SearchBar;
