import React, { Component } from 'react'

export default class Posts extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        this.fetchPosts();
    }

    fetchPosts = () => {
        fetch('http://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => this.setState({posts: posts}))
    }


    render() {
        return (
            <div>
                <h1 className="postsPageTitle">Today's Posts!</h1>
                <ul>
                    {this.state.posts.map(post => 
                    <li key={post.id}>
                        <p className="postTitle">{post.title}</p>
                        <p className="postBody">{post.body}</p></li>
                    )}
                </ul>
            </div>
        )
    }
}
