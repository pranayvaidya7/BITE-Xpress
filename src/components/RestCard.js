import { CDN_URL } from "../utils/constants";

const RestCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, areaName, cloudinaryImageId } =
    resData?.info;
  return (
    <div
      data-testid="resCard"
      className="res-card m-4 p-4 w-[250px] h-[500px] bg-gray-200 rounded-lg hover:bg-gray-300 "
    >
      <img
        className="rounded-lg w-full object-cover"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{areaName}</h4>
    </div>
  );
};

// Higher Order Component
// input- RestaurantCard ===> RestCard
export const withPromotedLabel = (RestCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-700 text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestCard {...props} />
      </div>
    );
  };
};

export default RestCard;
