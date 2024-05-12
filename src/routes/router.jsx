import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import AddBlog from "../pages/addBlog/AddBlog";
import AllBlogs from "../pages/allBlogs/AllBlogs";
import BlogDetails from "../pages/blog-details/BlogDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";
import Register from "../pages/register/Register";
import UpdateProfile from "../pages/updateProfile/UpdateProfile";
import Wishlist from "../pages/wishlist/Wishlist";
import Login from "./../pages/logIn/Login";
import homeLoader from "./loader";
import PrivateRoute from "./privet/PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />,
          </PrivateRoute>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />,
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/add-blog",
        element: (
          // <PrivateRoute>
            <AddBlog />
          // </PrivateRoute>
        )
      },
      {
        path: "/all-blogs",
        element: <AllBlogs />,
      },
      {
        path: "/blog-details/:title",
        element: <BlogDetails />,
        loader: homeLoader,
      },
      {
        path: "/wishlist",
        element: (
          <PrivateRoute>
            <Wishlist />,
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
export default router;
