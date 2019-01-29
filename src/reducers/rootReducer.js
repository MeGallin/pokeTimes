const initState = {
  posts: [
    { id: '1', title: 'Title 1', body: 'Body one content' },
    { id: '2', title: 'Title 2', body: 'Body TWO content' },
    { id: '3', title: 'Title 3', body: 'Body THREE content' }
  ],
  age: 21
};

// This is to delete a post
const rootReducer = (state = initState, action) => {
  // console.log(action);

  if (action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id;
    });

    return {
      ...state,
      posts: newPosts
    };
  }

  if (action.type === 'AGE_UP') {
    let newAge = { ...state };
    newAge.age++;
    return {
      ...state,
      age: newAge
    };
  }

  if (action.type === 'AGE_DOWN') {
    let newAge = { ...state };
    newAge.age--;
    return {
      ...state,
      age: newAge
    };
  }

  return state;
};

export default rootReducer;
