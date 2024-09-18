import React from 'react'
import { motion } from 'framer-motion'

function Disinfection() {
  return (
    <section>
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex justify-center"
        >
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
            <h1 className="text-2xl md:text-5xl font-bold !leading-snug">Ultrasonic Dry Mist Disinfection</h1>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex justify-center"
        >
          <div className="flex justify-center items-center">
            <video className="puductor_drymist_content_video w-full" autoPlay muted preload="auto" loop>
              <source
                src="https://cdn.pudutech.com/website/video/puductor/animation_drymist.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </motion.div>
      </div>

      <div className="container pb-14 md:pb-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex justify-center"
        >
          <div>
            <ul className="">
              <li>
                <span className="text-6xl md:text-9xl text-red-700 font-bold">15</span>
                <span className="font-semibold">L</span>
              </li>
              <li>
                <p className="text-xl font-bold text-black" >Reservoir Capacity</p>
                <hr className="bg-red-400 h-[2px] border-0 mb-6 mt-2" />
              </li>
              <li>
                <div className="pdc2_text2">
                  <p className=" text-base md:text-lg font-semibold">15L huge volume:</p>
                  <p className=" text-base md:text-lg font-semibold">Customers do not need to replenish the disinfectant solution frequently.</p>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex justify-center"
        >
          <div>
            <ul className="">
              <li>
                <span className="font-semibold">≤</span>
                <span className="text-6xl md:text-9xl text-red-700 font-bold">10</span>
                <span className="font-semibold">μm</span>
              </li>
              <li>
                <p className="text-xl font-bold text-black" >Dry Disinfectant Particles</p>
                <hr className="bg-red-400 h-[2px] border-0 mb-6 mt-2" />
              </li>
              <li>
                <div className="pdc2_text2">
                  <p className="text-base md:text-lg font-semibold">≤10µm dry disinfectant particles ensuring full contact with microorganisms.</p>
                  <p className="text-base md:text-lg font-semibold">Nearly 100% coverage as whole room disinfection allows thorough disinfection of difficult-to-reach places.</p>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Disinfection
