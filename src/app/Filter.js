import React, { Component } from 'react';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onChange(event)
    }

    render() {
        return (
            <div className="c-filter">
                <input type="text" value={this.props.filterValue} onChange={this.handleChange}/>
            </div>
        )
    }
}

export default Filter