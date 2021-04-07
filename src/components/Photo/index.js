import React, { useEffect } from "react";
import { fetchPicture } from "./fetchPicture";
import { connect } from "react-redux";
import {
  pictureLoaded,
  pictureLoading,
  pictureLoadingError,
} from "../../actions";
import { useRouteMatch } from "react-router-dom";

const Photo = ({
  pictureLoaded,
  pictureLoading,
  pictureLoadingError,
  picture,
  error,
  loading,
}) => {
  const match = useRouteMatch();
  useEffect(() => {
    pictureLoading();
    fetchPicture(match.params.id)
      .then((results) => {
        console.log("results:", results);
        pictureLoaded(results);
      })
      .catch((error) => {
        console.log(error);
        pictureLoadingError(error);
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

const mapStateToProps = ({ photo: { picture, loading, error } }) => ({
  picture,
  loading,
  error,
});

const mapDispatchToProps = {
  pictureLoaded,
  pictureLoading,
  pictureLoadingError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Photo);
