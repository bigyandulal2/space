import { useState } from "react";
import Detail from "../components/Detail";

import { destinations } from "../data.json";
import { motion } from "framer-motion";

export default function Destination() {
  const [index, setIndex] = useState(0);
  function handleClick(i) {
    setIndex(i);
  }
  return (
    <div id="destination">
      <Detail number={"01"} detail={"pick your destination"} />
      <div id="destination_item">
        <div id="destination_item_imgbox">
          <motion.img
            src={destinations[index].images.webp}
            alt="mars"
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          />
        </div>
        <div id="destination_item_details">
          <ul
            id="destination_item_details_list"
            className="flex gap-5 text-3xl"
          >
            {destinations.map((_, i) => {
              return (
                <li
                  key={i}
                  style={index === i ? { boxShadow: "0px 3px 0px #fff" } : {}}
                  onClick={() => handleClick(i)}
                >
                  {destinations[i].name}
                </li>
              );
            })}
          </ul>
          <div id="destination_item_details_description">
            <h2>{destinations[index].name}</h2>
            <p className="text-2xl">{destinations[index].description}</p>
            {/* <hr className="mt-12" /> */}
            <div
              id="destination_item_details_description_distances"
              className="flex uppercase gap-40 pt-12 text-xl"
            >
              <div id="destination_item_details_description_distances_average ">
                <strong className="text-xl">avg.distance</strong>
                <p className="text-4xl text-white mt-3">
                  {destinations[index].distance}
                </p>
              </div>
              <div id="destination_item_details_description_distances_travel">
                <strong>est.travel time</strong>
                <p className="text-4xl text-white mt-3">
                  {destinations[index].travel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
