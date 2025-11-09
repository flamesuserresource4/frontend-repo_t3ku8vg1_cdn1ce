import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-20 z-40 rounded-full bg-[#1E3568] p-3 text-white shadow transition hover:brightness-110 ${visible ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
    >
      <ArrowUp size={18} />
    </button>
  );
};

export const SEOHead = () => {
  useEffect(() => {
    document.title = 'Grand Madani Residence – Affordable Modern Housing in Tangerang';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = 'Grand Madani Residence by PT Wira Sakti Propertindo — quality subsidized housing in Kabupaten Tangerang. Explore units, facilities, and contact sales.';
      document.head.appendChild(m);
    } else {
      metaDesc.setAttribute('content', 'Grand Madani Residence by PT Wira Sakti Propertindo — quality subsidized housing in Kabupaten Tangerang. Explore units, facilities, and contact sales.');
    }
  }, []);
  return null;
};
