import React from "react";
import "react-toastify/dist/ReactToastify.css";
import useUserContext from "../../hooks/useUserContext";
import Btn from "../button/Btn";

const NavProfile = () => {
  const { logoutUser, user } = useUserContext();
  console.log(user);
  function handleLogoutClick() {
    logoutUser()
      .then((result) => {
        console.log("successfully LogOut");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  return (
    <div onClick={handleLogoutClick}>
      <Btn style={"bg-gray-300 text-black font-semibold"}>{"LogOut"}</Btn>
    </div>
  );
};

export default NavProfile;
