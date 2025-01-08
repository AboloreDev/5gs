"use client";

import React from "react";
import Image from "next/image";

const ItemAddedToList = ({ item }) => {
  // destructuring item
  const { id, name, image } = item;
  return (
    <div>
      <div className="flex flex-col gap-3 py-2 w-[250px] h-[250px] flex-shrink-0">
        <Image
          src={image}
          alt={`${name} image`}
          width={200}
          height={200}
          className="object-cover rounded-lg"
        />
        {/* Item name */}
        <p className="text-sm font-medium ">{name}</p>
      </div>
    </div>
  );
};

export default ItemAddedToList;
