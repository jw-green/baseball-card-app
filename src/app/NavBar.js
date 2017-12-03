import React from 'react';
import NavItem from './NavItem.js';
import Filter from '../app/Filter.js';
import PageTitle from '../components/PageTitle.js'
import '../styles/navbar.css';

const NavBar = ({ filterValue, onChange }) => {
    return (
        <div className="c-navbar">
          <ul className="c-navbar__items">
            <div>
              <NavItem link="." title="🏠"/>
              <PageTitle title="Baseball Cards"/>
            </div>
            <Filter filterValue={filterValue} onChange={onChange}/>
          </ul>
        </div>
    )
}

export default NavBar