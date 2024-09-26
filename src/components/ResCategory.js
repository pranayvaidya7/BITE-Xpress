import React, { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = ({ data, showItems, setShowIndex }) => {
  //   //   console.log(data);
  //   const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data.title} ({data?.categories[0]?.itemCards?.length})
        </span>
        <span>🔽</span>
      </div>
      {showItems && <ItemList items={data.categories[0].itemCards} />}
    </div>
  );
};

export default ResCategory;
