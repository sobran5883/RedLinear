import React, { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import { Button, Drawer } from 'antd';
import logo from '../../assets/logo.png'
import { NavLink } from "react-router-dom";

const NavbarMenu = [
  {
    id: 1,
    title: "Usecases",
    path: "/usecase",
  },
  {
    id: 2,
    title: "Hardware",
    path: "/hardware",
  },
  {
    id: 3,
    title: "Our Team",
    path: "/team",
  }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${scrolled ? "backdrop-blur-sm bg-white/70" : ""} fixed w-full z-50`}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container my-4 flex justify-between items-center"
      >
        {/* Logo section */}
        <div>
          <NavLink to="/"><img src={logo} alt="logo" className="h-6 lg:h-10"/></NavLink>
        </div>
        {/* Menu section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <NavLink
                  to={menu.path}
                  className="inline-block text-lg font-medium py-2 px-3 hover:text-secondary relative group"
                >
                  <div className="w-full h-1 bg-secondary absolute mt-4 left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile Hamburger menu section */}
        <div className="lg:hidden cursor-pointer">
          <IoMdMenu onClick={() => setOpenDrawer(true)} className="text-4xl" />
        </div>
      </motion.div>
      <Drawer
        className="w-full"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        // title="RedLinear"
        // extra={
        //   <div>
        //     <Button>Ok</Button>
        //     <Button>Cancel</Button>
        //   </div>
        // }
      >
        <ul className="font-semibold text-lg w-full">
          {NavbarMenu.map((menu) => (
            <li key={menu.id} className="mt-8 w-full">
              <NavLink to={menu.path} onClick={()=>setOpenDrawer(false)} className="w-full text-black/90 hover:text-red-800">
                {menu.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </Drawer>
    </nav>
  );
};

export default Navbar;
