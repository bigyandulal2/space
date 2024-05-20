import { useState } from "react";
import Detail from "../components/Detail";
import { technology } from "../data.json";
import { motion } from "framer-motion";
export default function Technology() {
  const [index, setIndex] = useState(0);
  function handleClick(i) {
    setIndex(i);
  }
  return (
    <div id="technology">
      <div id="technology_about" className="text-center">
        <Detail number={"03"} detail={"space launch 101"} />{" "}
      </div>

      <div id="technology_item">
        <div id="technology_item_numbers">
          {technology.map((_, i) => {
            return (
              <li
                key={i}
                onClick={() => handleClick(i)}
                style={i === index ? { background: "#fff" } : {}}
              >
                <span style={i === index ? { color: "black" } : {}}>
                  {i + 1}
                </span>
              </li>
            );
          })}
        </div>

        <div id="technology_item_details">
          <motion.h5
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            The terminology ...
          </motion.h5>
          <h2
            className="my-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {technology[index].name}
          </h2>
          <motion.p
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            {technology[index].description}
          </motion.p>
        </div>
        <div id="technology_item_imgbox">
          <motion.img
            src={technology[index].images.portrait}
            alt="technology_images"
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0, scale: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
}
