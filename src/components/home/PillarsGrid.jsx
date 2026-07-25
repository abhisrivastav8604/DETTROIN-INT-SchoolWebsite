import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { pillars } from '../../data/pillars';
import { AnimatedOnScroll, StaggerContainer, StaggerItem } from '../ui/AnimatedOnScroll';
import { SectionHeading } from '../ui/SectionHeading';

function PillarIcon({ name, size = 28, color }) {
  const Icon = LucideIcons[name];
  if (!Icon) return null;
  return <Icon size={size} color={color} aria-hidden="true" />;
}

export function PillarsGrid() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="section-py bg-surface-2 relative overflow-hidden" aria-labelledby="pillars-heading">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      <div className="container-px relative z-10">
        <AnimatedOnScroll>
          <SectionHeading
            eyebrow="Holistic Development"
            title="Eight Pillars of Learning"
            subtitle="Our curriculum is built around eight interconnected dimensions of human development — each as essential as the others, each nourished with intention."
            center
            id="pillars-heading"
          />
        </AnimatedOnScroll>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
          staggerDelay={0.07}
        >
          {pillars.map((pillar, i) => (
            <StaggerItem key={pillar.id}>
              <motion.article
                className="pillar-card glass rounded-2xl p-6 lg:p-7 h-full relative overflow-hidden cursor-default"
                onHoverStart={() => setHovered(pillar.id)}
                onHoverEnd={() => setHovered(null)}
                aria-label={`${pillar.label} pillar: ${pillar.tagline}`}
              >
                {/* Background gradient on hover */}
                <AnimatePresence>
                  {hovered === pillar.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`absolute inset-0 bg-gradient-to-br ${pillar.color} rounded-2xl pointer-events-none`}
                      aria-hidden="true"
                    />
                  )}
                </AnimatePresence>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 relative z-10"
                  style={{ backgroundColor: `${pillar.accent}18` }}
                >
                  <PillarIcon name={pillar.icon} color={pillar.accent} />
                </div>

                {/* Number */}
                <div
                  className="absolute top-5 right-5 font-display text-5xl font-bold opacity-[0.06] leading-none select-none"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3
                    className="font-display font-semibold text-text text-xl mb-1"
                    style={{ color: hovered === pillar.id ? pillar.accent : undefined }}
                  >
                    {pillar.label}
                  </h3>
                  <p className="text-xs font-sans text-text-muted italic mb-4">
                    {pillar.tagline}
                  </p>
                  <p className="text-text-muted text-sm leading-relaxed font-sans">
                    {pillar.short}
                  </p>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedOnScroll delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              to="/learning"
              className="inline-flex items-center gap-2 text-amber font-sans font-semibold text-sm hover:gap-3 transition-all duration-200 group"
            >
              Explore the Learning Experience in Depth
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </AnimatedOnScroll>
      </div>
    </section>
  );
}
