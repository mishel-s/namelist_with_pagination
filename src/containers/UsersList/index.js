import React, { Component } from 'react';

import {UserCard} from '../../components/UserCard';

import './styles.css';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUsers: []
    }
  }

  getArrUsers = (dataUsers) => {
    let arrayUsers = [];
    for (let i = 0; i < dataUsers.length; i++) {
      arrayUsers.push(this.props.dataUsers[i]);
    }
    this.setState({
      dataUsers: arrayUsers
    })
    return arrayUsers
  }

  render() {
    return (
      <div className="usersList">
        { this.props.dataUsers.length
          ? (this.props.dataUsers.slice(0, this.props.usersPerPage)).map((user)=> (
              <div className="userCard" key={user.id} id={user.id}>
                <UserCard 
                  data={user}
                />
              </div>
            ))
          : <span>нет пользователей</span>
        }
      </div>
    )
  }
} 

export default UsersList;