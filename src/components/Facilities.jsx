import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, TreeDeciduous, ShoppingBag, Dumbbell, Footprints } from 'lucide-react';

const facilities = [
  { icon: TreeDeciduous, title: 'Parks & Green Belt', desc: 'Comfortable open spaces for fresh air and family time.' },
  { icon: Footprints, title: 'Jogging Track', desc: 'Dedicated lanes for a healthy daily routine.' },
  { icon: ShoppingBag, title: 'Retail Outlets', desc: 'Nearby stores for daily needs and lifestyle.' },
  { icon: Dumbbell, title: 'Sport Facilities', desc: 'Areas for light exercise and community activities.' },
];

const Facilities = () => {
  return (
    <section id="facilities" className="bg-white py-16 text-[#1E3568]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl" style={{ fontFamily: 'Montserrat, Poppins, Inter, sans-serif' }}>Facilities & Location</h2>
          <p className="mt-2 text-[#1E3568]/70">Thoughtfully planned amenities and strategic location.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Map */}
          <motion.div
            className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 bg-[#1E3568] px-4 py-3 text-white">
              <MapPin size={18} />
              <span className="text-sm">Ruko Union Square, Bumi Indah City, Jl. Raya Bumi Indah Boulevard Blok ROR-15, Sukamantri, Pasar Kemis, Kabupaten Tangerang, Banten</span>
            </div>
            <iframe
              title="Grand Madani Residence Location"
              className="h-[340px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Ruko%20Union%20Square%2C%20Bumi%20Indah%20City%2C%20Jl.%20Raya%20Bumi%20Indah%20Boulevard%20Blok%20ROR-15%2C%20Sukamantri%2C%20Pasar%20Kemis%2C%20Kabupaten%20Tangerang%2C%20Banten&output=embed"
            />
          </motion.div>

          {/* Facilities */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {facilities.map((f, idx) => (
              <motion.div
                key={f.title}
                className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1E3568]/10 text-[#1E3568] transition-transform group-hover:scale-105">
                    {React.createElement(f.icon, { size: 22 })}
                  </div>
                  <div>
                    <h3 className="font-semibold">{f.title}</h3>
                    <p className="mt-1 text-sm text-[#1E3568]/70">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
