import { Button, Input } from "@material-tailwind/react";
import React from "react";
import { IoIosHeart, IoMdSend } from "react-icons/io";
import { Link } from "react-router-dom";
import useUserContext from "../../hooks/useUserContext";
import BlogUserProfile from "../blogUserProfile/BlogUserProfile";

const Movie = ({ movie }) => {
  const { user } = useUserContext();
  const [showComment, setShowComment] = React.useState(false);
  const {
    _id,
    title,
    image_url,
    category,
    short_description,
    long_description,
    user_name,
    user_email,
    profile_image,
    createdAt,
  } = movie;

  return (
    <div className="border shadow-sm">
      <BlogUserProfile
        createdAt={createdAt}
        profile_image={profile_image}
        user_email={user_email}
        user_name={user_name}
      />
      {/* user  post  */}
      <div className="p-4 rounded-md  flex gap-6  flex-col lg:flex-row">
        {/* image box  */}
        <div className="h-[300px] lg:w-[40%] w-full overflow-hidden">
          <Link to={`/blog-details/${_id}`}>
            <img src={image_url} className="h-full w-full " alt="" />
          </Link>
        </div>
        {/* content box  */}
        <div>
          <h4 className="text-xl my-2 font-semibold">{title}</h4>
          <p>{short_description}</p>
          <p>{long_description.slice(0, 70)}</p>
          <div className="my-3 ">
            <span className="p-2 rounded-sm text_third    bg-gray-100">
              #{category}
            </span>
          </div>
          {/* comment & wishlist   */}
          <div className="flex gap-6 ">
            <Link to={`/blog-details/${_id}`}>
              <button className="flex lg:basis-[70%] text_sec hover:font-medium duration-300 delay-300 ease-in  font-medium  my-2 items-center gap-1 border-2 border-gray-300 rounded-md p-2">
                View Details
              </button>
            </Link>
            <button className=" lg:basis-[30%] flex hover:font-medium duration-300 delay-300 ease-in hover:text-red-600 text-blue-400 my-2 items-center gap-1 border-2 border-gray-300 rounded-sm p-2">
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
    </div>
  );
};

export default Movie;
