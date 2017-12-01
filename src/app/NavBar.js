import React from 'react';
import NavItem from './NavItem.js';
import Filter from '../app/Filter.js';

const NavBar = ({ filterValue, onChange }) => {
    return (
        <div className='c-nav_bar'>
            <Filter filterValue={filterValue} onChange={onChange}/>
            <NavItem link="." title="Home"/>
        </div>
    )
}

export default NavBar