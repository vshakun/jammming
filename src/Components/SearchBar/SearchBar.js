import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);

        this.state = {
            term: ''
        };

        const stateMatch = window.location.href.match(/state=([^&]*)/);
        if (stateMatch) {
            this.state.term = decodeURI(stateMatch[1]);
            console.log('State found, value:', this.state.term);
            this.search();
        }
    }

    search() {
        this.props.onSearch(this.state.term);
    }

    handleTermChange(event) {
        this.setState({term: event.target.value});
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.search(); 
        }
    }

    render() {
        return (
        <div className="SearchBar">
            <input onChange={this.handleTermChange} onKeyUp={this.handleKeyPress.bind(this)} placeholder="Enter A Song, Album, or Artist" value={this.state.term} />
            <button className="SearchButton" onClick={this.search}>SEARCH</button>
        </div>
        );
    }
}

