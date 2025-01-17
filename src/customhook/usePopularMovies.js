import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {addPopularMovies} from "../utils/moviesSlice"

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popular = useSelector((store)=> store.movies.popularMovies)
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    if(!popular) getPopularMovies();
  }, []);
};

export default usePopularMovies;
