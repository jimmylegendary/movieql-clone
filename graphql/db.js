let movies = [
  {
    id: "0",
    name: "Star Wars - The new one",
    score: 1
  },
  {
    id: "1",
    name: "Avengers - The new one",
    score: 8
  },
  {
    id: "2",
    name: "The Godfather I",
    score: 99
  },
  {
    id: "3",
    name: "Loga",
    score: 2
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredMovies = movies.filter(movie => movie.id === String(id));
  return filteredMovies[0];
}

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter(movie => movie.id !== String(id));
  if(movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
}

export const addMovie = (name, score) => {
  const newId = String(movies.length);
  const newMovie = {
    id: newId,
    name,
    score
  };
  movies.push(newMovie);
  console.log(movies);
  return newMovie;
}
