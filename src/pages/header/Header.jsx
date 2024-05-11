import { Button } from "@material-tailwind/react";
import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdOutlineClear } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import NavProfile from "../../components/nav-profile/NavProfile";
import useUserContext from "../../hooks/useUserContext";

function Header() {
  const { user } = useUserContext();
  const [openBar, setOpenBar] = React.useState(false);
  return (
    <div>
      <header>
        <div className="py-3 mt-3 flex justify-between items-center w-[90%] mx-auto">
          {/* left side nav  */}
          <div className="flex gap-2 ">
            {/* bars  */}
            <div>
              <span className="text-2xl block md:hidden">
                <button onClick={() => setOpenBar(!openBar)}>
                  {openBar ? <MdOutlineClear /> : <FaBarsStaggered />}
                </button>
              </span>
              <div className="md:hidden block ">
                {openBar && (
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
                  </div>
                )}
              </div>
            </div>
            {/* nav title  */}
            <Link to={"/"}>
              <h2 className="font-semibold text_pri cursor-pointer md:text-3xl text-lg">
                AffluenceAvenue
              </h2>
            </Link>
          </div>
          {/* center side nav  */}
          <div>
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
            </div>
          </div>
          {/* right side nav  */}
          <div>
            <div className=" flex gap-2 md:gap-6 items-center">
              {user ? (
                <NavProfile />
              ) : (
                <Link className="bg_brand" to={"/login"}>
                  <Button color="blue">Login</Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>
      {/* banner  */}
    </div>
  );
}

export default Header;
