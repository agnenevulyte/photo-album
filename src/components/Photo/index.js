import React, { Component } from 'react'
import { fetchPicture } from './fetchPicture'
import { connect } from 'react-redux'
import { pictureLoaded, pictureLoading, pictureLoadingError } from '../../actions' 

class Photo extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
        //     picture: {},
        //     loading: true,
        //     error: null 
        // }
    }

    componentDidMount() {
        this.props.pictureLoading();
        fetchPicture(this.props.match.params.id)
        .then(results => {
            console.log('results:', results);
            this.props.pictureLoaded( 
                results
            )
        })
        .catch(error => {
            console.log(error)
            this.props.pictureLoadingError(
                error
            )
        })
    }
  
    render() {
        const { picture, loading, error } = this.props;
        if (loading) return 'Loading...'
        if (error) return  `Error! ${error.message}`
        if (!picture.id) return 'No photo!'
        return (
            <div>
                <img src={picture.image} alt={picture.id}/>
                <h4>{picture.name}</h4>
                <p>{picture.status}</p>
            </div>
        )
    }
}


const mapStateToProps = ({photo:{picture, loading, error}}) => ({
    picture,
    loading,
    error
})
const mapDispatchToProps ={
    pictureLoaded,
    pictureLoading,
    pictureLoadingError

}

export default connect(mapStateToProps, mapDispatchToProps)(Photo)