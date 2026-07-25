import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AnimatedOnScroll } from '../ui/AnimatedOnScroll';

export function AdmissionCTA() {
  return (
    <section className="relative overflow-hidden" aria-label="Admissions call to action">
      {/* Full gradient background */}
      <div className="bg-gradient-accent py-20 sm:py-24 lg:py-28 relative">
        {/* Mesh overlay */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.3) 0%, transparent 60%), radial-gradient(circle at 70% 50%, rgba(0,0,0,0.2) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />

        <div className="container-px relative z-10">
          <AnimatedOnScroll>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight-2 mb-6">
                Ready to join the Vasant Valley community?
              </h2>
              <p className="text-white/80 text-lg font-sans leading-relaxed mb-10 max-w-xl mx-auto">
                Applications for the 2026–27 academic year are now open. Discover the process,
                meet the community, and take the first step.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/admissions"
                  className="inline-flex items-center gap-2 bg-white text-rose font-semibold font-sans px-9 py-4 rounded-full text-base hover:bg-white/90 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-white shadow-xl shadow-black/20"
                >
                  Begin Your Application
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-white font-semibold font-sans px-9 py-4 rounded-full text-base border-2 border-white/40 hover:border-white hover:bg-white/10 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-white"
                >
                  Talk to Admissions
                </Link>
              </div>
            </div>
          </AnimatedOnScroll>
        </div>
      </div>
    </section>
  );
}
