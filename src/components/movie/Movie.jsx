import { Button, Input } from "@material-tailwind/react";
import axios from "axios";
import React from "react";
import { IoIosHeart, IoMdSend } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import useUserContext from "../../hooks/useUserContext";
import BlogUserProfile from "../blogUserProfile/BlogUserProfile";

const Movie = ({ movie }) => {
  const { user } = useUserContext();
  const [commentText, setCommentText] = React.useState("");
  const navigate = useNavigate();
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
  function handleCommentChange(e) {
    setCommentText(e.target.value);
  }
  const url = "https://blog-api-a11.vercel.app/comments";
  const currentDate = new Date().toLocaleDateString();
  const commentObj = {
    blog_id: _id,
    user_name: user?.displayName || "User",
    user_email: user?.email,
    profile_image: user?.photoURL,
    body: commentText,
    createdAt: currentDate,
  };
  async function handleCommentSubmit() {
    try {
      await axios.post(url, commentObj);
      toast.success("You have commented", {
        position: "top-center",
      });
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
      });
    }
    setCommentText("");
  }
  let commentBox;
  if (user_email == user?.email) {
    commentBox = (
      <p className="p-2 border-2 bg-gray-200 mt-6 text-red-500">
        {"Can not comment on own blog"}
      </p>
    );
  } else {
    commentBox = (
      <div className="relative flex w-full max-w-[24rem]">
        <Input
          onChange={handleCommentChange}
          variant="static"
          placeholder="comment..."
        />
        <Button
          onClick={handleCommentSubmit}
          size="sm"
          color={"blue"}
          // disabled={!user}
          className="!absolute right-1 top-1 rounded"
        >
          <IoMdSend className="text-lg" />
        </Button>
      </div>
    );
  }
  // Wishlist features
  const WishlistUrl = "https://blog-api-a11.vercel.app/wishlist";
  const wishListObj = {
    blog_id: _id,
    user_name: user?.displayName,
    user_email: user?.email,
    profile_image: user?.photoURL,
    createdAt: currentDate,
    title,
    image_url,
    category,
    short_description,
    long_description,
  };
  async function handleWishlistClick() {
    if (!user) {
      navigate("/login");
      return;
    }
    try {
      await axios.post(WishlistUrl, wishListObj);
      toast.success("Added to Wishlist", {
        position: "top-center",
      });
    } catch (error) {
      if (error.response.status == 422) {
        toast.error("Already Exist", {
          position: "top-center",
        });
      } else {
        toast.error(error.message, {
          position: "top-center",
        });
      }
    }
  }
  return (
    <div className="border shadow-sm">
      <ToastContainer />
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
            <button
              onClick={handleWishlistClick}
              className=" lg:basis-[30%] flex hover:font-medium duration-300 delay-300 ease-in hover:text-red-600 text-blue-400 my-2 items-center gap-1 border-2 border-gray-300 rounded-sm p-2"
            >
              <IoIosHeart className="text-xl" />
              <span className="">Add To Wishlist</span>
            </button>
          </div>
          {/* comment input  box  */}
          <div>
            {user ? (
              commentBox
            ) : (
              <p className="p-2 bg-gray-200 rounded-md mt-4">
                Login for do Comment
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
