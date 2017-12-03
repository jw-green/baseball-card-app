import React from 'react';
import PropTypes from 'prop-types';

const NavItem = ({link, title}) => {
    return (
        <a className="c-nav__item" href={link}>{title}</a>
    )
}

NavItem.propTypes = {
    link: PropTypes.string,
    title: PropTypes.string.isRequired
}

export default NavItem