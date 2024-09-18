import React from 'react'
import { motion } from 'framer-motion';
import charging from '../../assets/battery.png'

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
            <h1 className="text-3xl md:text-5xl font-bold !leading-snug">Automatic Recharging</h1>
            <p className='text-base md:text-lg font-medium'>The 51.2Ah battery, allowing a maximum disinfection time of up to 6h, can disinfect 12-15 rooms (20㎡/room). Puductor 2 is equipped with a docking station to ensure that the robot is fully charged and ready for the next task without involvement from your staff.</p>
          </div>
        </motion.div>
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={charging}
            alt=""
            className="w-[500px] md:max-w-[550px] object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  )
}

export default Disinfection
