import { Button } from "@material-tailwind/react";
import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdOutlineClear } from "react-icons/md";
import { Link } from "react-router-dom";
import MobileNav from "../../components/mobileNavList/MobileNav";
import NavProfile from "../../components/nav-profile/NavProfile";
import Navlist from "../../components/navList/Navlist";
import useUserContext from "../../hooks/useUserContext";

function Header() {
  const { user, logoutUser } = useUserContext();
  const [openBar, setOpenBar] = React.useState(false);
  function handleLogout() {
    logoutUser();
  }
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
              <div className="md:hidden block ">{openBar && <MobileNav />}</div>
            </div>
            {/* nav title  */}
            <Link to={"/"}>
              <h2 className="font-semibold text_pri cursor-pointer md:text-3xl text-lg">
                CinemaGhor
              </h2>
            </Link>
          </div>
          {/* center side nav  */}
          <div>
            {/* nav list  */}
            <Navlist />
          </div>
          {/* right side nav  */}
          <div>
            <div className=" flex gap-2 md:gap-6 items-center">
              {user ? (
                <div className="flex gap-4">
                  <NavProfile />
                  <Button
                    className="bg-blue-gray-200 capitalize text-base text-black"
                    onClick={handleLogout}
                    size="sm"
                    color="blue"
                  >
                    LogOut
                  </Button>
                </div>
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
