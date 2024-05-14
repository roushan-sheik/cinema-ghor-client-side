import axios from "axios";
import { motion } from "framer-motion";
import React from "react";
import Hall from "../components/cinemaHall/Hall";
import Title from "../components/title/Title";
const CinemaHall = () => {
  const [cinema, setCinema] = React.useState(null);
  // comment data fetching
  const url = `/hall.json`;
  React.useEffect(() => {
    async function fetchComments() {
      const res = await axios.get(url);
      setCinema(res.data);
    }
    fetchComments();
  }, []);
  return (
    <div className="main_">
      <motion.div
        initial={{ x: +1000 }}
        animate={{ x: 0 }}
        transition={{ duration: "1", delay: "2" }}
      >
        <Title
          title={"Big Cinema Halls"}
          description={
            "Step into a realm of cinematic grandeur in our expansive cinema hall, where every seat is a front-row experience. Immerse yourself in the latest blockbusters with state-of-the-art audiovisual technology that brings movies to life. From plush seating to impeccable acoustics, indulge in an unparalleled viewing experience that will captivate your senses."
          }
        />
      </motion.div>
      {/* cimma hals  */}
      <div className="grid gap-4 lg:grid-cols-3 grid-cols-1 ">
        {cinema?.map((hall) => (
          <Hall key={hall.id} hall={hall} />
        ))}
      </div>
    </div>
  );
};

export default CinemaHall;
