import React from "react";
import ReactDOM from "react-dom";
import MovieDetailsPage from './pages/movieDetailsPage'

const sample = {
  adult: false,
  backdrop_path: "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
  belongs_to_collection: {
    id: 10,
    name: "Star Wars Collection",
    poster_path: "/iTQHKziZy9pAAY4hHEDCGPaOvFC.jpg",
    backdrop_path: "/d8duYyyC9J5T825Hg7grmaabfxQ.jpg",
  },
  budget: 200000000,
  genres: [
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 28,
      name: "Action",
    },
  ],
  homepage:
    "https://www.starwars.com/films/star-wars-episode-viii-the-last-jedi",
  id: 181808,
  imdb_id: "tt2527336",
  original_language: "en",
  original_title: "Star Wars: The Last Jedi",
  overview:
    "When a virus threatens to turn the now earth-dwelling friendly alien hybrids against humans,Captain Rose Corley must lead a team of elite mercenaries on a mission to the alien world in order to save what's left of humanity",
  popularity: 44.208,
  poster_path: "/images/image1.jpg",
  production_companies: [
    {
      id: 1,
      image: "/images/image1.jpg",
      logo_path: "/o86DbpburjxrqAzEDhXZcyE8pDb.png",
      name: "Lucasfilm",
      origin_country: "US",
    },
    {
      id: 11092,
      logo_path: null,
      name: "Ram Bergman Productions",
      origin_country: "US",
    },
    {
      id: 2,
      image: "/images/image1.jpg",
      logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
      name: "Walt Disney Pictures",
      origin_country: "US",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America",
    },
  ],
  release_date: "2020-10-25",
  revenue: 0,
  runtime: 113,
  spoken_languages: [
    {
      iso_639_1: "en",
      name: "English",
    },
  ],
  status: "Released",
  tagline: "To save our world she must invade theirs.",
  title: "Skylines",
  video: false,
  vote_average: 5.7,
  vote_count: 178,
};

const movies = [sample, sample, sample, sample, sample, sample, sample];
const images = [
  "/2W4ZvACURDyhiNnSIaFPHfNbny3.jpg",
  "/ewMNLXgDyiyaBGdCzQqCF8hKWy2.jpg",
  "/gsRYOoyIma62VvGs4mkG0Qlv2ws.jpg",
  "/iEWQ6Lu4vStyCH4lFNnPzNk64BE.jpg",
]
const App = () => {
  return (
      <MovieDetailsPage movie={sample} images={images} />
      );
};
ReactDOM.render(<App />, document.getElementById("root"));