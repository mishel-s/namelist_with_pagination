import React, { Component } from 'react';
import {connect} from "react-redux";

import {UsersList} from '../UsersList';
import {PaginationList} from '../PaginationList';

import { getDataUsers } from '../../store/actions/getDataUsers';

import './styles.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersPerPage: 5,
      curentPage: 1
    }
  }

  componentDidMount() { 
    this.props.onGetDataUsers();
  }

  setCurentPage = (value) => {
    this.setState({
      curentPage: value
    })
  } 

  getPagesQuantity = (dataUsers, usersPerPage) => {
    let pages = Math.ceil(dataUsers/usersPerPage);
    let arrayQuantityPages = [];
    for (let i = 1; i <= pages; i++) {
      arrayQuantityPages.push(i);
    }
    return arrayQuantityPages;
  }

  render() {
    return (
      <main>
        <h1>USERS LIST</h1>
        <UsersList
          dataUsers={this.props.dataUsers}
          usersPerPage={this.state.usersPerPage}
          curentPage={this.state.curentPage}
        />
        { this.props.dataUsers.length
          ? <PaginationList 
              curentPage={this.state.curentPage}
              setCurentPage={this.setCurentPage}
              pagesQuantity={
                this.getPagesQuantity(this.props.dataUsers.length, this.state.usersPerPage)
              }
            />
          : true
        }
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