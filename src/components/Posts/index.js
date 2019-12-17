import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { postsLoaded } from "../../actions";

const Posts = ({ postsLoaded, posts }) => {
  useEffect(() => {
    fetchPosts();
  });
  const fetchPosts = () => {
    fetch("http://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(posts => postsLoaded(posts));
  };
  return (
    <div>
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          {/* <Form.Label>Add a new Post</Form.Label> */}
          <Form.Control as="textarea" placeholder="Add a new Post" rows="3" />
        </Form.Group>
      </Form>
      <h1 className="postsPageTitle">Today's Posts!</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <p className="postTitle">{post.title}</p>
            <p className="postBody">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ posts }) => ({
  posts
});

const mapDispatchToProps = {
  postsLoaded
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
