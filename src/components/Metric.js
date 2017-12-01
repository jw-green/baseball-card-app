import React from 'react';
import PropTypes from 'prop-types';

const Metric = ({ stat_name, stat_value }) => {
    return (
        <div className="c-metric">
            <p className="c-metric__stat-name">{stat_name}</p>
            <p className="c-metric__stat-value">{stat_value}</p>
        </div>
    )
}

export default Metric