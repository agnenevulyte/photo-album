import React, { Component } from 'react'

export default class Photos extends Component {
    constructor() {
        super();
        this.state = {
            results: []
        }
    }

    componentDidMount() {
        this.fetchPictures();
    }

    fetchPictures = () => {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        // .then(results => console.log(results.results))
        .then(results => this.setState({ results: results.results }));
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.results.map(result =>
                    <li key={result.id}><img className="image-size" src={result.image}/></li>
                    )}
                </ul>
            </div>
        )
    }
}
