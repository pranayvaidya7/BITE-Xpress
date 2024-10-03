import RestCard, { withPromotedLabel } from "./RestCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useBody from "../utils/useBody";
import { withPromotedLabel } from "./RestCard";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestCardPromoted = withPromotedLabel(RestCard);
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
  const { logInUser, setUserName } = useContext(UserContext);
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
          <button
            className="px-4 bg-green-200 m-4 rounded-lg"
            onClick={handleSearch}
          >
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
        <div className="search m-4 p-2 flex items-center">
          <label>UserName: </label>
          <input
            className="border border-black p-2"
            value={logInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></input>
        </div>
      </div>

      <div className="res-container flex flex-wrap">
        {filterRest.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/rest/" + restaurant.info.id}>
            {restaurant.info.isOpen ? (
              <RestCardPromoted resData={restaurant} />
            ) : (
              <RestCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
