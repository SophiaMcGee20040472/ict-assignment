import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MovieReviewPage from "./pages/movieReviewPage";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import UpcomingMoviePage from "./pages/upcomingMovies";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import SiteHeader from "./components/siteHeader";
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
import TopRatedPage from "./pages/topRatedMovies";
import PopularMoviePage from "./pages/popularMovies";
import WatchListPage from "./pages/watchlist";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        
        <MoviesContextProvider>
          <Routes>
            <Route path="/reviews/form" element={<AddMovieReviewPage  />} />
            <Route path="/reviews/:id" element={<MovieReviewPage />} />
            <Route path="/movies/upcoming" element={<UpcomingMoviePage />} />
            <Route path="/movies/top-rated" element={<TopRatedPage />} />
            <Route path="/movies/popular" element={<PopularMoviePage />} />
            <Route path="/movies/watchlist" element={<WatchListPage />} />
            <Route path="/movies/favourites"element={<FavouriteMoviesPage />}/>
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
