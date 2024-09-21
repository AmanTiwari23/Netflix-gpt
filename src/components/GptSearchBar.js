import React, { useRef } from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMoviesResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      "only give me name of 5 movies, comma seperated like the example given ahead. Example Reasult : OMG 2, Don, Animal, Krish, Stree-2";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    console.log(gptResults.choices?.message?.content);

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    const promiseArray =  gptMovies.map((movie)=> searchMovieTMDB(movie));

    const tmdbResults =await Promise.all(promiseArray);
    
    dispatchEvent(addGptMoviesResult({movieNames:gptMovies, moviesResults:tmdbResults}));
  };

  return (
    <div className="pt-[35%] md:pt-[8%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black  grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className=" m-4 py-2 px-4 bg-red-700 rounded-lg col-span-3 text-white"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
