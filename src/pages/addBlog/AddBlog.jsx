import { Button, Option, Select, Textarea } from "@material-tailwind/react";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Inp from "../../components/input/Inp";

const AddBlog = () => {
  const location = useLocation();

  const [error, setError] = React.useState(null);
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
  // handle the form
  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const route = location?.state || "/";
    console.log(blog);
    setBlog({
      title: "",
      image_url: "",
      category: "",
      short_description: "",
      long_description: "",
    });
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
          className="flex max-w-md flex-col lg:w-[70%] w-[94%] gap-4"
          action="#"
        >
          {/* inputs  */}
          <Inp
            type="text"
            name={"title"}
            required={true}
            label={"Name"}
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
          <Select name="category" value={blog.category}>
            <Option>Action</Option>
            <Option>Science</Option>
            <Option>Robotic</Option>
            <Option>Adventure</Option>
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
