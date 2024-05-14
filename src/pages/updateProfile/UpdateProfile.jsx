import { Button } from "@material-tailwind/react";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import useUserContext from "../../hooks/useUserContext";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useUserContext();
  const [userName, setUserName] = React.useState("");
  const [image, setImage] = React.useState("");
  const navigate = useNavigate();
  // submit func
  function handleImageChange(e) {
    setImage(e.target.value);
  }
  // submit func
  function handleNameChange(e) {
    setUserName(e.target.value);
  }

  // submit func
  function handleUpdateProfileClick() {
    updateUserProfile(userName, image)
      .then(() => {
        toast.success("Profile updated", {
          position: "top-center",
        });
        setTimeout(() => {
          navigate("/profile");
        }, 3000);
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-center",
        });
      });
  }
  return (
    <div className="max-w-6xl mx-auto">
      <Helmet>
        <title>User - Update Profile</title>
      </Helmet>
      <ToastContainer />
      <div className="mt-8">
        <div className="flex flex-col items-center ">
          <img
            className="rounded-full w-[250px] h-[250px]"
            src={user?.photoURL || "https://i.ibb.co/6JyZF0K/user.png"}
            alt="pic"
          />
          <h2 className="my-5 font-medium text-4xl">{user?.displayName}</h2>
          <p className="text-lg mb-2">{user?.email}</p>
        </div>
        <div className="flex flex-col items-center">
          <form className="card-body rounded-md mt-4 lg:w-[30%] border">
            <div className="border-2 flex gap-2 p-2 rounded-md mb-4">
              <label className="label font-semibold">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                value={userName}
                onChange={handleNameChange}
                placeholder="name"
                defaultValue={user?.displayName}
                className="input input-bordered focus:outline-none rounded-md"
              />
            </div>
            <div className="border-2 flex gap-2 p-2 rounded-md">
              <label className="label font-semibold">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                value={image}
                onChange={handleImageChange}
                className="input input-bordered focus:outline-none rounded-md"
                required
              />
            </div>
            <div className="form-control mt-6">
              <Button
                onClick={handleUpdateProfileClick}
                color="blue"
                className="  "
              >
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
