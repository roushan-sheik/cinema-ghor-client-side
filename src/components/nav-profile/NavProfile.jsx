import { Avatar, Badge, Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import useUserContext from "../../hooks/useUserContext";
const NavProfile = () => {
  const { logoutUser, user } = useUserContext();
  const [showDetails, setShowDetails] = React.useState(false);
  function handleLogoutClick() {
    logoutUser()
 
  }
  return (
    <div className="relative ">
      <div
        className="cursor-pointer"
        onClick={() => setShowDetails(!showDetails)}
      >
        <Badge overlap="circular" placement="bottom-end">
          <Avatar src={user.photoURL} alt="profile picture" />
        </Badge>
      </div>
      {showDetails && (
        <div className="bg-gray-200 p-4 z-10 md:block hidden rounded-md  absolute to-0 right-0">
          <span className="block text-lg  font-semibold">
            {" "}
            {user.displayName || "Empty"}
          </span>
          <span className="block truncate  font-medium text_sec  my-1">
            {user.email || "Empty"}
          </span>

          <Link to={"/profile"}>
            <p className="text_sec   font-medium">Profile</p>
          </Link>
          <Link to={"/update-profile"}>
            <p className="text_sec  my-1 font-medium">Update Profile</p>
          </Link>
          <div onClick={handleLogoutClick}>
            <Button className="bg-gray-50 mt-2 text-black">LogOut</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavProfile;
