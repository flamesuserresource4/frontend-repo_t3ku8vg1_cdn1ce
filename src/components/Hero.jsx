import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative h-[90vh] min-h-[620px] w-full overflow-hidden bg-[#1E3568]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b1530]/80 via-[#0b1530]/60 to-[#0b1530]/90" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center text-white">
        <motion.h1
          className="font-semibold leading-tight text-white drop-shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ fontFamily: 'Montserrat, Poppins, Inter, sans-serif' }}
        >
          <span className="block text-3xl sm:text-4xl md:text-5xl">Grand Madani Residence</span>
          <span className="mt-3 block text-xl font-normal text-white/90 sm:text-2xl">
            Affordable Homes with Commercial-Quality Design for Millennials
          </span>
        </motion.h1>

        <motion.p
          className="mt-4 text-sm text-white/80 sm:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          6.4 Ha • 4+ Clusters • 10+ Public Facilities
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <a
            href="#properties"
            className="rounded-full bg-[#FFC700] px-6 py-3 font-medium text-[#1E3568] shadow-lg transition-transform duration-200 hover:scale-[1.03] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#FFC700]/40"
          >
            View Available Units
          </a>
        </motion.div>

        <div className="mt-10 grid w-full max-w-3xl grid-cols-3 gap-3">
          {[
            { label: 'Land Area', value: '6.4 Ha' },
            { label: 'Clusters', value: '4+' },
            { label: 'Facilities', value: '10+' },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="rounded-xl bg-white/10 p-4 backdrop-blur-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <div className="text-2xl font-semibold text-[#FFC700]">{stat.value}</div>
              <div className="text-xs uppercase tracking-wide text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
