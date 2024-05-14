import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import AddBlog from "../pages/addBlog/AddBlog";
import AllBlogs from "../pages/allBlogs/AllBlogs";
import BlogDetails from "../pages/blog-details/BlogDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FeaturedBlogs from "../pages/featuredBlog/FeaturedBlogs";
import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";
import Register from "../pages/register/Register";
import UpdateBlog from "../pages/updateBlog/UpdateBlog";
import UpdateProfile from "../pages/updateProfile/UpdateProfile";
import Wishlist from "../pages/wishlist/Wishlist";
import Login from "./../pages/logIn/Login";
import homeLoader, { allBlogsLoader } from "./loader";
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
          <PrivateRoute>
            <AddBlog />
          </PrivateRoute>
        ),
      },
      {
        path: "/all-blogs",
        element: <AllBlogs />,
        loader: allBlogsLoader,
      },
      {
        path: "/featured-blogs",
        element: <FeaturedBlogs />,
        loader: allBlogsLoader,
      },
      {
        path: "/update-blog",
        element: (
          <PrivateRoute>
            <UpdateBlog />,
          </PrivateRoute>
        ),
      },
      {
        path: "/blog-details/:id",
        element: (
          <PrivateRoute>
            <BlogDetails />,
          </PrivateRoute>
        ),
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
