import React, { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";

const NavbarMenu = [
  {
    id: 2,
    title: "Services",
    path: "/",
  },
  {
    id: 3,
    title: "About Us",
    path: "/",
  },
  {
    id: 4,
    title: "Our Team",
    path: "/",
  }
];
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  function handleScroll(){
    if(window.scrollY>50){
      setScrolled(true);
    }else{
      setScrolled(false);
    }
  }
  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
  },[]);
  return (
    <nav className={`${scrolled ? "backdrop-blur-sm bg-[#ffffff7e]" : ""} fixed w-full z-50`}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container my-4 flex justify-between items-center">
        {/* Logo section */}
        <div>
          <h1 className="font-bold text-2xl"><span className="text-secondary">Red</span>Linear</h1>
        </div>
        {/* Menu section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="inline-block text-lg font-medium py-2 px-3 hover:text-secondary relative group"
                >
                  <div className="w-full h-1 bg-secondary absolute mt-4 left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </a>
              </li>
            ))}
            {/* <button className="primary-btn">Get Started</button> */}
          </ul>
        </div>
        {/* Mobile Hamburger menu section */}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
