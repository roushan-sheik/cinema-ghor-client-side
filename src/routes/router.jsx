import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import AddBlog from "../pages/addBlog/AddBlog";
import AllBlogs from "../pages/allBlogs/AllBlogs";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";
import Register from "../pages/register/Register";
import UpdateProfile from "../pages/updateProfile/UpdateProfile";
import Wishlist from "../pages/wishlist/Wishlist";
import Login from "./../pages/logIn/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/update-profile",
        element: <UpdateProfile />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/add-blog",
        element: <AddBlog />,
      },
      {
        path: "/all-blogs",
        element: <AllBlogs />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
export default router;
