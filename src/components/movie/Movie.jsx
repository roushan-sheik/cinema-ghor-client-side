import { Button } from "@material-tailwind/react";
import React from "react";
import { IoIosHeart } from "react-icons/io";
const Movie = ({ movie }) => {
  const { title, image, categories, short_desc, description } = movie;
  return (
    <div className="p-4 rounded-md border flex gap-6 shadow-sm">
      {/* image box  */}
      <div className="h-[300px] w-[40%] overflow-hidden">
        <img src={image} className="h-full w-full " alt="" />
      </div>
      {/* content box  */}
      <div>
        <h4 className="text-xl my-2 font-semibold">{title}</h4>
        <p>{short_desc}</p>
        <p>{description.slice(0, 70)}</p>
        <div>
          <button className="flex hover:text-red-600 text-blue-400 my-2 items-center gap-1 border-2 border-gray-300 rounded-sm p-2">
            <IoIosHeart className="text-xl" />
            <span>Add To Wishlist</span>
          </button>
        </div>
        <div className="flex gap-2 ">
          {categories?.map((item) => (
            <Button className=" text_third bg-gray-100" key={item}>
              {item}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movie;
