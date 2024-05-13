import { Button } from "@material-tailwind/react";
import axios from "axios";
import React from "react";
import { Link, useLoaderData, useLocation, useParams } from "react-router-dom";
import BlogUserProfile from "../../components/blogUserProfile/BlogUserProfile";
import SingleComment from "../../components/comment/SingleComment";
import Comment from "../../components/commentField/Comment";
import useUserContext from "../../hooks/useUserContext";
const BlogDetails = () => {
  const { user } = useUserContext();
  const location = useLocation();
  const { id } = useParams();
  const [comments, setComments] = React.useState(null);
  const [commentSub, setCommentSub] = React.useState(null);
  const { movies } = useLoaderData();
  const result = movies.filter((movie) => movie._id === id);
  const {
    _id,
    title,
    image_url,
    category,
    short_description,
    long_description,
    user_name,
    user_email,
    profile_image,
    createdAt,
  } = result[0] || {};
  let newObj = {
    _id,
    title,
    image_url,
    category,
    short_description,
    long_description,
    user_name,
    user_email,
    profile_image,
    createdAt,
    location_path: location.pathname,
  };
  function commentSubmit(sub) {
    setCommentSub(sub);
  }
  let button;
  let commentBox;
  if (user_email == user.email) {
    button = (
      <Link to={"/update-blog"} state={newObj}>
        <Button color="blue">Update Blog</Button>
      </Link>
    );
    commentBox = (
      <p className="p-2 border-2 bg-gray-200 text-red-500">
        {"Can not comment on own blog"}
      </p>
    );
  } else {
    button = "";
    commentBox = <Comment commentSubmit={commentSubmit} _id={_id} />;
  }
  // comment data fetching
  const url = `https://blog-api-a11.vercel.app/comments/${_id}`;
  React.useEffect(() => {
    async function fetchComments() {
      const res = await axios.get(url);
      setComments(res.data);
    }
    fetchComments();
  }, [commentSub, commentSubmit]);

  return (
    <div className="main_ py-8 ">
      <div className="flex items-center gap-6">
        <BlogUserProfile
          createdAt={createdAt}
          profile_image={profile_image}
          user_email={user_email}
          user_name={user_name}
        />
        <div>{button}</div>
      </div>
      <div className="flex flex-col lg:flex-row ">
        {/* image box  */}
        <div className="lg:h-[600px] h-[250px] basis-[40%] p-4">
          <img src={image_url} className="w-full h-full " alt="Image" />
        </div>
        {/* content box  */}
        <div className=" basis-[60%] p-4">
          <h3 className="text-3xl font-bold">{title}</h3>
          <h4 className="my-3  text-lg">{short_description}</h4>
          <p className="text-base text_third">{long_description}</p>
          <div className="mt-4 ">
            <span className="p-2 rounded-sm text_third bg-gray-100">
              #{category}
            </span>
          </div>
          {/* comment field text area  */}
          <div>
            <div className="mt-8">{commentBox}</div>
            <div>
              {comments?.map((comment) => (
                <SingleComment key={comment._id} comment={comment} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
