import { combineReducers } from "redux";
import { photosReducer } from "./photosReducer";
import { postsReducer } from "./postsReducer";
import { photoReducer } from "./photoReducer"

//import and add more child reducers as your project builds.
// then I use that child in my component in mapStateToProps
export default combineReducers({
  photos: photosReducer,
  posts: postsReducer,
  photo: photoReducer
});