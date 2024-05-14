import React from "react";
import { CiLocationOn } from "react-icons/ci";

const Hall = ({ hall }) => {
  const { id, name, image, location, description } = hall;

  return (
    <div className="border-2 p-4 rounded-md">
      <h2 className="font-semibold text-lg">{name}</h2>
      <div className="flex gap-1 text_third items-center">
        <CiLocationOn />
        <p className="">{location}</p>
      </div>
      {/* image box  */}
      <div className="h-[300px]">
        <img className="h-full w-full object-cover" src={image} alt="" />
      </div>
      <p className="my-2">{description}</p>
    </div>
  );
};

export default Hall;
