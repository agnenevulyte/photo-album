import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { photosLoaded } from "../../actions";

const Photos = ({ photosLoaded, photos }) => {
  useEffect(() => {
    fetchPictures();
  });
  const fetchPictures = () => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then(response => response.json())
      // .then(results => console.log(results.results))
      .then(results => photosLoaded(results.results));
  };
  return (
    <div className="pictures flex">
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
            <Link to={`/photos/${photo.id}`}>
              <img alt={photo.id} className="image-size" src={photo.image} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ photos }) => ({
  photos
});

const mapDispatchToProps = {
  photosLoaded
};

export default connect(mapStateToProps, mapDispatchToProps)(Photos);
