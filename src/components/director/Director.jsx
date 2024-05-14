import React from "react";

const Director = ({ singleDirector }) => {
  const { id, name, image, bio } = singleDirector;
  return (
    <div className="border-2 p-6 flex flex-col items-center rounded-md">
      {/* imagebox */}
      <div className="h-[300px]  w-full ring-4 rounded-lg">
        <img
          className="h-full w-full  object-top  rounded-lg 
          "
          src={image}
          alt="Director"
        />
      </div>
      {/* content box  */}
      <div>
        <h2 className="text-xl mt-4 font-semibold mb-2">{name}</h2>
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default Director;
