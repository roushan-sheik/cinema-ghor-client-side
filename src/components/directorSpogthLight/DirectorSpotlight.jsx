import axios from "axios";
import { motion } from "framer-motion";
import React from "react";
import Director from "../director/Director";
import Title from "../title/Title";

const DirectorSpotlight = () => {
  const [director, setDirector] = React.useState(null);
  // comment data fetching
  const url = `/spotLight.json`;
  React.useEffect(() => {
    async function fetchComments() {
      const res = await axios.get(url);
      setDirector(res.data);
    }
    fetchComments();
  }, []);
  return (
    <div className="main_">
      <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: "1", delay: "2" }}
      >
        <Title
          title={"Director Spotlight"}
          description={
            "Explore the visionary minds behind cinematic masterpieces with our Director Spotlight. From the mind-bending narratives of Christopher Nolan to Quentin Tarantino's bold storytelling, delve into the creative genius of Martin Scorsese and the timeless classics of Steven Spielberg. Discover the inspirations, innovations, and legacies of these legendary directors that have shaped the landscape of filmmaking."
          }
        />
      </motion.div>
      <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: "1.5", delay: "2.5" }}
        className="grid lg:grid-cols-2 lg:grid-rows-2 grid-cols-1 gap-6"
      >
        {director?.map((singleDirector) => (
          <Director key={singleDirector.id} singleDirector={singleDirector} />
        ))}
      </motion.div>
    </div>
  );
};

export default DirectorSpotlight;
