import React from "react";

const SingleComment = ({ comment }) => {
  const { user_name, profile_image, body, createdAt } = comment;
  // Convert the date string to a Date object
  const createdAtData = new Date(createdAt);
  // Calculate the difference in milliseconds between the current date and createdAt date
  const differenceInMs = Date.now() - createdAtData.getTime();
  // Convert milliseconds to days
  const daysAgo = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
  return (
    <div className="flex ">
      {/* user profile  */}
      <div className=" px-4 pt-4 flex  items-center gap-3 ">
        {/* profile image box  */}
        <div className="h-14 w-14 ring-2 p-[2px] rounded-full">
          <img
            className="h-full w-full rounded-full"
            src={profile_image}
            alt="Profile"
          />
        </div>
        {/* content box  */}
        <div>
          <h4 className="font-semibold text-lg">{user_name}</h4>
          <p className="text_sec">{body}</p>
          <p className="text_third !important">{daysAgo}days ago</p>
        </div>
      </div>
    </div>
  );
};

export default SingleComment;
