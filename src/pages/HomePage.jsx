import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
export default function HomePage() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/destination");
  }
  return (
    <motion.div
      id="home"
      className="grid place-items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div id="home_detail">
        <div id="home_detail_col1">
          <motion.h3
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {" "}
            So, you want to travel to
          </motion.h3>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {" "}
            Space
          </motion.h1>
          <motion.p
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="capitalize"
          >
            Let’s face it, if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </motion.p>
        </div>
        <motion.div
          onClick={handleClick}
          id="home_detail_col2"
          whileHover={{
            rotate: 360,
            opacity: 0.8,
            translateZ: 20,
            transition: {
              translateX: 20,
              translateY: -20,
              duration: 2,
              loop: Infinity,
            },
          }}
        >
          <motion.p>Explore</motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}
