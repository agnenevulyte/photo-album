import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
        console.log('porps   ', this.props)
        return (
            <div className="pictures flex">
                <ul>
                    {this.state.results.map(result =>
                    <li key={result.id}><Link to={`/photos/${result.id}`}><img alt={result.id} className="image-size" src={result.image}/></Link></li>
                    )}
                </ul>
            </div>
        )
    }
}
