import React from "react";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
const List = ({ list }) => {
  const {
    _id,
    title,
    blog_id,
    image_url,
    category,
    short_description,
    long_description,
  } = list;
  function handleRemoveClick() {}
  console.log(list);
  return (
    <div className="p-4 rounded-md  flex gap-10 border-2  flex-col lg:flex-row">
      {/* image box  */}
      <div className="h-[200px] lg:w-[30%] w-full overflow-hidden">
        <Link to={`/blog-details/${blog_id}`}>
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
          <Link to={`/blog-details/${blog_id}`}>
            <button className="flex lg:basis-[70%] text_sec hover:font-medium duration-300 delay-300 ease-in  font-medium  my-2 items-center gap-1 border-2 border-gray-300 rounded-md p-2">
              View Details
            </button>
          </Link>
          <button
            onClick={handleRemoveClick}
            className=" lg:basis-[30%] flex hover:font-medium duration-300 delay-300 ease-in hover:text-red-600 text-red-500 my-2 items-center gap-1 border-2 border-gray-300 rounded-sm p-2"
          >
            <MdCancel className="text-xl" />
            <span className="">Remove</span>
          </button>
        </div>
        {/* comment input  box  */}
      </div>
    </div>
  );
};

export default List;
