import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

// Animated floating orbs for the mesh background
function Orb({ className }) {
  return (
    <div
      className={`absolute rounded-full blob pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}

export function Hero() {
  const scrollRef = useRef(null);

  const scrollToNext = () => {
    const next = document.getElementById('belief-strip');
    next?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden mesh-bg"
      aria-label="Hero section"
    >
      {/* Decorative orbs */}
      <Orb className="w-[600px] h-[600px] bg-amber top-[-200px] left-[-200px]" />
      <Orb className="w-[500px] h-[500px] bg-rose right-[-150px] top-[20%]" />
      <Orb className="w-[400px] h-[400px] bg-emerald bottom-[-100px] left-[30%]" />

      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        className="container-px relative z-10 text-center pt-28 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 glass px-5 py-2 rounded-full text-xs font-semibold tracking-widest-2 uppercase text-amber">
            <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" aria-hidden="true" />
            Est. 1990 · Vasant Kunj, New Delhi · CBSE
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="font-display font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight-2 text-text max-w-5xl mx-auto"
        >
          Where{' '}
          <span className="gradient-text italic">Independent</span>
          <br />
          Minds Are Born
        </motion.h1>

        {/* Sub-tagline */}
        <motion.p
          variants={itemVariants}
          className="mt-8 text-text-muted text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-sans"
        >
          Vasant Valley School is a place where intellectual rigour meets creative courage —
          and every child discovers who they are capable of becoming.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button to="/admissions" variant="primary" size="lg">
            Explore Admissions
            <ArrowRight size={18} />
          </Button>
          <Button to="/about" variant="secondary" size="lg">
            Discover Our Story
          </Button>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-6"
        >
          {[
            { value: '35+', label: 'Years of Excellence' },
            { value: '8', label: 'Learning Pillars' },
            { value: '1,200+', label: 'Students' },
            { value: '8 Acres', label: 'Campus' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl font-semibold gradient-text">{stat.value}</div>
              <div className="text-text-muted text-xs font-sans tracking-wide mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        onClick={scrollToNext}
        aria-label="Scroll to next section"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-text transition-colors group"
      >
        <span className="text-xs font-sans tracking-widest uppercase">Explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
