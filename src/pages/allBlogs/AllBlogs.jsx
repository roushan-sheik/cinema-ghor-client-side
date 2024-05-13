import { Spinner } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Movie from "../../components/movie/Movie";

const AllBlogs = () => {
  // my  server api
  // https://blog-api-a11.vercel.app/
  const {
    status,
    error,
    data: movies,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: () =>
      fetch("https://blog-api-a11.vercel.app/blogposts").then((res) =>
        res.json()
      ),
  });

  if (status === "pending") {
    return (
      <div className="flex justify-center mt-14">
        <Spinner className="h-16 w-16 text-gray-900/50" />
      </div>
    );
  }
  if (status === "error") {
    return (
      <div className="flex justify-center mt-14 p-6 border-2 rounded-md">
        <span className="text-red-500">Error: {error.message}</span>;
      </div>
    );
  }

  return (
    <div className="z-0">
      <h2 className="text-3xl font-bold text-center mt-10">All Blog Posts</h2>
      {/* input box  */}
      <div className="flex justify-center mb-10">
        <div className="flex lg:w-[80%] border-2 mt-6 xl:w-[80%] 2xl:w-[60%] justify-between bg-white py-[.3125rem] pl-6 pr-[.3125rem] rounded-[2.1875rem]">
          <input
            id="search_input"
            placeholder="Search blog"
            className=" py-[.5rem]  rounded-[2.1875rem]  lg:py-[.625rem] outline-none w-[65%]    "
            type="text"
          />
          <button
            id="search_btn"
            className="lg:py-[.625rem] py-[.5rem] lg:px-8 px-6 rounded-[32px] bg-blue-400 lg:text-[20px] text-[18px] text-white lg:font-bold cursor-pointer"
          >
            Search Blog
          </button>
        </div>
      </div>
      {/* // recent blogs */}
      <div className="grid grid-cols-1 gap-6  main_">
        {movies?.map((movie) => (
          <Movie key={movie.title} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
