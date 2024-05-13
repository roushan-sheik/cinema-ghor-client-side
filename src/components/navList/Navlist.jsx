import React from "react";
import { NavLink } from "react-router-dom";

const Navlist = () => {
  return (
    <div className="hidden lg:flex gap-8 items-center ">
      <NavLink
        to={"/"}
        className={({ isActive, isPending }) =>
          isActive
            ? "font-semibold text-[#ff6b6b] border-2 border-[#ff6b6b] rounded-lg lg:px-4 px-2 lg:py-3 py-[6px]"
            : isPending
            ? "pending"
            : "flex items-center md:text-lg"
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/add-blog"}
        className={({ isActive, isPending }) =>
          isActive
            ? "font-semibold text-[#ff6b6b] border-2 border-[#ff6b6b] rounded-lg lg:px-4 px-2 lg:py-3 py-[6px]"
            : isPending
            ? "pending"
            : "flex items-center md:text-lg"
        }
      >
        Add Blog
      </NavLink>
      <NavLink
        to={"/all-blogs"}
        className={({ isActive, isPending }) =>
          isActive
            ? "font-semibold text-[#ff6b6b] border-2 border-[#ff6b6b] rounded-lg lg:px-4 px-2 lg:py-3 py-[6px]"
            : isPending
            ? "pending"
            : "flex items-center md:text-lg"
        }
      >
        All Blogs
      </NavLink>
      <NavLink
        to={"/featured-blogs"}
        className={({ isActive, isPending }) =>
          isActive
            ? "font-semibold text-[#ff6b6b] border-2 border-[#ff6b6b] rounded-lg lg:px-4 px-2 lg:py-3 py-[6px]"
            : isPending
            ? "pending"
            : "flex items-center md:text-lg"
        }
      >
        Featured Blogs
      </NavLink>
      <NavLink
        to={"/wishlist"}
        className={({ isActive, isPending }) =>
          isActive
            ? "font-semibold text-[#ff6b6b] border-2 border-[#ff6b6b] rounded-lg lg:px-4 px-2 lg:py-3 py-[6px]"
            : isPending
            ? "pending"
            : "flex items-center md:text-lg"
        }
      >
        Wishlist
      </NavLink>
    </div>
  );
};

export default Navlist;
