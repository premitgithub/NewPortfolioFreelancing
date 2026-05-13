import { motion } from 'motion/react';
import { EXPERIENCES } from '../constants';
import { Calendar, Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 bg-matte-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-soft-silver mb-4 block">
            The Path
          </span>
          <h2 className="text-5xl md:text-7xl font-display font-bold leading-none tracking-tighter">
            PROFESSIONAL <br />
            <span className="text-electric-blue">TIMELINE.</span>
          </h2>
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative pl-12 border-l border-soft-white/10"
            >
              <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-electric-blue shadow-[0_0_15px_rgba(74,144,226,0.5)]" />
              
              <div className="bg-charcoal/30 border border-soft-white/5 p-8 rounded-sm backdrop-blur-sm group hover:border-electric-blue/30 transition-all">
                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                    <div>
                        <h3 className="text-2xl font-display font-bold text-soft-white group-hover:text-electric-blue transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-soft-white/40 mt-1 uppercase tracking-widest text-[10px] font-bold">
                           <Briefcase className="w-3 h-3" />
                           {exp.company}
                        </div>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-matte-black border border-soft-white/10 rounded-full text-[10px] font-bold tracking-widest opacity-60">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                    </div>
                 </div>

                 <ul className="space-y-4">
                    {exp.points.map((point, i) => (
                        <li key={i} className="text-sm text-soft-white/60 leading-relaxed font-sans flex items-start gap-4">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-electric-blue/40 shrink-0" />
                            {point}
                        </li>
                    ))}
                 </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
