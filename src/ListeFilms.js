import React from 'react';

const ListeFilms = () => {
  // Define and assign a value to the "films" variable
  const films = [
    { title: 'Film 1', description: 'Description 1', posterURL: 'url1', note: 4.5 },
    { title: 'Film 2', description: 'Description 2', posterURL: 'url2', note: 3.8 },
    // ...other film objects
  ];

  return (
    <div>
      {/* Use the "films" variable in your JSX */}
      {films.map((film, index) => (
        <div key={index}>
          <h2>{film.title}</h2>
          <p>{film.description}</p>
          {/* ...other film details */}
        </div>
      ))}
    </div>
  );
};

export default ListeFilms;