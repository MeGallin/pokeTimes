const initState = {
  aboutPosts: [
    { id: "1", title: "About 1", body: "About one content" },
    { id: "2", title: "About 2", body: "About TWO content" },
    { id: "3", title: "About 3", body: "About THREE content" }
  ]
};

const aboutReducer = (state = initState, action) => {
  console.log(action);
  return state;
};

export default aboutReducer;
