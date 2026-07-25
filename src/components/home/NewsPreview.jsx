import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, Tag } from 'lucide-react';
import { events } from '../../data/events';
import { AnimatedOnScroll, StaggerContainer, StaggerItem } from '../ui/AnimatedOnScroll';
import { SectionHeading } from '../ui/SectionHeading';

const tagColors = {
  Achievement: 'bg-amber/15 text-amber',
  Sports: 'bg-rose/15 text-rose',
  Arts: 'bg-purple-500/15 text-purple-400',
  Innovation: 'bg-blue-500/15 text-blue-400',
  Community: 'bg-emerald/15 text-emerald',
};

function NewsCard({ event }) {
  return (
    <article className="glass rounded-2xl overflow-hidden group cursor-default border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col h-full">
      {/* Image */}
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
        <span className={`absolute top-4 left-4 text-xs font-semibold font-sans px-3 py-1 rounded-full ${tagColors[event.tag] || 'bg-white/10 text-text'}`}>
          {event.tag}
        </span>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-text-muted text-xs font-sans mb-3">
          <CalendarDays size={12} aria-hidden="true" />
          <time dateTime={event.date}>{event.date}</time>
        </div>
        <h3 className="font-display font-semibold text-text text-lg leading-snug mb-3 group-hover:text-amber transition-colors duration-200">
          {event.title}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed font-sans flex-1">
          {event.excerpt}
        </p>
      </div>
    </article>
  );
}

export function NewsPreview() {
  const featured = events.slice(0, 3);

  return (
    <section className="section-py bg-base" aria-labelledby="news-preview-heading">
      <div className="container-px">
        <AnimatedOnScroll>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 md:mb-16">
            <SectionHeading
              eyebrow="Latest from Campus"
              title="News & Events"
              subtitle="Achievements, performances, innovations, and moments that define life at Vasant Valley."
              id="news-preview-heading"
            />
            <Link
              to="/news"
              className="flex-shrink-0 inline-flex items-center gap-2 text-amber font-sans font-semibold text-sm hover:gap-3 transition-all duration-200 group self-start sm:self-end pb-1"
            >
              View All News
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimatedOnScroll>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.1}
        >
          {featured.map((event) => (
            <StaggerItem key={event.id}>
              <NewsCard event={event} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
