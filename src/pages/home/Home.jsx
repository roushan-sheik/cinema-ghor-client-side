import { Spinner } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import BannerSlider from "../../components/slider/BannerSlider";

const Home = () => {
  const {
    status,
    error,
    data: movies,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: () => fetch("/movie.json").then((res) => res.json()),
  });

  if (status === "pending") {
    return (
      <div className="flex justify-center mt-14">
        <Spinner className="h-16 w-16 text-gray-900/50" />
      </div>
    );
  }
  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      <BannerSlider movies={movies} />
    </div>
  );
};

export default Home;
