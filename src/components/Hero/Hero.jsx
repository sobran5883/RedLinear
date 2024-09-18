import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Blob from "../../assets/blob.svg";
import HeroPng from "../../assets/hero1.png";
import { animate, motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Navigate } from "react-router-dom";

export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Hero = () => {
  return (
    <section className="bg-light overflow-hidden relative">
      <div className="container mt-8 grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        {/* Brand Info */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
          <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-lg lg:text-4xl font-medium !leading-snug"
            >
              <span style={{color:'rgba(153, 27, 27, 1)'}}>
                <Typewriter
                  words={['Streamlining Care, Automating Efficiency.',
                  'Robotic Precision for Healthier Outcomes.',
                  'Care Reimagined, Efficiency Redefined.',
                  'Your Trusted Assistant for Health and Efficiency.',
                  'Innovating Healthcare with Every Move.',
                  'Transforming Hospitals, One Task at a Time.',
                  'Smart Robots for Seamless Hospital Operations.']}
                  loop={true}
                  cursor
                  cursorStyle='|'
                  typeSpeed={150}
                  deleteSpeed={50}
                  delaySpeed={3000}
                />
              </span>
            </motion.h1>
            <motion.div
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="flex justify-center md:justify-start"
            >
            <a
              href="https://da-pearl.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn bg-black/90 shadow-none flex items-center gap-2 group"
            >
              Get Started
              <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
            </a>

            </motion.div>
          </div>
        </div>
        {/* Hero Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            src={HeroPng}
            alt=""
            className="w-[300px] xl:w-[350px] relative z-10 drop-shadow"
          />
          <motion.img
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
            src={Blob}
            alt=""
            className="absolute -bottom-32 w-[800px] md:w-[1500px] z-[1] hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
