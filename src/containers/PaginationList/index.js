import React from 'react';

import './styles.css';

export const PaginationList = ( 
    {curentPage, setCurentPage, pagesQuantity} 
  ) => {
  return (
    <div className="paginationList">
      { pagesQuantity
        ? pagesQuantity.map((page)=> (
            <div key={page} onClick={ () => { setCurentPage(page) } }>
              <div className={"pageNumber" + (curentPage === page ? " active" : "")}>
                {page}
              </div>
            </div>
          ))
        : true
      }
    </div>
  )
}

