// not limited to only one argument
// we have a property like itemId, when we want to update the state
import { setActionTypes } from "./constants";

// for Photos/index.js
export const photosLoaded = photos => ({
    type: setActionTypes.PHOTOS_LOADED,
    photos
});
 
// for Posts/index.js
export const postsLoaded = posts => ({
  type: setActionTypes.POSTS_LOADED,
  posts
});

// for Photo/index.js
export const pictureLoaded = picture => ({
  type: setActionTypes.PICTURE_LOADED,
  picture
});
export const pictureLoading = () => ({
  type: setActionTypes.PICTURE_LOADING,
});
export const pictureLoadingError = () => ({
  type: setActionTypes.PICTURE_LOADING_ERROR,
});