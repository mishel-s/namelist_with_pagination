import React from 'react';

import './styles.css';

export const Footer = () => {
  return (
    <footer>
      <div className="footer_contacts">
        <span>Created by Mishel</span>
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