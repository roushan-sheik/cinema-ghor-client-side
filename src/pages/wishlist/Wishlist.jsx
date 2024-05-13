import { Spinner } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import useUserContext from "../../hooks/useUserContext";

const Wishlist = () => {
  const { user } = useUserContext();
  const {
    status,
    error,
    data: wishlists,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: () =>
      fetch(`https://blog-api-a11.vercel.app/wishlist/${user.email}`).then(
        (res) => res.json()
      ),
  });
  console.log(wishlists);
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
    <div>
      <h2 className=" text_pri lg:text-4xl text-2xl lg:my-10 my-7 font-bold text-center">
        My Wishlist
      </h2>
      <div></div>
    </div>
  );
};

export default Wishlist;
