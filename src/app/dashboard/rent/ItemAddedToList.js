"use client";

import React from "react";
import Image from "next/image";

const ItemAddedToList = ({ item }) => {
  // destructuring item
  const { id, name, image } = item;
  return (
    <div>
      <div className="flex flex-col gap-2 py-2 w-[300px] h-[300px] flex-shrink-0">
        <Image
          src={image}
          alt={`${name} image`}
          width={300}
          height={300}
          className="object-cover rounded-lg"
        />
        {/* Item name */}
        <p className="text-lg font-medium text-center">{name}</p>
      </div>
    </div>
  );
};

export default ItemAddedToList;
