import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BlogUserProfile from "../../components/blogUserProfile/BlogUserProfile";
import Comment from "../../components/commentField/Comment";
const BlogDetails = () => {
  const { title: querySearchParam } = useParams();
  const { movies } = useLoaderData();
  const result = movies.filter((movie) => movie.title === querySearchParam);
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
  } = result[0] || {};

  return (
    <div className="main_ py-8 ">
      <BlogUserProfile
        createdAt={createdAt}
        profile_image={profile_image}
        user_email={user_email}
        user_name={user_name}
      />
      <div className="flex flex-col lg:flex-row ">
        {/* image box  */}
        <div className="lg:h-[600px] h-[250px] basis-[40%] p-4">
          <img src={image_url} className="w-full h-full " alt="Image" />
        </div>
        {/* content box  */}
        <div className=" basis-[60%] p-4">
          <h3 className="text-3xl font-bold">{title}</h3>
          <h4 className="my-3  text-lg">{short_description}</h4>
          <p className="text-base text_third">{long_description}</p>
          <div
            className=" p-2 rounded-sm text_third bg-gray-100"
            key={category}
          ></div>
          {/* comment field text area  */}
          <div className="mt-8">
            <Comment _id={_id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
