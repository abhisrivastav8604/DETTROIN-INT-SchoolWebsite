import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { pillars } from '../data/pillars';
import { AnimatedOnScroll } from '../components/ui/AnimatedOnScroll';
import { SectionHeading } from '../components/ui/SectionHeading';
import { CheckCircle2 } from 'lucide-react';

function PillarIcon({ name, size = 24, color }) {
  const Icon = LucideIcons[name];
  if (!Icon) return null;
  return <Icon size={size} color={color} aria-hidden="true" />;
}

export function LearningPage() {
  const [activeId, setActiveId] = useState('cerebral');
  const active = pillars.find((p) => p.id === activeId) || pillars[0];

  return (
    <article>
      {/* Hero */}
      <div className="relative pt-28 pb-20 mesh-bg overflow-hidden">
        <div className="container-px relative z-10 text-center">
          <AnimatedOnScroll>
            <p className="text-xs font-semibold tracking-widest-2 uppercase text-amber mb-4">Deep Dive</p>
            <span className="accent-line-center block mb-6" />
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-text leading-tight-2 max-w-4xl mx-auto">
              The <span className="gradient-text italic">Learning</span> Experience
            </h1>
            <p className="mt-6 text-text-muted text-lg max-w-2xl mx-auto leading-relaxed font-sans">
              Explore each of the Eight Pillars that structure how we think about, design, and deliver
              education at Vasant Valley.
            </p>
          </AnimatedOnScroll>
        </div>
      </div>

      {/* Pillar Selector + Detail */}
      <section className="section-py bg-base" aria-label="Eight Pillars detail">
        <div className="container-px">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Sidebar — pillar tabs */}
            <nav aria-label="Pillar navigation" className="lg:col-span-1">
              <AnimatedOnScroll variant="slideLeft">
                <ul className="space-y-2" role="tablist" aria-orientation="vertical">
                  {pillars.map((pillar) => (
                    <li key={pillar.id} role="presentation">
                      <button
                        role="tab"
                        aria-selected={activeId === pillar.id}
                        aria-controls={`panel-${pillar.id}`}
                        id={`tab-${pillar.id}`}
                        onClick={() => setActiveId(pillar.id)}
                        className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl text-left transition-all duration-200 focus-visible:outline-amber ${
                          activeId === pillar.id
                            ? 'glass border border-white/10'
                            : 'hover:bg-white/4'
                        }`}
                      >
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{
                            backgroundColor: `${pillar.accent}22`,
                          }}
                        >
                          <PillarIcon name={pillar.icon} size={18} color={activeId === pillar.id ? pillar.accent : '#9DA3AE'} />
                        </div>
                        <span
                          className={`font-sans font-medium text-sm ${
                            activeId === pillar.id ? 'text-text' : 'text-text-muted'
                          }`}
                          style={activeId === pillar.id ? { color: pillar.accent } : {}}
                        >
                          {pillar.label}
                        </span>
                        {activeId === pillar.id && (
                          <motion.div
                            layoutId="pillar-indicator"
                            className="ml-auto w-1 h-5 rounded-full"
                            style={{ backgroundColor: pillar.accent }}
                          />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </AnimatedOnScroll>
            </nav>

            {/* Main content panel */}
            <div className="lg:col-span-2" role="tabpanel" id={`panel-${active.id}`} aria-labelledby={`tab-${active.id}`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Pillar header */}
                  <div
                    className="glass rounded-3xl p-8 lg:p-10 mb-6 border border-white/5 relative overflow-hidden"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${active.color} opacity-60 rounded-3xl pointer-events-none`}
                      aria-hidden="true"
                    />
                    <div className="relative z-10">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                        style={{ backgroundColor: `${active.accent}25` }}
                      >
                        <PillarIcon name={active.icon} size={30} color={active.accent} />
                      </div>
                      <h2
                        className="font-display text-4xl font-semibold mb-2"
                        style={{ color: active.accent }}
                      >
                        {active.label}
                      </h2>
                      <p className="font-display italic text-xl text-text/80 mb-5">{active.tagline}</p>
                      <p className="text-text-muted text-base leading-relaxed font-sans max-w-xl">
                        {active.short}
                      </p>
                    </div>
                  </div>

                  {/* Detail */}
                  <div className="glass rounded-2xl p-8 lg:p-10 mb-6 border border-white/5">
                    <h3 className="font-display font-semibold text-text text-xl mb-4">In Practice</h3>
                    <p className="text-text-muted text-base leading-relaxed font-sans">
                      {active.detail}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="glass rounded-2xl p-8 lg:p-10 border border-white/5">
                    <h3 className="font-display font-semibold text-text text-xl mb-5">Programme Highlights</h3>
                    <ul className="space-y-3" aria-label={`${active.label} highlights`}>
                      {active.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3">
                          <CheckCircle2
                            size={18}
                            className="flex-shrink-0 mt-0.5"
                            style={{ color: active.accent }}
                            aria-hidden="true"
                          />
                          <span className="text-text-muted text-sm font-sans">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Grid */}
      <section className="section-py bg-surface" aria-labelledby="overview-heading">
        <div className="container-px">
          <AnimatedOnScroll>
            <SectionHeading
              eyebrow="All Eight Pillars"
              title="A complete picture"
              subtitle="Each pillar is distinct, but none stands alone. They are mutually reinforcing — a child who grows in one dimension grows in all."
              center
              id="overview-heading"
            />
          </AnimatedOnScroll>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {pillars.map((pillar, i) => (
              <AnimatedOnScroll key={pillar.id} delay={i * 0.05}>
                <button
                  onClick={() => { setActiveId(pillar.id); document.getElementById(`panel-${pillar.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                  className="glass rounded-2xl p-6 w-full text-left hover:border-white/15 transition-all duration-200 border border-white/5 group focus-visible:outline-amber"
                  aria-label={`View ${pillar.label} pillar`}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${pillar.accent}18` }}>
                    <PillarIcon name={pillar.icon} size={20} color={pillar.accent} />
                  </div>
                  <h3 className="font-display font-semibold text-text text-base group-hover:text-amber transition-colors duration-200">{pillar.label}</h3>
                  <p className="text-text-muted text-xs mt-1 font-sans italic">{pillar.tagline}</p>
                </button>
              </AnimatedOnScroll>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
