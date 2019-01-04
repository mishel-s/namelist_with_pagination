import React, { Component } from 'react';
import {connect} from "react-redux";

import UsersList from '../containers/UsersList';
import {PaginationList} from '../containers/PaginationList';

import { getDataUsers } from '../../store/actions/getDataUsers';

import './styles.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUsers: []
    }
  }

  componentDidMount() { 
    this.props.onGetDataUsers();
  }

  render() {
    return (
      <main>
        <h1>USERS LIST</h1>
        <UsersList
          dataUsers={this.props.dataUsers}
          usersPerPage={5}
        />
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dataUsers: state.info.dataUsers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetDataUsers: () => {
      dispatch(getDataUsers());
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(Main);