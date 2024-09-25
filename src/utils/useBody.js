import React from "react";
import { useState, useEffect } from "react";
const useBody = () => {
  const [listOfRest, setListOfRest] = useState([]);
  const [filterRest, setfilterRest] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const rest =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRest(rest || []);
    setfilterRest(rest || []);
  };

  const handleSearch = () => {
    const filtered = listOfRest.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setfilterRest(filtered);
  };

  const filterTopRated = () => {
    const topRated = listOfRest.filter((res) => res.info.avgRating > 4.3);
    setfilterRest(topRated);
  };
  return {
    listOfRest,
    filterRest,
    searchText,
    setsearchText,
    handleSearch,
    filterTopRated
  };
};

export default useBody;
