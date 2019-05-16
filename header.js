import React, { Component } from 'react';




class Header extends Component {
  
    render() { 
        return ( 
            <div className="app-header">
            <span className="title"></span>
            <input 
              type="text"
              className="searchInput"
              placeholder="Search..." />
            </div>
         );
    }
}
 
export default Header;