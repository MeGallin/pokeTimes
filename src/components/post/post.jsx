import React, { Component } from "react";
// import axios from "axios";
import { connect } from "react-redux";
import { deletePost } from "../../actions/PostActions";

class Post extends Component {
  // state = {
  //   post: null
  // };
  // componentDidMount() {
  //   // console.log(this.props);
  //   let id = this.props.match.params.post_id;
  //   axios.get("https://jsonplaceholder.typicode.com/posts/" + id).then(res => {
  //     this.setState({
  //       post: res.data
  //     });
  //     console.log(res);
  //   });
  // }

  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push("/"); // This redirect to home page
  };

  render() {
    console.log(this.props);

    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>
            DELETE POST
          </button>
        </div>
      </div>
    ) : (
      <div className="center">Loading Post ..</div>
    );

    return <div className="container">{post}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id === id)
  };
};

// If you want to make changes to store you need to dispatch them.

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => {
      dispatch(deletePost(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
