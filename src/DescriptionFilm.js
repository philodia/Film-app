import React from 'react';
import { Link } from 'react-router-dom';

const DescriptionFilm = ({ location }) => {
  const { titre, description, bandeAnnonceURL } = location.state.film;

  return (
    <div className="description-film">
      <h2>{titre}</h2>
      <p>{description}</p>
      <iframe
        title="Bande-annonce"
        width="560"
        height="315"
        src={bandeAnnonceURL}
        frameborder="0"
        allowfullscreen
      ></iframe>
      <Link to="/">Retour à la liste</Link>
    </div>
  );
};

export default DescriptionFilm;
