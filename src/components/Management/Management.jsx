import React from 'react'
import {motion} from 'framer-motion'
import { FadeUp } from "../Hero/Hero";
import iot from '../../assets/loT.png'
function Management() {
  return (
    <div>
        <div className="container py-14 md:py-24 gap-8 space-y-6 md:space-y-0 bg-black/80">
              <div>
              <motion.div
                variants={FadeUp(0.2)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className=""
                >
                <p className="text-3xl md:text-6xl font-bold text-red-400">RedLinear Management Platform</p>
              </motion.div>
              </div>
              <div>
                <motion.img
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  src={iot}
                  alt=""
                  className="w-full object-cover drop-shadow"
                />
              </div>
              <div>
              <motion.div
                variants={FadeUp(0.2)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                <p className="text-sm md:text-md font-medium text-red-400">Remote Access:
                remote terminal control of robot operation, task management, and work report printing.</p>
                <p className="text-sm md:text-md font-medium text-red-400">Automatic Work Report Generation:
work reports generated automatically, check disinfection status of target areas.</p>
              </motion.div>
              </div>
        </div>
    </div>
  )
}

export default Management