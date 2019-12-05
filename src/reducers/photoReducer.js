const initialState = {
  picture: {},
  loading: true,
  error: null 
}
export const photoReducer = (state = initialState, action) => {
  
    switch (action.type) {
      case "PICTURE_LOADED":
        return {
          // takes everything from initialState what is not changing
          ...initialState, 
          picture: action.picture, 
          loading: false
        }
      case "PICTURE_LOADING":
        return {
          ...initialState
        }
      case "PICTURE_LOADING_ERROR":
        return {
          ...initialState, 
          loading: false, 
          error: action.error
        }
      //define more cases as your project builds.
      default:
        return state;
    }
  };