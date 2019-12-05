import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {photosLoaded} from '../../actions'

class Photos extends Component {
    constructor() {
        super();
        // this.state = {
        //     results: []
        // }
    }

    componentDidMount() {
        this.fetchPictures();
    }

    fetchPictures = () => {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        // .then(results => console.log(results.results))
        .then(results => this.props.photosLoaded(results.results));
    }

    render() {
        // console.log('porps   ', this.props)
        return (
            <div className="pictures flex">
                <ul>
                    {this.props.photos.map(photo =>
                    <li key={photo.id}><Link to={`/photos/${photo.id}`}><img alt={photo.id} className="image-size" src={photo.image}/></Link></li>
                    )}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({photos}) => ({
    photos
}) 

const mapDispatchToProps = {
    photosLoaded
}

export default connect(mapStateToProps, mapDispatchToProps)(Photos)