import React from "react";
import Header from "./Header";
import useAddMovies from "../customhook/useAddMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {

  useAddMovies();
  
  return (
    <div>
      <Header />
      <MainContainer/>
      {/* <SecondaryContainer/>  */}
    </div>
  );
};

export default Browse;
