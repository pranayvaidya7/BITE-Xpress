import { CDN_URL } from "../utils/constants";
const RestCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, areaName, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#D3D3D3" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{areaName}</h4>
    </div>
  );
};
export default RestCard;
