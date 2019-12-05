// not limited to only one argument
// we have a property like itemId, when we want to update the state
import { setActionTypes } from "./constants";
export const photosLoaded = photos => ({
    type: setActionTypes.PHOTOS_LOADED,
    photos
  });
  
