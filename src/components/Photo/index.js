import React, { useEffect } from "react";
import { fetchPicture } from "./fetchPicture";
import { useSelector, useDispatch } from "react-redux";
import {
  pictureLoaded,
  pictureLoading,
  pictureLoadingError,
} from "../../actions";
import { useRouteMatch } from "react-router-dom";

const Photo = () => {
  const { photo } = useSelector((state) => ({
    photo: state.photo,
  }));

  const { picture, loading, error } = photo;
  const match = useRouteMatch();
  const dispatch = useDispatch();

  const pictureLoadingFunc = () => {
    dispatch(pictureLoading());
  };
  const pictureLoadedFunc = (res) => {
    dispatch(pictureLoaded(res));
  };

  const pictureLoadingErrorFunc = (err) => {
    dispatch(pictureLoadingError(err));
  };

  const getData = () => {
    pictureLoadingFunc();
    fetchPicture(match.params.id)
      .then((results) => {
        // console.log("results:", results);
        pictureLoadedFunc(results);
      })
      .catch((error) => {
        pictureLoadingErrorFunc(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  if (!picture.id) return "No photo!";

  return (
    <div>
      <img src={picture.image} alt={picture.id} />
      <h4>{picture.name}</h4>
      <p>{picture.status}</p>
    </div>
  );
};

export default Photo;
