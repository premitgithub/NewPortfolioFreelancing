import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 md:px-12 bg-matte-black border-t border-soft-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-soft-white rounded-sm rotate-45 flex items-center justify-center">
                 <span className="text-matte-black font-display font-black text-xs -rotate-45">S.</span>
            </div>
            <div className="flex flex-col">
                 <span className="text-xs font-display font-bold uppercase tracking-widest text-soft-white/60">My Portfolio</span>
                 <span className="text-[10px] uppercase font-medium opacity-30 mt-0.5">© 2025 Saksham Singh.</span>
            </div>
        </div>

        <div className="flex gap-8">
            {[
              { name: 'Github', href: 'https://github.com/Saksham-76' },
              { name: 'LinkedIn', href: 'https://www.linkedin.com/in/saksham-singh-02b8ab303' },
              { name: 'Contact', href: 'mailto:sakshamsingh9192@gmail.com' }
            ].map(social => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  target={social.href.startsWith('http') ? "_blank" : undefined}
                  rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-30 hover:opacity-100 hover:text-electric-blue transition-all"
                >
                    {social.name}
                </a>
            ))}
        </div>

        <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full border border-soft-white/10 flex items-center justify-center hover:bg-soft-white hover:text-matte-black transition-all group"
        >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      <div className="mt-12 overflow-hidden py-4 opacity-5 flex whitespace-nowrap select-none pointer-events-none">
          <div className="animate-marquee flex gap-20">
              {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-6xl font-display font-black uppercase">DESIGN • DEVELOP • DELIVER</span>
              ))}
          </div>
          <div className="animate-marquee flex gap-20">
              {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-6xl font-display font-black uppercase">DESIGN • DEVELOP • DELIVER</span>
              ))}
          </div>
      </div>
    </footer>
  );
}
