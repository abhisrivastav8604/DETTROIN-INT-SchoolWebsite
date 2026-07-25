import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AnimatedOnScroll } from '../ui/AnimatedOnScroll';

const milestones = [
  { year: '1990', event: 'Vasant Valley School founded in Vasant Kunj by Aroon Purie and Rekha Purie on an eight-acre campus.' },
  { year: '1997', event: 'First graduating batch achieves 100% CBSE results; school gains recognition as one of Delhi\'s top CBSE institutions.' },
  { year: '2005', event: 'Eight Pillars of Learning framework formalised — integrating cerebral, social, physical, spiritual, emotional, environmental, creative, and ethical dimensions.' },
  { year: '2015', event: 'Campus expansion includes performing arts wing, design thinking lab, and expanded sports infrastructure.' },
  { year: '2024', event: 'Thirty-five years of graduates spanning IITs, NLUs, global universities, and every field of creative and civic life.' },
];

export function FoundingStory() {
  return (
    <section className="section-py bg-base relative overflow-hidden" aria-label="Founding story">
      {/* Decorative blob */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] blob bg-amber opacity-5 pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-px">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Story */}
          <AnimatedOnScroll variant="slideLeft">
            <div>
              <p className="text-xs font-semibold tracking-widest-2 uppercase text-amber mb-4">
                Our Founding Story
              </p>
              <span className="accent-line block mb-6" />
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-text leading-tight-2 mb-8">
                A vision planted in{' '}
                <span className="gradient-text italic">1990</span>
              </h2>
              <div className="space-y-5 text-text-muted text-base leading-relaxed font-sans">
                <p>
                  In 1990, journalist and publisher Aroon Purie and educator Rekha Purie founded
                  Vasant Valley School with a belief that had not yet become fashionable: that
                  children learn best when they are treated as intelligent individuals, not
                  empty vessels to be filled.
                </p>
                <p>
                  The eight-acre campus in Vasant Kunj, South Delhi, was designed to be a
                  place where rigour and joy coexisted — where a child could spend the morning
                  solving differential equations and the afternoon staging a play, and find
                  both experiences equally serious.
                </p>
                <p>
                  Over three decades later, that founding instinct has been formalised into our
                  Eight Pillars of Learning — a holistic framework that ensures no dimension of
                  a child's development is treated as secondary. Academic achievement matters
                  deeply here. So does the kind of person a student becomes.
                </p>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-8 text-amber font-sans font-semibold text-sm hover:gap-3 transition-all duration-200 group"
                aria-label="Learn more about Vasant Valley School's history"
              >
                Read Our Full Story
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </AnimatedOnScroll>

          {/* Right — Timeline */}
          <AnimatedOnScroll variant="slideRight" delay={0.15}>
            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-[7px] top-0 bottom-0 w-px bg-gradient-to-b from-amber/60 via-amber/20 to-transparent"
                aria-hidden="true"
              />

              <ol className="space-y-8" aria-label="School milestones timeline">
                {milestones.map((m, i) => (
                  <li key={m.year} className="relative pl-8">
                    {/* Dot */}
                    <div
                      className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-amber bg-base"
                      aria-hidden="true"
                    />
                    <time
                      className="font-display text-amber font-semibold text-lg"
                      dateTime={m.year}
                    >
                      {m.year}
                    </time>
                    <p className="mt-1.5 text-text-muted text-sm leading-relaxed font-sans">
                      {m.event}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </AnimatedOnScroll>
        </div>
      </div>
    </section>
  );
}
