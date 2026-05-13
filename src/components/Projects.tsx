import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';
import { useState } from 'react';

export default function Projects() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 md:py-32 px-6 md:px-12 bg-matte-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-warm-beige mb-4 block">
              Selection
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-bold leading-none tracking-tighter">
              FEATURED <br />
              <span className="text-soft-silver">SYSTEMS.</span>
            </h2>
          </motion.div>
          <p className="text-soft-white/40 max-w-xs text-sm uppercase tracking-widest font-medium text-right leading-loose">
            Scalable backend architectures and robust full-stack solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
            >
              <div 
                className="relative aspect-4/5 bg-charcoal overflow-hidden rounded-sm cursor-pointer border border-soft-white/5"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-matte-black/40 group-hover:bg-matte-black/20 transition-colors duration-500" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-linear-to-t from-matte-black via-matte-black/40 to-transparent">
                   <div className="space-y-4">
                      {project.metrics && (
                        <div className="flex flex-wrap gap-2">
                           {project.metrics.map((m, i) => (
                             <span key={i} className="text-[8px] uppercase tracking-widest font-bold px-2 py-1 bg-electric-blue/20 text-white border border-electric-blue/30 rounded-full">
                               {m}
                             </span>
                           ))}
                        </div>
                      )}
                      
                      <div className="flex gap-4">
                        <a 
                          href={project.link}
                          className="flex items-center gap-2 px-6 py-3 bg-soft-white text-matte-black rounded-sm font-bold text-[10px] uppercase tracking-widest hover:bg-electric-blue hover:text-white transition-all shadow-xl"
                        >
                          Live Demo <ExternalLink className="w-3 h-3" />
                        </a>
                        <a 
                          href={project.github}
                          className="w-10 h-10 rounded-sm border border-soft-white/20 bg-charcoal/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-soft-white hover:text-matte-black transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </div>
                   </div>
                </div>
              </div>

              <div className="mt-8 flex justify-between items-start">
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-electric-blue mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-display font-medium uppercase tracking-tight group-hover:text-electric-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-soft-white/40 mt-3 max-w-sm font-sans line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[9px] uppercase tracking-widest font-bold px-2 py-1 bg-charcoal text-soft-white/40 border border-soft-white/5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-xs font-mono opacity-20">/0{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 flex justify-center">
            <button className="group flex items-center gap-4 py-4 px-10 border border-soft-white/20 hover:border-soft-white transition-all duration-500 rounded-full">
              <span className="text-xs uppercase tracking-widest font-bold opacity-60 group-hover:opacity-100">Full Archive</span>
              <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:rotate-45 transition-all" />
            </button>
        </div>
      </div>
    </section>
  );
}
