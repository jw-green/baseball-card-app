import React from 'react';
import PropTypes from 'prop-types';

const NavItem = ({link, title}) => {
    return (
        <a href={link} className="c-nav_item">{title}</a>
    )
}

NavItem.propTypes = {
    link: PropTypes.string,
    title: PropTypes.string.isRequired
}

export default NavItem