import React, { Component } from "react";
import { connect } from "react-redux";

class AboutComponent extends Component {
  state = {};
  render() {
    console.log(this.props.aboutPosts);
    const { aboutPosts } = this.props;
    const postList = aboutPosts.length ? (
      aboutPosts.map(post => {
        return (
          <div className="post" key={post.id}>
            <div className="">
              <h4 className="center">
                <span>{post.pageTitle}</span>
              </h4>
              <span>{post.title}</span>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No post yet!</div>
    );

    return <div className="container">{postList}</div>;
  }
}

// This function maps your component to the store
const mapStateToProps = state => {
  return {
    aboutPosts: state.aboutPosts
  };
};

export default connect(mapStateToProps)(AboutComponent);
