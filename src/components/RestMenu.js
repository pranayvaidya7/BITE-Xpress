import React from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestMenu from "../utils/useRestMenu";

const RestMenu = () => {
  const { resId } = useParams();
  const restInfo = useRestMenu(resId);
  
  if (restInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwo } = restInfo?.cards[2].card?.card?.info;

  const { itemCards } =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  console.log(itemCards);

  return (
    <div className="Menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} -₹ {costForTwo / 100}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} --₹ {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestMenu;
