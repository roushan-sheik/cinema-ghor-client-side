import React from "react";
import { NavLink } from "react-router-dom";

const MobileNav = () => {
  return (
    <div className="z-50 bg-gray-200 p-4 w-[200px] absolute top-16 flex gap-2 flex-col rounded-sm">
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
      <NavLink
        to={"/profile"}
        className={({ isActive, isPending }) =>
          isActive
            ? "font-semibold text-[#ff6b6b] border-2 border-[#ff6b6b] rounded-lg lg:px-4 px-2 lg:py-3 py-[6px]"
            : isPending
            ? "pending"
            : "flex items-center md:text-lg"
        }
      >
        Profile
      </NavLink>
      <NavLink
        to={"/update-profile"}
        className={({ isActive, isPending }) =>
          isActive
            ? "font-semibold text-[#ff6b6b] border-2 border-[#ff6b6b] rounded-lg lg:px-4 px-2 lg:py-3 py-[6px]"
            : isPending
            ? "pending"
            : "flex items-center md:text-lg"
        }
      >
        Update Profile
      </NavLink>
    </div>
  );
};

export default MobileNav;
