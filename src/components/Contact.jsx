import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Whatsapp } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-[#F8FAFC] py-16 text-[#1E3568]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl" style={{ fontFamily: 'Montserrat, Poppins, Inter, sans-serif' }}>Contact Us</h2>
          <p className="mt-2 text-[#1E3568]/70">Have questions or want the latest promo? Send us a message.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Details */}
          <motion.div
            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold">Sales & Information</h3>
            <div className="mt-4 space-y-3 text-[#1E3568]/80">
              <div className="flex items-center gap-3"><Whatsapp size={18} className="text-green-600" /><span>08888-1706-95 (WhatsApp)</span></div>
              <div className="flex items-start gap-3"><MapPin size={18} className="mt-1" /><span>Ruko Union Square, Bumi Indah City, Jl. Raya Bumi Indah Boulevard Blok ROR-15, Sukamantri, Pasar Kemis, Kabupaten Tangerang, Banten</span></div>
            </div>

            <div className="mt-6 rounded-xl bg-[#1E3568] p-4 text-white">
              <div className="text-sm uppercase tracking-wide text-white/80">Latest Promos – Contact Us Now!</div>
              <a href="#contact" className="mt-2 inline-block rounded-full bg-[#FFC700] px-4 py-2 text-sm font-medium text-[#1E3568] shadow transition hover:brightness-110">Get Promo Info</a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium">Name</label>
                <input type="text" required className="w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-[#1E3568]" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Phone/WhatsApp</label>
                <input type="tel" required className="w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-[#1E3568]" />
              </div>
            </div>
            <div className="mt-4">
              <label className="mb-1 block text-sm font-medium">Email</label>
              <input type="email" className="w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-[#1E3568]" />
            </div>
            <div className="mt-4">
              <label className="mb-1 block text-sm font-medium">Message</label>
              <textarea rows="4" className="w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-[#1E3568]"></textarea>
            </div>
            <button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#1E3568] px-6 py-3 font-medium text-white transition hover:brightness-110">
              <Send size={18} /> Send Message
            </button>
          </motion.form>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/628888170695"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 font-medium text-white shadow-lg transition hover:scale-105"
      >
        <Whatsapp size={20} /> Chat
      </a>
    </section>
  );
};

export default Contact;
