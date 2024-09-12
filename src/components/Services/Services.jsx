import React from "react";
import { TbTruckDelivery } from "react-icons/tb";

import { RiComputerLine } from "react-icons/ri";
import { CiMobile3 } from "react-icons/ci";
import { IoMdHappy } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { IoPulseOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const ServicesData = [
  {
    id: 1,
    title: "Automated Delivery of Medications and Supplies",
    link: "#",
    // icon: <TbTruckDelivery />,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Patient Monitoring and Assistance",
    link: "#",
    // icon: <CiMobile3 />,
    delay: 0.3,
  },
  {
    id: 3,
    title: "Hospital Navigation and Wayfinding",
    link: "#",
    // icon: <RiComputerLine />,
    delay: 0.4,
  },
  {
    id: 4,
    title: "Billing and Financial records",
    link: "#",
    // icon: <IoMdHappy />,
    delay: 0.5,
  },
  {
    id: 5,
    title: "Waste Collection, Sanitization, Vacuum Cleaning and Disposal",
    link: "#",
    // icon: <IoPulseOutline />,
    delay: 0.6,
  },
  {
    id: 6,
    title: "Interaction with patients and hospital personnel",
    link: "#",
    // icon: <BiSupport />,
    delay: 0.7,
  },
];

const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};
const Services = () => {
  return (
    <section className="bg-white">
      <div className="container pb-14 pt-16">
        <h1 className="text-4xl font-bold text-left pb-10">
          Services we provide
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {ServicesData.map((service) => (
            <motion.div
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="bg-[#ffffff] border hover:border-red-400 rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-red-400 hover:text-white cursor-pointer duration-300 hover:shadow-2xl"
            >
              {/* <div className="text-4xl mb-4"> {service.icon}</div> */}
              <h1 className="text-md text font-semibold text-center px-3">
                {service.title}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
