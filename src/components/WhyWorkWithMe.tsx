import { motion } from "motion/react";
import {
  Shield,
  MessageSquare,
  Zap,
  Layers,
  Globe,
  Code,
  Cpu,
  Activity,
} from "lucide-react";

const reasons = [
  { title: "Build Scalable Architecture", icon: Layers },
  { title: "Clean Backend Structure", icon: Code },
  { title: "Build Production-Ready APIs", icon: Shield },
  { title: "Fast and Efficient Communication", icon: MessageSquare },
  { title: "Build Real-Time Systems", icon: Zap },
  { title: "Responsive UI", icon: Globe },
  { title: "AI Integration Expertise", icon: Cpu },
  { title: "Performance Optimization", icon: Activity },
];

export default function WhyWorkWithMe() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-matte-black bg-[radial-gradient(circle_at_bottom_right,rgba(0,102,255,0.05)_0%,transparent_50%)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-electric-blue mb-4 block">
            Advantages
          </span>
          <h2 className="text-3xl md:text-6xl font-display font-black uppercase tracking-tighter mb-6">
            Why Clients{" "}
            <span className="text-electric-blue">Work With Me.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-soft-white/40 font-sans leading-relaxed">
            I deliver high-end software solutions focused on performance,
            scalability, and seamless user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 border border-white/5 bg-charcoal/20 glass rounded-sm hover:border-electric-blue/30 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-10 h-10 rounded-full bg-matte-black/50 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-electric-blue group-hover:scale-110 transition-all duration-300">
                <reason.icon className="w-4 h-4 group-hover:text-white" />
              </div>
              <h3 className="text-xs font-bold uppercase tracking-widest leading-snug">
                {reason.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
