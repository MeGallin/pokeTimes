const initState = {
  posts: [
    { id: "1", title: "Title 1", body: "Body one content" },
    { id: "2", title: "Title 2", body: "Body TWO content" },
    { id: "3", title: "Title 3", body: "Body THREE content" }
  ]
};

const rootReducer = (state = initState, action) => {
  console.log(action);
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id;
    });
    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};

export default rootReducer;
