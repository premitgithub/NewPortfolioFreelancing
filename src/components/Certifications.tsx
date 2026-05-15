import { motion } from "motion/react";
import { CERTIFICATIONS } from "../constants";
import { Award, ExternalLink } from "lucide-react";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-32 px-6 md:px-12 bg-matte-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-soft-silver mb-4 block">
            Accolades
          </span>
          <h2 className="text-5xl md:text-7xl font-display font-bold leading-none tracking-tighter">
            PROVEN <span className="text-electric-blue">SKILLS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-8 bg-charcoal/20 border border-soft-white/5 rounded-sm hover:bg-charcoal/40 transition-all group"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-electric-blue/10 flex items-center justify-center border border-electric-blue/20 group-hover:bg-electric-blue group-hover:text-white transition-all duration-500">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-soft-white leading-tight mb-1">
                    {cert.title}
                  </h3>
                  <span className="text-[10px] uppercase tracking-widest font-bold opacity-30">
                    {cert.issuer}
                  </span>
                </div>
              </div>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-soft-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all hover:bg-soft-white hover:text-matte-black"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
