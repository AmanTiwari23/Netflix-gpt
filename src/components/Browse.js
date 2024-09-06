import React from "react";
import Header from "./Header";

import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../customhook/useNowPlayingMovies";
import usePopularMovies from "../customhook/usePopularMovies";


const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  
  return (
    <div className="w-screen">
      <Header />
      <MainContainer/>
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
