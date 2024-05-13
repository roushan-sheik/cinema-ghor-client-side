import axios from "axios";
import React from "react";
import List from "../../components/wishList/List";
import useUserContext from "../../hooks/useUserContext";

const Wishlist = () => {
  const [wishlistData, setWishlistData] = React.useState(null);
  const { user } = useUserContext();
  function wishListDelete(data) {}
  // Wishlist data fetching
  const wishlistUrl = `https://blog-api-a11.vercel.app/wishlist/${user.email}`;
  React.useEffect(() => {
    async function fetchComments() {
      const res = await axios.get(wishlistUrl);
      setWishlistData(res.data);
    }
    fetchComments();
  }, [wishListDelete]);
  return (
    <div>
      <h2 className=" text_pri lg:text-4xl text-2xl lg:my-10 my-7 font-bold text-center">
        My Wishlist
      </h2>
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
