import { useState } from "react";
import Logo from "/assets/shared/logo.svg";
import menu from "/assets/shared/icon-hamburger.svg";
import menuClose from "/assets/shared/icon-close.svg";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const styles = "0px 3px 0px #fff";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  function handleClick() {
    setMenuOpen(true);
  }
  function handleClose() {
    setMenuOpen(false);
  }
  return (
    <div className="text-white flex py-11" id="navbar">
      <div id="navbar_imgbox">
        <img src={Logo} alt="img-logo" />
      </div>

      <div
        className="bar grow hidden lg:block h-0.5 bg-white/70 translate-x-8 relative z-20 self-center"
        id="navbar_row"
      ></div>
      <div id="nav_block" className={menuOpen ? "nav_open" : "nav_close"}>
        <nav
          className="text-3xl flex-1 flex gap-4 align-middle pl-32 lg-gap-2"
          id="links"
          style={menuOpen ? { display: "flex" } : {}}
        >
          <div
            id="close"
            className={menuOpen ? "openClose" : "close"}
            onClick={handleClose}
          >
            <img src={menuClose} alt="close_tab" />
          </div>
          <motion.div
            initial={{ x: -100, delay: 2 }}
            animate={{ x: 0, transition: { duration: 2, delay: 0.2 } }}
            whileHover={{
              rotate: 2,
              transition: { delay: 0.5, duration: 0.2 },
            }}
            // className={"flex gap-6  "}
          >
            <NavLink
              to={"homepage"}
              className={"flex gap-3"}
              style={({ isActive }) => ({
                boxShadow: isActive ? styles : "",
              })}
              id="navbar_navlink"
            >
              <span>00</span>
              <p className="lg-text-xl">Home</p>
            </NavLink>
          </motion.div>
          <motion.div
            initial={{ x: -100, delay: 2 }}
            animate={{ x: 0, transition: { duration: 2, delay: 0.2 } }}
            whileHover={{
              rotate: 2,
              transition: { delay: 0.5, duration: 0.2 },
            }}
            className={"flex gap-6"}
          >
            <NavLink
              to={"/destination"}
              className={"flex gap-6"}
              style={({ isActive }) => ({
                boxShadow: isActive ? styles : "",
              })}
              id="navbar_navlink"
            >
              <span>01</span>
              <p>Destination</p>
            </NavLink>
          </motion.div>
          <motion.div
            initial={{ x: -100, delay: 2 }}
            animate={{ x: 0, transition: { duration: 2, delay: 0.2 } }}
            whileHover={{
              rotate: 2,
              transition: { delay: 0.5, duration: 0.2 },
            }}
            className={"flex gap-6"}
          >
            <NavLink
              to={"/crew"}
              className={"flex gap-6"}
              style={({ isActive }) => ({
                boxShadow: isActive ? styles : "",
              })}
              id="navbar_navlink"
            >
              <span>02</span>
              <p>Crew</p>
            </NavLink>
          </motion.div>
          <motion.div
            initial={{ x: -100, delay: 2 }}
            animate={{ x: 0, transition: { duration: 2, delay: 0.2 } }}
            whileHover={{
              rotate: 2,
              transition: { delay: 0.5, duration: 0.2 },
            }}
            className={"flex gap-6 mr-6"}
          >
            <NavLink
              to={"/technology"}
              className={"flex gap-6"}
              style={({ isActive }) => ({
                boxShadow: isActive ? styles : "",
              })}
              id="navbar_navlink"
            >
              <span>03</span>
              <p>Technology</p>
            </NavLink>
          </motion.div>
        </nav>
      </div>
      <div
        id="menu"
        style={menuOpen ? { display: "none" } : {}}
        className="menu"
      >
        <img src={menu} alt="menu_tab" id="menu" onClick={handleClick} />
      </div>
    </div>
  );
}
