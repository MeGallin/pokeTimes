import axios from 'axios';

const initState = {
  posts: [
    { id: '1', title: 'Title 1', body: 'Body one content' },
    { id: '2', title: 'Title 2', body: 'Body TWO content' },
    { id: '3', title: 'Title 3', body: 'Body THREE content' }
  ],
  aboutPosts: [
    { id: 1, pageTitle: 'About' },
    { id: 2, title: 'About 1', body: 'About content ONE' },
    {
      id: 3,
      title: 'About 2',
      body:
        "I have a .txt file in my Angular 4 project directory and I want to read its content. How to do it ? Below is the code which I employed. The file is in 'files' folder which is inside the 'app' folder. The component where i have HTTPClient code is in 'httpclient' folder which is inside 'app' folder. Meaning 'files' folder and 'httpclient' folder are children."
    },
    { id: 4, title: 'About 3', body: 'About content THREE 3' }
  ]
};

// This is to delete a post
const rootReducer = (state = initState, action) => {
  //console.log(action);
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
