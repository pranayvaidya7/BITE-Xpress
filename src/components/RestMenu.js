import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestMenu from "../utils/useRestMenu";
import ResCategory from "./ResCategory";
import UserContext from "../utils/UserContext";

const RestMenu = () => {
  const { resId } = useParams();
  const restInfo = useRestMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (restInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwo } = restInfo?.cards[2].card?.card?.info;

  const userData  = useContext(UserContext)
  const { itemCards } =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  const categories =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} -₹ {costForTwo / 100}
      </p>
      {categories.map((category, index) => (
        <ResCategory
          key={category?.card?.card.categories[0].itemCards[0].card.info.id}
          data={category?.card?.card}
          showItems= {index === showIndex? true : false }
          setShowIndex= {() =>setShowIndex(index === showIndex ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestMenu;
