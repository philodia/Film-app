import React from 'react';

const FilmCard = ({ film, onFilmClick }) => {
  const { titre, description, posterURL, note } = film;

  return (
    <div className="film-card" onClick={() => onFilmClick(film)}>
      <img src={posterURL} alt={titre} />
      <h3>{titre}</h3>
      <p>{description}</p>
      <p>Note : {note}</p>
    </div>
  );
};

export default FilmCard;
