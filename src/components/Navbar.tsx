import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-6 md:px-12 flex justify-between items-center',
        isScrolled ? 'py-4 glass border-b' : 'bg-transparent'
      )}
    >
      <div className="flex items-center gap-2 group">
        <div className="w-8 h-8 bg-soft-white rounded-sm group-hover:rotate-45 transition-transform duration-300 flex items-center justify-center text-matte-black">
          <span className="font-display font-black text-xs">S.</span>
        </div>
        <span className="font-display font-bold text-xl tracking-tighter uppercase">Portfolio.</span>
      </div>

      <div className="hidden lg:flex items-center gap-10">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="font-sans text-xs font-medium uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity relative group"
          >
            {item.name}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-electric-blue group-hover:w-full transition-all duration-300" />
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <a
          href="mailto:sakshamsingh9192@gmail.com"
          className="hidden md:flex items-center gap-2 group px-4 py-2 md:px-6 md:py-2.5 rounded-full bg-soft-white text-matte-black hover:bg-electric-blue hover:text-white transition-all duration-300 text-[10px] md:text-xs uppercase tracking-widest font-bold"
        >
          Talk to me
          <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>

        <button
          className="lg:hidden p-2 z-50 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-matte-black z-40 flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-display text-4xl font-bold uppercase tracking-tighter"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
