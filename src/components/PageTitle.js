import React from 'react'
import '../styles/pageTitle.css';

const PageTitle = ({ title }) => {
    return (
        <p className="c-page_title"> {title} </p>
    )
}

export default PageTitle