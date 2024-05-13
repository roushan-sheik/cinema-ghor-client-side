import { Spinner } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Movie from "../../components/movie/Movie";
import BannerSlider from "../../components/slider/BannerSlider";
import Title from "../../components/title/Title";

const Home = () => {
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
      <BannerSlider movies={movies} />
      <Title
        title={"Recent Blog Post"}
        description={
          "Uncover the hidden gems of modern cinema in our latest blog post.  Discover the must-watch films that are capturing hearts and minds across the globe. Don't miss out on the excitement of the silver screen!"
        }
      />
      {/* // recent blogs */}
      <div className="grid grid-cols-1 gap-6  main_">
        {movies?.map((movie) => (
          <Movie key={movie.title} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
