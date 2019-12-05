import { combineReducers } from "redux";
import { photosReducer } from "./photosReducer";
// import { usernameReducer } from "./usernameReducer";

//import and add more child reducers as your project builds.
// then I use that child in my component in mapStateToProps
export default combineReducers({
  photos: photosReducer
//   user: usernameReducer
});