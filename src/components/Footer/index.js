import React from 'react';

import './styles.css';

export const Footer = () => {
  return (
    <footer>
      <div className="">Created by Mishel</div> 
      <div className="footer_contacts">
        <a target="_blank"  
           rel="noopener noreferrer" 
           href="mailto:msavastru@gmail.com">
            msavastru@gmail.com
        </a>
        <a href="tel:+380934366454" 
           target="_blank" 
           rel="noopener noreferrer">
            +38 (093) 436-64-54
        </a>
      </div>
    </footer>
  )
}