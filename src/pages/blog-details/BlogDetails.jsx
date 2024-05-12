import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Comment from "../../components/commentField/Comment";
const BlogDetails = () => {
  const { title: querySearchParam } = useParams();
  const { movies } = useLoaderData();
  const result = movies.filter((movie) => movie.title === querySearchParam);

  const { title, image, categories, short_desc, description } = result[0] || {};

  return (
    <div className="main_ flex py-8">
      {/* image box  */}
      <div className="h-[600px] basis-[40%] p-4">
        <img src={image} className="w-full h-full " alt="Image" />
      </div>
      {/* content box  */}
      <div className=" basis-[60%] p-4">
        <h3 className="text-3xl font-bold">{title}</h3>
        <h4 className="my-3  text-lg">{short_desc}</h4>
        <p className="text-base text_third">{description}</p>
        <div className="flex gap-2 my-3 ">
          {categories?.map((item) => (
            <div className=" p-2 rounded-sm text_third bg-gray-100" key={item}>
              # {item}
            </div>
          ))}
        </div>
        {/* comment field text area  */}
        <div className="mt-8">
          <Comment />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
