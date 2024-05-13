import { Spinner } from "@material-tailwind/react";
import axios from "axios";
import React from "react";
import List from "../../components/wishList/List";
import useUserContext from "../../hooks/useUserContext";

const Wishlist = () => {
  const [wishlistData, setWishlistData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const { user } = useUserContext();
  function wishListDelete(data) {}
  // Wishlist data fetching
  const wishlistUrl = `https://blog-api-a11.vercel.app/wishlist/${user.email}`;
  React.useEffect(() => {
    async function fetchComments() {
      setLoading(true);
      const res = await axios.get(wishlistUrl);
      setWishlistData(res.data);
    }
    fetchComments();
    setLoading(false);
  }, [wishListDelete]);

  return (
    <div>
      <h2 className=" text_pri lg:text-4xl text-2xl lg:my-10 my-7 font-bold text-center">
        My Wishlist
      </h2>
      {loading && (
        <div className="flex justify-center mt-14">
          <Spinner className="h-16 w-16 text-gray-900/50" />
        </div>
      )}
      <div className="main_  ">
        <div>
          {wishlistData?.map((list) => (
            <List key={list._id} list={list} wishListDelete={wishListDelete} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
