import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import { AnimatedOnScroll } from '../ui/AnimatedOnScroll';
import { SectionHeading } from '../ui/SectionHeading';

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const paginate = (dir) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  const t = testimonials[current];

  return (
    <section className="section-py bg-surface relative overflow-hidden" aria-label="Testimonials">
      {/* Decorative blob */}
      <div className="absolute bottom-0 left-0 w-96 h-96 blob bg-emerald opacity-5 pointer-events-none" aria-hidden="true" />

      <div className="container-px">
        <AnimatedOnScroll>
          <SectionHeading
            eyebrow="Voices from our Community"
            title="What our students say"
            subtitle="From graduating classes to current students — the people who know Vasant Valley best share what shaped them."
            center
          />
        </AnimatedOnScroll>

        <AnimatedOnScroll delay={0.2}>
          <div className="max-w-3xl mx-auto">
            {/* Card */}
            <div className="glass rounded-3xl p-8 sm:p-12 relative min-h-[320px] flex flex-col justify-between overflow-hidden">
              {/* Quote Icon */}
              <Quote
                size={80}
                className="absolute top-6 right-6 text-amber/5"
                aria-hidden="true"
              />

              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-6"
                >
                  <blockquote className="font-display text-xl sm:text-2xl text-text leading-relaxed italic font-light">
                    "{t.quote}"
                  </blockquote>
                  <footer className="flex items-center gap-4">
                    {/* Avatar initial */}
                    <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center flex-shrink-0">
                      <span className="font-display font-bold text-white text-lg">
                        {t.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <cite className="font-sans font-semibold text-text not-italic text-sm block">
                        {t.name}
                      </cite>
                      <span className="font-sans text-text-muted text-xs">{t.role}</span>
                      <span className="font-sans text-amber text-xs block mt-0.5">{t.institution}</span>
                    </div>
                  </footer>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mt-8">
              {/* Dots */}
              <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial navigation">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                    role="tab"
                    aria-selected={i === current}
                    aria-label={`Testimonial ${i + 1} of ${testimonials.length}`}
                    className={`rounded-full transition-all duration-300 focus-visible:outline-amber ${
                      i === current ? 'w-8 h-2 bg-amber' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => paginate(-1)}
                  aria-label="Previous testimonial"
                  className="w-10 h-10 glass rounded-full flex items-center justify-center text-text-muted hover:text-text hover:bg-white/10 transition-all duration-200 focus-visible:outline-amber"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => paginate(1)}
                  aria-label="Next testimonial"
                  className="w-10 h-10 glass rounded-full flex items-center justify-center text-text-muted hover:text-text hover:bg-white/10 transition-all duration-200 focus-visible:outline-amber"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </AnimatedOnScroll>
      </div>
    </section>
  );
}
