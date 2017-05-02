import React from 'react';
import PropTypes from 'prop-types';
import styles from './search.scss';

const UserListItem = ({user}) => {
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={user.avatar_url} />
      <div className={styles.cardBody}>
        <h4>{user.login}</h4>
        <p>Score: {user.score}</p>
        <hr />
        <a
          href={user.html_url}
          className={`btn btn-primary ${styles.userPageButton}`}
          target="_blank">User's Page</a>
      </div>
      <div className="clearfix" />
    </div>
  );
};

UserListItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserListItem;
