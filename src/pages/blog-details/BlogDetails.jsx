import React from "react";
import { useParams } from "react-router-dom";
const BlogDetails = () => {
  const { title } = useParams();
  console.log(title);
  return <div>BlogDetails</div>;
};

export default BlogDetails;
