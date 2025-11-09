import React from 'react';
import { motion } from 'framer-motion';

const properties = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop',
    cluster: 'Cluster Magnolia',
    type: 'Type 36/72',
    price: 'Starting from Rp 200 Jt-an',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop',
    cluster: 'Cluster Dahlia',
    type: 'Type 30/60',
    price: 'Starting from Rp 170 Jt-an',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1599422314077-f4dfdaa4cd6b?q=80&w=1600&auto=format&fit=crop',
    cluster: 'Cluster Lavender',
    type: 'Type 45/90',
    price: 'Ask for price',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2d6ab?q=80&w=1600&auto=format&fit=crop',
    cluster: 'Cluster Edelweiss',
    type: 'Type 36/72',
    price: 'Limited Offer',
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop',
    cluster: 'Cluster Sakura',
    type: 'Type 30/60',
    price: 'Ask for price',
  },
  {
    id: 6,
    image:
      'https://images.unsplash.com/photo-1594156596782-57328a00b1d1?q=80&w=1600&auto=format&fit=crop',
    cluster: 'Cluster Aster',
    type: 'Type 45/90',
    price: 'Promo Available',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.5 } }),
};

const PropertyListing = () => {
  return (
    <section id="properties" className="bg-white py-16 text-[#1E3568]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl" style={{ fontFamily: 'Montserrat, Poppins, Inter, sans-serif' }}>
            Available Units
          </h2>
          <p className="mt-2 text-[#1E3568]/70">Explore modern, efficient homes designed for comfort and value.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((p, i) => (
            <motion.article
              key={p.id}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i}
              variants={cardVariants}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.cluster} ${p.type}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="p-5">
                <div className="text-sm uppercase tracking-wide text-[#1E3568]/70">{p.cluster}</div>
                <h3 className="mt-1 text-xl font-semibold">{p.type}</h3>
                <div className="mt-2 text-[#FFC700]">{p.price}</div>
                <div className="mt-4 flex items-center justify-between">
                  <a href="#contact" className="rounded-full bg-[#1E3568] px-4 py-2 text-sm font-medium text-white transition hover:brightness-110">
                    Get Details
                  </a>
                  <a href="#contact" className="text-sm font-medium text-[#1E3568] underline-offset-4 hover:underline">
                    Schedule Visit
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyListing;
