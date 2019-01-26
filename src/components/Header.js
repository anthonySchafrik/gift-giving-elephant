import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { handleInfo, LOG_IN_INFO } from '../actions';

const Header = props => {
  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/Account">
        <button>Account Setting</button>
      </Link>
      <Link to="/">
        <button
          onClick={() => {
            props.handleInfo('logedIn', false, LOG_IN_INFO);
          }}
        >
          Log Out
        </button>
      </Link>
    </div>
  );
};

const mapStateToProps = state => {
  const { logInInfo } = state;
  return { logInInfo };
};

export default connect(
  null,
  { handleInfo }
)(Header);
