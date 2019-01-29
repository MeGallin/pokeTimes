import React, { Component } from 'react';
// import axios from "axios";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
  // state = {
  //   posts: []
  // };
  // componentDidMount() {
  //   axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
  //     this.setState({
  //       posts: res.data.slice(0, 20)
  //     });
  //   });
  // }
  render() {
    console.log(this.props);
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        // console.log(post.id);
        return (
          <React.Fragment key={post.id}>
            <div className="post card">
              <div className="card-content">
                <Link to={'/' + post.id}>
                  <span className="card-title">{post.title}</span>
                </Link>
                <p>{post.body}</p>
              </div>
            </div>
          </React.Fragment>
        );
      })
    ) : (
      <div className="center">No post yet!</div>
    );

    return (
      <div className="container">
        <h4 className="center">Home </h4>

        {postList}
      </div>
    );
  }
}

// This function maps your component to the store
const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Home);
