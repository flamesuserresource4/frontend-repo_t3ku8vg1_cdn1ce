import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="bg-[#F8FAFC] py-16 text-[#1E3568]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <motion.h2
              className="text-3xl font-semibold sm:text-4xl"
              style={{ fontFamily: 'Montserrat, Poppins, Inter, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              About the Project
            </motion.h2>
            <motion.p
              className="mt-4 text-[#1E3568]/80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Grand Madani Residence is a modern residential development in Kabupaten Tangerang, Banten, by PT Wira Sakti Propertindo. The project focuses on delivering high-quality subsidized housing tailored for low-to-middle income families, ensuring comfort, accessibility, and long-term value. With thoughtfully designed clusters and supporting public facilities, the neighborhood promotes a balanced lifestyle for young families and working professionals.
            </motion.p>
            <motion.ul
              className="mt-6 space-y-2 text-[#1E3568]/80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <li>• Commercial-quality design with efficient layouts</li>
              <li>• Green open spaces, jogging tracks, and family-friendly amenities</li>
              <li>• Strategic location with easy access to retail and daily needs</li>
            </motion.ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <motion.img
              src="https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1600&auto=format&fit=crop"
              alt="Site progress"
              loading="lazy"
              className="h-56 w-full rounded-xl object-cover shadow-md sm:h-64"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            />
            <motion.img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop"
              alt="Show unit"
              loading="lazy"
              className="h-56 w-full rounded-xl object-cover shadow-md sm:h-64"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.05 }}
            />
            <motion.img
              src="https://images.unsplash.com/photo-1502005097973-6a7082348e28?q=80&w=1600&auto=format&fit=crop"
              alt="Neighborhood"
              loading="lazy"
              className="h-56 w-full rounded-xl object-cover shadow-md sm:h-64"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            />
            <motion.img
              src="https://images.unsplash.com/photo-1494797710133-75ad58a6df04?q=80&w=1600&auto=format&fit=crop"
              alt="Public facilities"
              loading="lazy"
              className="h-56 w-full rounded-xl object-cover shadow-md sm:h-64"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
