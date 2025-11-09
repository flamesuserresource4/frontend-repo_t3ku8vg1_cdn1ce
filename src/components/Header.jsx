import React from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#properties', label: 'Units' },
    { href: '#about', label: 'About' },
    { href: '#facilities', label: 'Facilities' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-[#1E3568]">
        <a href="#home" className="flex items-center gap-2 font-semibold">
          <span className="inline-block h-8 w-8 rounded bg-[#1E3568]" />
          <span>Grand Madani Residence</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium hover:text-[#1E3568]/80">
              {n.label}
            </a>
          ))}
          <a href="#properties" className="rounded-full bg-[#FFC700] px-4 py-2 text-sm font-semibold text-[#1E3568] shadow hover:brightness-110">
            View Units
          </a>
        </nav>

        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="border-t border-gray-100 bg-white px-6 py-3 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="py-1" onClick={() => setOpen(false)}>
                {n.label}
              </a>
            ))}
            <a href="#properties" className="rounded-full bg-[#FFC700] px-4 py-2 text-center font-semibold text-[#1E3568] shadow" onClick={() => setOpen(false)}>
              View Units
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
