import { motion } from 'motion/react';

const techStack = [
  { name: 'Java', level: 90 },
  { name: 'Spring Boot', level: 95 },
  { name: 'React.js', level: 92 },
  { name: 'Node.js', level: 88 },
  { name: 'MongoDB', level: 90 },
  { name: 'MySQL', level: 85 },
  { name: 'REST APIs', level: 98 },
  { name: 'WebSockets', level: 90 },
  { name: 'JWT', level: 95 },
  { name: 'Firebase', level: 85 },
  { name: 'Gemini API', level: 92 },
  { name: 'Git/GitHub', level: 90 },
  { name: 'Postman', level: 95 },
];

export default function TechStack() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-matte-black overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-soft-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-electric-blue mb-4 block">Ecosystem</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter">
            THE TECH <span className="text-soft-white/20">STACK.</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                type: 'spring', 
                stiffness: 100, 
                delay: i * 0.05 
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="px-6 py-4 rounded-sm border border-soft-white/10 bg-charcoal/30 flex flex-col items-center gap-3 backdrop-blur-sm relative group cursor-default"
            >
              <div className="absolute inset-0 bg-electric-blue opacity-0 group-hover:opacity-10 blur-xl transition-opacity pointer-events-none" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-soft-white/70 group-hover:text-electric-blue transition-colors">
                {tech.name}
              </span>
              <div className="w-12 h-1 bg-soft-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 + (i * 0.1) }}
                  className="h-full bg-electric-blue"
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Animated Background Text Decor */}
        <div className="absolute -bottom-20 left-0 w-full flex justify-between pointer-events-none opacity-[0.02] select-none">
           <span className="text-[20vw] font-black leading-none uppercase">SCALABLE</span>
           <span className="text-[20vw] font-black leading-none uppercase">SECURE</span>
        </div>
      </div>
    </section>
  );
}
