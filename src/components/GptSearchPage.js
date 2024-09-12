import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BACKGROUND } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BACKGROUND} alt="background"/>
      </div>
      <GptSearchBar />
      <GptMovieSuggestions/> 
    </div>
  );
};

export default GptSearchPage;
