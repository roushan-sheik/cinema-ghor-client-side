import { Button, Option, Select, Textarea } from "@material-tailwind/react";
import axios from "axios";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Inp from "../../components/input/Inp";
import useUserContext from "../../hooks/useUserContext";

const AddBlog = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useUserContext();
  const [error, setError] = React.useState(null);
  const [categories, setCategories] = React.useState("");
  const [blog, setBlog] = React.useState({
    title: "",
    image_url: "",
    category: "",
    short_description: "",
    long_description: "",
  });
  function handleChange(e) {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  }
  const url = "https://blog-api-a11.vercel.app/blogposts";
  const currentDate = new Date().toLocaleDateString();

  // handle the form
  function handleCategoryChange(value) {
    setCategories(value);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setCategories("");
    setError("");
    const route = location?.state || "/";
    if (categories === "") {
      setError("Category filed is required");
      return;
    }

    const blogObj = {
      user_name: user.displayName,
      user_email: user.email,
      profile_image: user.photoURL,
      title: blog.title,
      image_url: blog.image_url,
      category: categories,
      short_description: blog.short_description,
      long_description: blog.long_description,
      createdAt: currentDate,
    };
    try {
      const res = await axios.post(url, blogObj);
      toast.success("Successfully blog added", {
        position: "top-center",
      });
      // navigate(route);
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
      });
    }
    setBlog({
      title: "",
      image_url: "",
      category: "",
      short_description: "",
      long_description: "",
    });
    setCategories("");
    e.target.reset();
  }
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <Helmet>
          <title>MovieGhor | Add Blog</title>
        </Helmet>
        <h2 className=" text_pri text-4xl my-4 font-bold text-center">
          Add Blog
        </h2>
        <ToastContainer />
        <form
          onSubmit={handleSubmit}
          className="flex max-w-md flex-col w-[80%] gap-4"
          action="#"
        >
          {/* inputs  */}
          <Inp
            type="text"
            name={"title"}
            required={true}
            label={"Blog Title"}
            value={blog.title}
            placeholder={"title"}
            onChange={handleChange}
          />
          <Inp
            type="text"
            name={"image_url"}
            value={blog.image_url}
            label={"Image Url"}
            required={true}
            placeholder={"Image url"}
            onChange={handleChange}
          />
          <Inp
            type="text"
            name={"short_description"}
            label={"Short Description"}
            value={blog.short_description}
            required={true}
            placeholder={"text.."}
            onChange={handleChange}
          />

          <label htmlFor="long_description" className="font-semibold">
            Long Description
          </label>
          <Textarea
            id="long_description"
            value={blog.long_description}
            placeholder="long desc..."
            onChange={handleChange}
            name="long_description"
          />
          <Select
            value={categories}
            label="Select Category"
            variant="standard"
            onChange={handleCategoryChange}
          >
            <Option value="" disabled hidden>
              Select an option
            </Option>
            <Option value="Action">Action</Option>
            <Option value="Science">Science Fiction</Option>
            <Option value="Robotic">Comedy</Option>
            <Option value="Robotic">Adventure</Option>
            <Option value="Adventure">Drama</Option>
            <Option value="Adventure">Fantasy</Option>
            <Option value="Adventure">Horror</Option>
            <Option value="Adventure">Romance</Option>
          </Select>
          {/* error message */}
          <span className="text-red-500">{error}</span>
          {/* submit button  */}
          <Button type={"submit"} color="blue">
            {" "}
            Add Blog
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
