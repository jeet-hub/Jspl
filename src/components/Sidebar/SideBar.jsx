import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { FaTachometerAlt,FaGlasses,FaInfinity,FaIndustry,FaBookReader } from "react-icons/fa";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaTachometerAlt />,
  },
  {
    path: "/overview",
    name: "Overview",
    icon: <FaGlasses />,
    subRoutes: [
      {
        path: "/settings/Digitaltwyn",
        name: "Digital Twyn ",
        icon: <FaInfinity />,
      },
      {
        path: "/settings/overview",
        name: "Plan Overview",
        icon: <FaIndustry />,
      },
      {
        path: "/settings/sectionoverview",
        name: "Section Overview",
        icon: <FaBookReader />,
      },
      {
        path: "/settings/historical",
        name: "Historical",
        icon: <FaMoneyBill />,
      },
      {
        path: "/settings/chemistryview",
        name: "Chemistry View",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/users",
    name: "Users",
    icon: <FaUser />,
  },
  {
    path: "/connectivity",
    name: "Connectivity",
    icon: <MdMessage />,
  },
  {
    path: "/furnance",
    name: "Furnance",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/furnance/EAF",
        name: "EAF ",
        icon: <FaUser />,
      },
    
    ],
  },
  {
    path: "/lrf",
    name: "LRF",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/lrf/lrf1",
        name: "LRF1 ",
        icon: <FaUser />,
      },
      
    ],
  },
  {
    path: "/degasser/rh",
    name: "Degasser",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
     
      {
        path: "/degasser",
        name: "Plan Overview",
        icon: <FaLock />,
      },
    
    ],
  },
  {
    path: "/caster",
    name: "Caster",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      
      {
        path: "/settings/billing",
        name: "Chemistry View",
        icon: <FaMoneyBill />,
      },
    ],
  },
  
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "230px" : "65px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  {/* Jeet  */}
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          {/* <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div> */}
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
