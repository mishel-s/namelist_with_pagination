import React from 'react';

import {UserCard} from '../../components/UserCard';
import MDSpinner from "react-md-spinner";

import './styles.css';

export const UsersList = ({dataUsers, usersPerPage, curentPage}) => {
  let showUsersFrom = usersPerPage*(curentPage - 1);
  let showUsersTo = curentPage*usersPerPage;
  return (
    <div className="usersList">
      { dataUsers.length
        ? (dataUsers.slice(showUsersFrom, showUsersTo)).map((user)=> (
            <div className="userCard" key={user.id} id={user.id}>
              <UserCard 
                data={user}
              />
            </div>
          ))
        : !dataUsers.length
        ? <div><MDSpinner size={70} borderSize={3} /></div>
        : <span>нет пользователей</span>
      }
    </div>
  )
}