import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as githubActions from '../../../actions/githubActions';
import Search from './Search';

class SearchContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      searchTerm: ""
    };

    this.onSearch = this.onSearch.bind(this);
    this.onSearchTermChange = this.onSearchTermChange.bind(this);
  }

  onSearch(e) {
    this.props.actions.searchGitHubUsers(this.state.searchTerm);
  }

  onSearchTermChange(e) {
    this.setState({searchTerm: e.target.value});
  }

  render() {
    return (
      <Search
        {...this.props}
        {...this.state}
        onSearchTermChange={this.onSearchTermChange}
        onSearch={this.onSearch}
      />
    );
  }
}

SearchContainer.propTypes = {
  users: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    users: state.github.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(githubActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
