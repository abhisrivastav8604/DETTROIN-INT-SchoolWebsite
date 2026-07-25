import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarDays, Filter } from 'lucide-react';
import { events, eventCategories, eventYears } from '../data/events';
import { AnimatedOnScroll } from '../components/ui/AnimatedOnScroll';
import { SectionHeading } from '../components/ui/SectionHeading';

const tagColors = {
  Achievement: 'bg-amber/15 text-amber border-amber/20',
  Sports: 'bg-rose/15 text-rose border-rose/20',
  Arts: 'bg-purple-500/15 text-purple-400 border-purple-400/20',
  Innovation: 'bg-blue-500/15 text-blue-400 border-blue-400/20',
  Community: 'bg-emerald/15 text-emerald border-emerald/20',
};

function NewsCard({ event }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col group"
    >
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          width="600"
          height="400"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-transparent to-transparent" aria-hidden="true" />
        <span className={`absolute top-4 left-4 text-xs font-semibold font-sans px-3 py-1 rounded-full border ${tagColors[event.tag] || 'bg-white/10 text-text'}`}>
          {event.tag}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-text-muted text-xs font-sans mb-3">
          <CalendarDays size={12} aria-hidden="true" />
          <time dateTime={event.date}>{event.date}</time>
        </div>
        <h3 className="font-display font-semibold text-text text-lg leading-snug mb-3 group-hover:text-amber transition-colors duration-200 flex-1">
          {event.title}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed font-sans">{event.excerpt}</p>
      </div>
    </motion.article>
  );
}

export function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeYear, setActiveYear] = useState('All');

  const filtered = events.filter((e) => {
    const catMatch = activeCategory === 'All' || e.tag === activeCategory;
    const yearMatch = activeYear === 'All' || e.year === Number(activeYear);
    return catMatch && yearMatch;
  });

  return (
    <article>
      {/* Hero */}
      <div className="relative pt-28 pb-20 mesh-bg overflow-hidden">
        <div className="container-px relative z-10 text-center">
          <AnimatedOnScroll>
            <p className="text-xs font-semibold tracking-widest-2 uppercase text-amber mb-4">What's Happening</p>
            <span className="accent-line-center block mb-6" />
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-text leading-tight-2 max-w-3xl mx-auto">
              News &amp; <span className="gradient-text italic">Events</span>
            </h1>
            <p className="mt-6 text-text-muted text-lg max-w-xl mx-auto leading-relaxed font-sans">
              Achievements, performances, innovations, and community moments that define life at Vasant Valley.
            </p>
          </AnimatedOnScroll>
        </div>
      </div>

      {/* Filters */}
      <section className="section-py bg-base" aria-label="News and events archive">
        <div className="container-px">
          <AnimatedOnScroll>
            {/* Filter Controls */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10" role="group" aria-label="Filter news">
              {/* Category Pills */}
              <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
                <span className="flex items-center gap-1.5 text-text-muted text-xs font-sans self-center">
                  <Filter size={13} aria-hidden="true" /> Category:
                </span>
                {eventCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    aria-pressed={activeCategory === cat}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold font-sans border transition-all duration-200 focus-visible:outline-amber ${
                      activeCategory === cat
                        ? 'bg-amber/15 border-amber/40 text-amber'
                        : 'glass border-white/8 text-text-muted hover:text-text hover:border-white/20'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Year Pills */}
              <div className="flex flex-wrap gap-2 sm:ml-auto" role="group" aria-label="Filter by year">
                {['All', ...eventYears.map(String)].map((yr) => (
                  <button
                    key={yr}
                    onClick={() => setActiveYear(yr)}
                    aria-pressed={activeYear === yr}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold font-sans border transition-all duration-200 focus-visible:outline-amber ${
                      activeYear === yr
                        ? 'bg-rose/15 border-rose/40 text-rose'
                        : 'glass border-white/8 text-text-muted hover:text-text hover:border-white/20'
                    }`}
                  >
                    {yr}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <p className="text-text-muted text-xs font-sans mb-6">
              Showing {filtered.length} {filtered.length === 1 ? 'item' : 'items'}
              {activeCategory !== 'All' ? ` in ${activeCategory}` : ''}
              {activeYear !== 'All' ? ` from ${activeYear}` : ''}
            </p>
          </AnimatedOnScroll>

          {/* Grid */}
          {filtered.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              aria-live="polite"
              aria-label="News results"
            >
              <AnimatePresence>
                {filtered.map((event) => (
                  <NewsCard key={event.id} event={event} />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
              aria-live="polite"
            >
              <p className="text-text-muted font-sans">No items match the selected filters.</p>
              <button
                onClick={() => { setActiveCategory('All'); setActiveYear('All'); }}
                className="mt-4 text-amber text-sm font-semibold hover:underline focus-visible:outline-amber"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </article>
  );
}
