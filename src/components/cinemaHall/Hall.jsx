import { motion } from "framer-motion";
import React from "react";
import { CiLocationOn } from "react-icons/ci";

const Hall = ({ hall }) => {
  const { id, name, image, location, description } = hall;

  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ duration: "1", delay: "3" }}
      className="border-2 p-4 rounded-md"
    >
      <h2 className="font-semibold text-lg">{name}</h2>
      <div className="flex gap-1 mb-3 text_third items-center">
        <CiLocationOn />
        <p className="">{location}</p>
      </div>
      {/* image box  */}
      <div className="h-[300px]">
        <img className="h-full w-full object-cover" src={image} alt="" />
      </div>
      <p className="my-2">{description}</p>
    </motion.div>
  );
};

export default Hall;
