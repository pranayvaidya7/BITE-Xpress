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
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>

          <button onClick={handleSearch}>Search</button>
        </div>

        <button className="filter-btn" onClick={filterTopRated}>
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
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
