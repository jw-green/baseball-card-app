import React, { Component } from 'react'
import NavBar from '../app/NavBar.js'
import CardList from '../components/CardList.js'
import data from '../data/index'

class App extends Component {
    constructor() {
        super();
        this.state = {
            filter: '',
            items: data
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({filter: event.target.value})
    }

    render() {
        const { items, filter } = this.state;

        return (
            <div className="wrapper">
                <NavBar filterValue={filter} onChange={this.handleChange}/>
                <CardList list={items} filter={filter}/>
            </div>
        )
    }
}

export default App