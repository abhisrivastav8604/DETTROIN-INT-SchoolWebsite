import { AnimatedOnScroll, StaggerContainer, StaggerItem } from '../ui/AnimatedOnScroll';

const beliefs = [
  {
    icon: '◈',
    title: 'Process Over Performance',
    body: 'We measure growth by the quality of thinking, not only the grade on a page. Struggle is the beginning of mastery, not its opposite.',
  },
  {
    icon: '◉',
    title: 'Every Child, Seen',
    body: 'Small class sizes and individualised attention ensure that no student disappears into the crowd. Each learner has a distinct trajectory.',
  },
  {
    icon: '◐',
    title: 'Education as Citizenship',
    body: 'Graduates of Vasant Valley leave not just academically prepared — they leave ethically committed, environmentally conscious, and ready to contribute.',
  },
];

export function BeliefStrip() {
  return (
    <section id="belief-strip" className="section-py bg-surface" aria-label="Core beliefs">
      <div className="container-px">
        <AnimatedOnScroll>
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest-2 uppercase text-amber mb-4">
              Our Philosophy
            </p>
            <span className="accent-line-center block mb-6" />
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-text max-w-3xl mx-auto leading-tight-2">
              Education that{' '}
              <span className="gradient-text italic">forms the person,</span>
              <br />
              not just the portfolio
            </h2>
          </div>
        </AnimatedOnScroll>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.12}>
          {beliefs.map((belief) => (
            <StaggerItem key={belief.title}>
              <div className="glass rounded-3xl p-8 lg:p-10 h-full group hover:border-amber/20 transition-all duration-300 border border-white/5">
                <div className="text-4xl text-amber mb-6 font-light leading-none">
                  {belief.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-text mb-4 leading-snug">
                  {belief.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed font-sans">
                  {belief.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
