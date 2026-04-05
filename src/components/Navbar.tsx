import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, siteConfig } from '../data';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm py-3' : 'bg-white/80 backdrop-blur-md py-4'
        }`}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6">
        <a href="#hero" className="text-xl md:text-2xl font-extrabold text-emerald-950 tracking-tighter font-headline">
          {siteConfig.name}
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-stone-600 hover:text-emerald-800 transition-colors font-headline font-bold tracking-tight text-sm"
            >
              {link.name}
            </a>
          ))}
          <button className="signature-gradient text-white px-6 py-2 rounded-lg font-bold scale-95-on-click transition-all text-sm">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col space-y-4 border-t border-stone-100 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-stone-700 font-headline font-bold text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="signature-gradient text-white px-6 py-3 rounded-xl font-bold text-center">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
