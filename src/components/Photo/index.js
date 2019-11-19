import React, { Component } from 'react'

export default class Photo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.match.params.id,
            image: [],
            name: '',
            status: ''
        }
        // console.log(this.state.id)
    }

    componentDidMount() {
        this.fetchPicture();
    }
    // getting id through props-match-params
    fetchPicture = () => {
        fetch(`https://rickandmortyapi.com/api/character/${this.state.id}/`)
        .then(response => response.json())
        .then(results => {
            console.log(results);
            this.setState({ 
                image: results.image,
                name: results.name,
                status: results.status
            })
        })
    }

    render() {
        return (
            <div>
                <img src={this.state.image} alt={this.state.id}/>
                <h4>{this.state.name}</h4>
                <p>{this.state.status}</p>
            </div>
        )
    }
}
