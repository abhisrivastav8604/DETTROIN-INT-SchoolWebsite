import { AnimatedOnScroll, StaggerContainer, StaggerItem } from '../components/ui/AnimatedOnScroll';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { Heart, Star, Globe, BookOpen } from 'lucide-react';

const values = [
  { icon: Heart, label: 'Compassion', desc: 'We cultivate genuine care for others — in every classroom, corridor, and community interaction.' },
  { icon: Star, label: 'Excellence', desc: 'We pursue quality in everything we do — not for rankings, but because we believe in the dignity of doing things well.' },
  { icon: Globe, label: 'Global Citizenship', desc: 'Our students understand that their responsibilities extend beyond their school, city, and country.' },
  { icon: BookOpen, label: 'Love of Learning', desc: 'We kindle the intrinsic joy of discovery — so students remain curious long after they leave our gates.' },
];

const leadership = [
  { name: 'Ms. Anuradha Kapoor', role: 'Principal', bio: 'With over 25 years in progressive education, Ms. Kapoor leads the school with a commitment to individualised learning and institutional integrity.' },
  { name: 'Mr. Vikram Nair', role: 'Vice Principal – Academics', bio: 'An alumnus of Delhi University and IIM Calcutta, Mr. Nair drives the school\'s curriculum innovation and assessment design.' },
  { name: 'Ms. Ritu Sharma', role: 'Director of Student Wellbeing', bio: 'A certified school counsellor and social-emotional learning specialist, Ms. Sharma oversees the school\'s pastoral care framework.' },
];

export function AboutPage() {
  return (
    <article>
      {/* Hero Banner */}
      <div className="relative pt-28 pb-20 mesh-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-amber/8 via-transparent to-transparent" aria-hidden="true" />
        <div className="container-px relative z-10 text-center">
          <AnimatedOnScroll>
            <p className="text-xs font-semibold tracking-widest-2 uppercase text-amber mb-4">Our Story</p>
            <span className="accent-line-center block mb-6" />
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-text leading-tight-2 max-w-4xl mx-auto">
              About <span className="gradient-text italic">Vasant Valley</span>
            </h1>
            <p className="mt-6 text-text-muted text-lg max-w-2xl mx-auto leading-relaxed font-sans">
              A school built on the conviction that education's highest purpose is to help each child become fully themselves.
            </p>
          </AnimatedOnScroll>
        </div>
      </div>

      {/* Founding Story */}
      <section id="story" className="section-py bg-base" aria-labelledby="story-heading">
        <div className="container-px">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedOnScroll variant="slideLeft">
              <div>
                <SectionHeading
                  eyebrow="Founding Story"
                  title="How it began"
                  id="story-heading"
                />
                <div className="space-y-5 text-text-muted text-base leading-relaxed font-sans">
                  <p>
                    Vasant Valley School opened its gates in 1990 in the leafy neighbourhood of
                    Vasant Kunj, South Delhi. Founded by Aroon Purie and Rekha Purie — a journalist
                    and an educator — the school was conceived as a response to a system they
                    felt prioritised compliance over curiosity.
                  </p>
                  <p>
                    The founding charter was clear: every child at Vasant Valley would be
                    educated as an individual, not processed as a unit. Small class sizes,
                    thoughtful teachers, and an emphasis on the whole person — not just the
                    examination candidate — were non-negotiable from day one.
                  </p>
                  <p>
                    Three and a half decades later, the school spans eight acres of green campus,
                    and its graduates occupy positions in medicine, law, the arts, technology,
                    policy, and entrepreneurship across the world. The original founding instinct
                    remains unchanged.
                  </p>
                  <p>
                    The eight pillars of learning — the framework we use to structure every
                    child's educational experience — were not invented; they were discovered
                    by observing what our most fulfilled graduates had in common. They are the
                    DNA of what we have always done, made explicit.
                  </p>
                </div>
              </div>
            </AnimatedOnScroll>

            {/* Abstract campus graphic */}
            <AnimatedOnScroll variant="slideRight" delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { bg: 'from-amber/20 to-rose/10', label: 'Est. 1990', sub: 'Founded in Vasant Kunj' },
                  { bg: 'from-blue-500/20 to-blue-600/5', label: '8 Acres', sub: 'Green campus' },
                  { bg: 'from-emerald/20 to-teal-600/5', label: '8 Pillars', sub: 'Holistic framework' },
                  { bg: 'from-purple-500/20 to-purple-600/5', label: '35+ Years', sub: 'Of excellence' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`glass rounded-2xl p-8 flex flex-col justify-end bg-gradient-to-br ${item.bg} border border-white/5`}
                    style={{ minHeight: '180px' }}
                  >
                    <div className="font-display text-3xl font-semibold text-text">{item.label}</div>
                    <div className="text-text-muted text-sm mt-1 font-sans">{item.sub}</div>
                  </div>
                ))}
              </div>
            </AnimatedOnScroll>
          </div>
        </div>
      </section>

      {/* Vision & Philosophy */}
      <section id="vision" className="section-py bg-surface" aria-labelledby="vision-heading">
        <div className="container-px">
          <AnimatedOnScroll>
            <SectionHeading
              eyebrow="Vision & Philosophy"
              title="What we believe"
              subtitle="Our philosophy is not a manifesto written by committees. It is the lived experience of thousands of teachers, students, and parents distilled into principles."
              center
              id="vision-heading"
            />
          </AnimatedOnScroll>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.1}>
            {values.map(({ icon: Icon, label, desc }) => (
              <StaggerItem key={label}>
                <GlassCard className="p-7 h-full" hover>
                  <div className="w-11 h-11 rounded-xl bg-amber/10 flex items-center justify-center mb-5">
                    <Icon size={22} className="text-amber" aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-semibold text-text text-xl mb-3">{label}</h3>
                  <p className="text-text-muted text-sm leading-relaxed font-sans">{desc}</p>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Motto */}
          <AnimatedOnScroll delay={0.3}>
            <div className="mt-16 glass rounded-3xl p-10 lg:p-14 text-center relative overflow-hidden border border-amber/10">
              <div className="absolute inset-0 bg-gradient-to-br from-amber/5 to-rose/5" aria-hidden="true" />
              <p className="text-text-muted text-sm uppercase tracking-widest font-sans mb-4 relative z-10">Our Motto</p>
              <h2 className="font-display text-5xl lg:text-6xl font-semibold gradient-text relative z-10">
                Excellence in Deed
              </h2>
              <p className="mt-6 text-text-muted text-base max-w-xl mx-auto leading-relaxed font-sans relative z-10">
                Excellence is not a score on a page — it is the quality of attention you bring
                to every action, every relationship, and every decision. That is what we teach.
              </p>
            </div>
          </AnimatedOnScroll>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="section-py bg-base" aria-labelledby="leadership-heading">
        <div className="container-px">
          <AnimatedOnScroll>
            <SectionHeading
              eyebrow="School Leadership"
              title="The people who lead"
              subtitle="Our leadership team brings together decades of experience in progressive education, child development, and institutional design."
              id="leadership-heading"
            />
          </AnimatedOnScroll>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {leadership.map((person) => (
              <StaggerItem key={person.name}>
                <GlassCard className="p-8 h-full" hover={false}>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mb-6">
                    <span className="font-display font-bold text-white text-2xl">
                      {person.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-text text-xl mb-1">{person.name}</h3>
                  <p className="text-amber text-xs font-semibold font-sans tracking-wide uppercase mb-4">{person.role}</p>
                  <p className="text-text-muted text-sm leading-relaxed font-sans">{person.bio}</p>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </article>
  );
}
