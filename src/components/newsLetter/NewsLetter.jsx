import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import Inp from "../input/Inp";
import Title from "../title/Title";

const NewsLetter = () => {
  function handleSubscribeClick() {
    toast.success("Subscribed successfully", {
      position: "top-center",
    });
  }
  return (
    <div>
      <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: "2", delay: "3" }}
      >
        <Title
          title={"Subscribe To Our NewsLetter "}
          description={
            "Welcome to CinemaGhor, your ultimate destination for all things cinema! Subscribe to our newsletter and embark on a journey through the captivating world of movies. From exclusive behind-the-scenes insights to in-depth film analysis."
          }
        />
      </motion.div>
      <ToastContainer />
      <div className="flex flex-col items-center lg:flex-row gap-4 py-14 border-2 bg-blue-300">
        {/* image box  */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/newsletter-5795998-4849062.png?f=webp"
            alt=""
            className="h-[300px] w-[400px]"
          />
        </div>

        {/* content box  */}
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: "2", delay: "3.5" }}
          className="flex-1 p-4"
        >
          <div className="lg:w-1/2 ">
            <h2 className="text-3xl text-center font-bold my-2 text-white">
              Subscribe Now
            </h2>
            <p className="my-3 text-center text-white">
              Subscribe to our newsletter and embark on a journey through the
              captivating world of movies.
            </p>
            <div className="p-2 bg-white rounded-lg">
              <Inp
                inputStyle={"h-full border-none"}
                placeholder={"Your email"}
              />
            </div>
            <Button
              onClick={handleSubscribeClick}
              className="w-full mt-4 py-4 text-xl"
              color="red"
              size="lg"
            >
              Subscribe Now{" "}
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewsLetter;
