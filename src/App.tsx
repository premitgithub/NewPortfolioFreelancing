import { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'motion/react';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Process from './components/Process';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 450 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 border border-white/50 rounded-full pointer-events-none z-9999 mix-blend-difference"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        x: '-50%',
        y: '-50%',
      }}
    />
  );
}

function LoadingScreen({ onFinish }: { onFinish: () => void; key?: string }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-100 bg-matte-black flex flex-col items-center justify-center p-12 overflow-hidden"
    >
      <div className="w-full max-w-7xl relative">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className="h-px bg-white absolute top-1/2 left-0"
        />
        <div className="flex justify-between items-end mt-12 overflow-hidden">
            <motion.div 
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col"
            >
              <span className="text-white font-display font-bold uppercase tracking-tighter text-2xl">Saksham Singh</span>
              <span className="text-soft-white/30 font-display text-sm uppercase tracking-widest mt-2">Full Stack Developer</span>
            </motion.div>
            <motion.span 
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white font-display font-medium opacity-10 text-[12vw]"
            >
              S.S
            </motion.span>
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="bg-matte-black text-soft-white font-sans selection:bg-electric-blue selection:text-white">
      <CustomCursor />
      
      <AnimatePresence>
        {loading && <LoadingScreen onFinish={() => setLoading(false)} key="loader" />}
      </AnimatePresence>
      
      <SmoothScroll>
        <Navbar />
        <Hero />
        <Services />
        <About />
        <WhyWorkWithMe />
        <Process />
        <TechStack />
        <Projects />
        <Contact />
        <Footer />
      </SmoothScroll>
    </main>
  );
}
