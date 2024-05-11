import { Button, Input } from "@material-tailwind/react";
import React from "react";
import { IoIosHeart, IoMdSend } from "react-icons/io";
import useUserContext from "../../hooks/useUserContext";

const Movie = ({ movie }) => {
  const { user } = useUserContext();
  const [showComment, setShowComment] = React.useState(false);
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

        <div className="flex gap-2 my-3 ">
          {categories?.map((item) => (
            <div className=" p-2 rounded-sm text_third bg-gray-100" key={item}>
              # {item}
            </div>
          ))}
        </div>
        {/* comment & wishlist   */}
        <div className="flex gap-6 ">
          <button className="flex hover:font-medium duration-300 delay-300 ease-in  font-medium  my-2 items-center gap-1 border-2 border-gray-300 rounded-md p-2">
            View Details
          </button>
          <button className=" basis-[30%] flex hover:font-medium duration-300 delay-300 ease-in hover:text-red-600 text-blue-400 my-2 items-center gap-1 border-2 border-gray-300 rounded-sm p-2">
            <IoIosHeart className="text-xl" />
            <span className="">Add To Wishlist</span>
          </button>
        </div>
        {/* comment input  box  */}
        <div className="relative flex w-full max-w-[24rem]">
          <Input variant="static" placeholder="comment..." />
          <Button
            size="sm"
            color={"blue"}
            // disabled={!user}
            className="!absolute right-1 top-1 rounded"
          >
            <IoMdSend className="text-lg" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
