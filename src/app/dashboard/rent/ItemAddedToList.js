"use client";

import React from "react";
import Image from "next/image";

const ItemAddedToList = ({ item }) => {
  // destructuring item
  const { id, name, image } = item;
  return (
    <div>
      <div className="flex text-white flex-col gap-2 py-2 w-[250px] h-[250px] flex-shrink-0">
        <Image
          src={image}
          alt={`${name} image`}
          width={200}
          height={200}
          className="object-cover rounded-lg"
        />
        {/* Item name */}
        <p className="text-[12px] font-medium ">{name}</p>
      </div>
    </div>
  );
};

export default ItemAddedToList;
