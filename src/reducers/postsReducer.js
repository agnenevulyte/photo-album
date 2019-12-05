export const postsReducer = (state = [], action) => {
  
    switch (action.type) {
      case "POSTS_LOADED":
        return [...action.posts]
        
  
      //define more cases as your project builds.
      default:
        return state;
    }
  };