import React from 'react';

import './styles.css';

export const UserCard = ( {data: {name, surname, desc}} ) => {
  return (
    <React.Fragment>
      <div className="personalInfo">
        <div>Name: <span>{name}</span></div>
        <div>Surname: <span>{surname}</span></div>
      </div>
      <div className="desc">
       {desc}
      </div>
    </React.Fragment>
  )
}