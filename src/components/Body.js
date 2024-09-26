import RestCard from "./RestCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useBody from "../utils/useBody";

const Body = () => {
  const onlineStatus = useOnlineStatus();
  const {
    listOfRest,
    filterRest,
    searchText,
    setsearchText,
    handleSearch,
    filterTopRated,
  } = useBody();

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline !!! Chek your internet Connectivity !!!
      </h1>
    );
  }

  return listOfRest.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button className="px-4 bg-green-200 m-4 rounded-lg" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="search m-4 p-2 flex items-center">
          <button
            className="filter-btn px-4 py-2 bg-gray-200 rounded-lg"
            onClick={filterTopRated}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="res-container flex flex-wrap">
        {filterRest.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/rest/" + restaurant.info.id}>
            <RestCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
