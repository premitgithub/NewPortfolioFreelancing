import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, Mail, Github, Linkedin, Smartphone } from 'lucide-react';
import { useState, useEffect } from 'react';

const techStack = [
  'Java', 'Spring Boot', 'React', 'Node.js', 'MongoDB', 
  'MySQL', 'REST APIs', 'Postman', 'WebSockets', 'JWT'
];

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [text, setText] = useState('');
  const fullText = "Specialized in MERN Stack, Spring Boot, REST APIs, Real-Time Systems, and AI Integrations.";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen lg:h-screen w-full flex items-center lg:items-start justify-center overflow-hidden py-32 md:py-40 lg:py-0">
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
      >
        <h1 className="text-[20vw] lg:text-[25vw] font-display font-black leading-none uppercase tracking-tighter opacity-[0.03] select-none">
          BACKEND
        </h1>
      </motion.div>

      {/* Floating Pills */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
        {techStack.map((tech, i) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0.1, 0.4, 0.1],
              y: [0, -20, 0],
              x: [0, 10, 0]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
            className="absolute px-4 py-2 rounded-full border border-soft-white/10 bg-charcoal/20 text-[10px] font-bold uppercase tracking-widest text-soft-silver"
            style={{
              top: `${15 + (i * 8)}%`,
              left: i % 2 === 0 ? `${5 + (i * 3)}%` : `${75 + (i * 2)}%`
            }}
          >
            {tech}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-24 lg:pt-32">
        <div className="w-full lg:w-1/2 lg:pt-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <span className="inline-block px-3 py-1 rounded-full border border-soft-white/10 text-[10px] uppercase tracking-[0.2em] font-medium mb-6 bg-charcoal/50">
              Premium Freelance Developer
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tighter mb-6">
              I BUILD SCALABLE <br />
              <span className="text-electric-blue">FULL STACK</span> <br />
              WEB APPLICATIONS.
            </h2>
            <p className="text-soft-white/60 text-base md:text-lg max-w-lg min-h-18 leading-relaxed font-sans mb-10">
              {text}<span className="animate-pulse">|</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 py-4 bg-electric-blue text-white rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-matte-black transition-all duration-300"
              >
                Let's Work Together
              </button>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 py-4 border border-soft-white/20 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all duration-300"
              >
                View Projects
              </button>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-40">
              <a href="https://github.com/Saksham-76" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 hover:opacity-100 cursor-pointer transition-opacity" />
              </a>
              <a href="https://www.linkedin.com/in/saksham-singh-02b8ab303" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 hover:opacity-100 cursor-pointer transition-opacity" />
              </a>
              <a href="mailto:sakshamsingh9192@gmail.com">
                <Mail className="w-5 h-5 hover:opacity-100 cursor-pointer transition-opacity" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.2, ease: 'easeOut' }}
           className="w-full lg:w-1/2 flex justify-center lg:justify-end relative group"
         >
           {/* Ambient Lighting Glow */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-electric-blue/10 rounded-full blur-[120px] pointer-events-none opacity-40 transition-opacity duration-1000" />
           <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-full bg-soft-white/5 rounded-full blur-[100px] pointer-events-none opacity-20" />
 
           <div className="relative w-full max-w-125 aspect-4/5 flex items-center justify-center">
             {/* The Transparent PNG */}
             <div className="relative w-full h-full">
               <img
                 src="/profile.png"
                 alt="Saksham Singh - Freelance Full Stack Developer"
                 className="w-full h-full object-contain relative z-10 transition-transform duration-700 lg:group-hover:scale-105"
               />
               
               {/* Minimal Blending Overlays - subtle bottom fade only */}
               <div className="absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-matte-black to-transparent z-20 pointer-events-none" />
               
               {/* Very Soft Cinematic Shadow */}
               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-1/2 h-8 bg-black/50 blur-3xl rounded-full z-0" />
             </div>
           </div>
         </motion.div>
      </div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold opacity-30 mt-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 opacity-30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
