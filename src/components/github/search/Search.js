import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styles from './search.module.scss';
import SearchBar from '../../common/SearchBar';
import UserListItem from './UserListItem';

const Search = ({users, onSearch, searchTerm, onSearchTermChange}) => {
  return (
    <div>
      <br />
      <div className="jumbotron">
        <h1>Search for GitHub Users</h1>
        <hr className="mb-4"/>
        <SearchBar
          tooltip="Type in the username"
          onChange={onSearchTermChange}
          onSearch={onSearch}
          value={searchTerm}
        />
      </div>
      {users.map(u =>
        <UserListItem key={u.login} user={u} />
      )}
    </div>
  );
};

Search.propTypes = {
  users: PropTypes.array.isRequired,
  onSearch: PropTypes.func.isRequired,
  onSearchTermChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired
};

export default Search;
