import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

// normal JS variable
let listOfRestaurantJS = [
  {
    info: {
      id: "426730",
      name: "Anna",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/ab4cf213-bee8-45ba-9b80-2607d981885f_426730.jpg",
      cuisines: ["Desserts", "Bakery", "Beverages"],
      costForTwo: "₹400 for two",
      areaName: "Ashok Nagar",
      avgRating: 5.8,
    },
  },
  {
    info: {
      id: "426731",
      name: "Surya",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/ab4cf213-bee8-45ba-9b80-2607d981885f_426730.jpg",
      cuisines: ["Desserts", "Bakery", "Beverages"],
      costForTwo: "₹400 for two",
      areaName: "Ashok Nagar",
      avgRating: 4.0,
    },
  },
  {
    info: {
      id: "426733",
      name: "Shyam",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/ab4cf213-bee8-45ba-9b80-2607d981885f_426730.jpg",
      cuisines: ["Desserts", "Bakery", "Beverages"],
      costForTwo: "₹400 for two",
      areaName: "Ashok Nagar",
      avgRating: 4.6,
    },
  },
  {
    info: {
      id: "426739",
      name: "BabuRao",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/ab4cf213-bee8-45ba-9b80-2607d981885f_426730.jpg",
      cuisines: ["Desserts", "Bakery", "Beverages"],
      costForTwo: "₹400 for two",
      areaName: "Ashok Nagar",
      avgRating: 3.9,
    },
  },
  {
    info: {
      id: "426734",
      name: "woww",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/ab4cf213-bee8-45ba-9b80-2607d981885f_426730.jpg",
      cuisines: ["Desserts", "Bakery", "Beverages"],
      costForTwo: "₹400 for two",
      areaName: "Ashok Nagar",
      avgRating: 4.5,
    },
  },
];

const Body = () => {
  //Local state Variable - super powerful variable
  const [listOfRestaurant, setlistOfRestaurant] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredLst = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.5
            );
            setlistOfRestaurant (filteredLst);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
