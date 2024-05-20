import { useState } from "react";
import Detail from "../components/Detail";
import { crew } from "../data.json";
import { motion } from "framer-motion";
export default function Crew() {
  const [index, setIndex] = useState(0);
  function handleClick(i) {
    setIndex(i);
  }
  return (
    <div id="crew" className="grid grid-cols-2 gap-32">
      <motion.div id="crew_details">
        <Detail number={"03"} detail={"meet your crew"} />
        <div id="crew_detail">
          <motion.h4
            className=" md:text-5xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {crew[index].role}
          </motion.h4>
          <motion.h2
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            {crew[index].name}
          </motion.h2>
          <motion.p
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0, scale: 0.5 }}
            className="capitalize"
          >
            {crew[index].bio}
          </motion.p>
          <span id="crew_carousel" className="flex">
            {crew.map((_, i) => {
              return (
                <li
                  key={i}
                  onClick={() => handleClick(i)}
                  style={i === index ? { opacity: "1" } : {}}
                ></li>
              );
            })}
          </span>
        </div>
      </motion.div>
      <div id="crew_imgbox">
        <motion.img
          src={crew[index].images.webp}
          alt="crew_images"
          initial={{ opacity: 0, delay: 0.4 }}
          animate={{ opacity: 1 }}
        />
      </div>
    </div>
  );
}
