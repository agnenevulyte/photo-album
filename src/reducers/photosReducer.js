export const photosReducer = (state = [], action) => {
  
    switch (action.type) {
      case "PHOTOS_LOADED":
        return [...action.photos]
        
  
      //define more cases as your project builds.
      default:
        return state;
    }
  };