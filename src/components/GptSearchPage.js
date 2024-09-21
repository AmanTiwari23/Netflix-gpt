import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BACKGROUND } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearchPage = () => {
  return (
    <>
      <div className="-z-10 fixed">
        <img className="h-screen object-cover md:w-screen" src={BACKGROUND} alt="background" />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearchPage;
