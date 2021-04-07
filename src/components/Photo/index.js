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
  console.log(picture);
  const match = useRouteMatch();
  const dispatch = useDispatch();

  const pictureLoadingFunc = () => {
    dispatch(pictureLoading());
  };
  const getData = (res) => {
    dispatch(pictureLoaded(res));
  };

  const pictureLoadingErrorFunc = (err) => {
    dispatch(pictureLoadingError(err));
  };

  useEffect(() => {
    pictureLoadingFunc();
    fetchPicture(match.params.id)
      .then((results) => {
        // console.log("results:", results);
        getData(results);
      })
      .catch((error) => {
        // console.log(error);
        pictureLoadingErrorFunc(error);
      });
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
