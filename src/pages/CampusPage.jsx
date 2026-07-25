import { AnimatedOnScroll, StaggerContainer, StaggerItem } from '../components/ui/AnimatedOnScroll';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GlassCard } from '../components/ui/GlassCard';
import { Trees, Dumbbell, FlaskConical, Palette, BookOpen, Laptop, Music, Utensils } from 'lucide-react';

const facilities = [
  { icon: Trees, name: 'Eight-Acre Green Campus', desc: 'Mature trees, open courts, and landscaped gardens that make the outdoors an active part of the school day.' },
  { icon: Dumbbell, name: 'Sports Complex', desc: 'Full-size football pitch, swimming pool, indoor basketball court, and tennis courts with professional coaching.' },
  { icon: FlaskConical, name: 'Science Laboratories', desc: 'Fully equipped Physics, Chemistry, and Biology labs with fume cupboards, electronic measurement tools, and bio-safety cabinets.' },
  { icon: Palette, name: 'Arts & Design Studio', desc: 'A light-filled studio for visual arts, graphic design, and sculpture — stocked with professional-grade materials.' },
  { icon: Laptop, name: 'Design Thinking Lab', desc: '3D printers, Arduino boards, robotics kits, and AI workstations open to all students from Grade 6.' },
  { icon: BookOpen, name: 'The Library', desc: 'Over 25,000 volumes, a curated digital collection, reading nooks, and a dedicated periodicals corner for senior students.' },
  { icon: Music, name: 'Performing Arts Wing', desc: 'A 500-seat auditorium, two rehearsal rooms, a recording studio, and dedicated practice spaces for music, dance, and drama.' },
  { icon: Utensils, name: 'Dining Hall & Kitchens', desc: 'A light, airy dining hall serving nutritionally balanced meals — supervised by a qualified dietitian with allergen accommodation.' },
];

// Abstract gradient tiles for the mosaic
const mosaicTiles = [
  { bg: 'from-amber/30 to-rose/15', size: 'col-span-2 row-span-2', label: 'Open Grounds' },
  { bg: 'from-blue-500/25 to-blue-900/10', size: 'col-span-1 row-span-1', label: 'Science Labs' },
  { bg: 'from-emerald/25 to-teal-800/10', size: 'col-span-1 row-span-1', label: 'Library' },
  { bg: 'from-purple-500/25 to-purple-900/10', size: 'col-span-1 row-span-2', label: 'Arts Studio' },
  { bg: 'from-rose/25 to-pink-900/10', size: 'col-span-1 row-span-1', label: 'Auditorium' },
  { bg: 'from-teal-500/25 to-cyan-900/10', size: 'col-span-2 row-span-1', label: 'Sports Complex' },
];

export function CampusPage() {
  return (
    <article>
      {/* Hero */}
      <div className="relative pt-28 pb-20 mesh-bg overflow-hidden">
        <div className="container-px relative z-10 text-center">
          <AnimatedOnScroll>
            <p className="text-xs font-semibold tracking-widest-2 uppercase text-amber mb-4">Our Campus</p>
            <span className="accent-line-center block mb-6" />
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-text leading-tight-2 max-w-4xl mx-auto">
              A <span className="gradient-text italic">campus</span> designed for curiosity
            </h1>
            <p className="mt-6 text-text-muted text-lg max-w-2xl mx-auto leading-relaxed font-sans">
              Eight acres of deliberate architecture — where every space invites learning,
              collaboration, and the freedom to explore.
            </p>
          </AnimatedOnScroll>
        </div>
      </div>

      {/* Mosaic Gallery */}
      <section id="life" className="section-py bg-base" aria-labelledby="mosaic-heading">
        <div className="container-px">
          <AnimatedOnScroll>
            <SectionHeading
              eyebrow="Campus at a Glance"
              title="The Vasant Valley Environment"
              subtitle='We call it the "classroom without walls" — a campus where indoor and outdoor learning blur together.'
              id="mosaic-heading"
            />
          </AnimatedOnScroll>

          {/* Abstract mosaic grid */}
          <AnimatedOnScroll delay={0.1}>
            <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[500px] sm:h-[600px]" aria-label="Campus spaces visual grid">
              {mosaicTiles.map((tile) => (
                <div
                  key={tile.label}
                  className={`${tile.size} bg-gradient-to-br ${tile.bg} rounded-2xl glass border border-white/5 flex items-end p-5 relative overflow-hidden group transition-all duration-300 hover:border-white/15`}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"
                    aria-hidden="true"
                  />
                  <span className="font-sans font-semibold text-text/70 text-sm relative z-10 group-hover:text-text transition-colors duration-200">
                    {tile.label}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedOnScroll>
        </div>
      </section>

      {/* Classroom Without Walls */}
      <section className="section-py bg-surface" aria-labelledby="cww-heading">
        <div className="container-px">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedOnScroll variant="slideLeft">
              <SectionHeading
                eyebrow="Our Philosophy of Space"
                title={`"Classroom Without Walls"`}
                id="cww-heading"
              />
              <div className="space-y-5 text-text-muted text-base leading-relaxed font-sans">
                <p>
                  At Vasant Valley, we reject the idea that meaningful learning can only happen
                  within four walls. The campus itself is a teaching resource — from the kitchen
                  gardens maintained by students for their environmental science classes, to the
                  open amphitheatre used for outdoor drama and morning assemblies.
                </p>
                <p>
                  Field trips are not treats — they are pedagogy. A geography class may begin in
                  the classroom but it finishes beside the ridge forests of South Delhi.
                  A history lesson may start with a text but it ends with an artefact in hand
                  at a museum.
                </p>
                <p>
                  Architecture matters here too. Natural light, open corridors, multiple gathering
                  spaces of different scales — all of this shapes the mood and culture of learning.
                  We are deliberate about every square metre.
                </p>
              </div>
            </AnimatedOnScroll>

            <AnimatedOnScroll variant="slideRight" delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '8 Acres', desc: 'Green campus footprint' },
                  { value: '500', desc: 'Seat auditorium' },
                  { value: '25,000+', desc: 'Library volumes' },
                  { value: '12+', desc: 'Sports disciplines' },
                ].map((stat) => (
                  <div key={stat.value} className="glass rounded-2xl p-6 border border-white/5 text-center">
                    <div className="font-display text-3xl font-semibold gradient-text">{stat.value}</div>
                    <div className="text-text-muted text-xs mt-2 font-sans">{stat.desc}</div>
                  </div>
                ))}
              </div>
            </AnimatedOnScroll>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section id="facilities" className="section-py bg-base" aria-labelledby="facilities-heading">
        <div className="container-px">
          <AnimatedOnScroll>
            <SectionHeading
              eyebrow="World-Class Facilities"
              title="Built for every dimension of growth"
              subtitle="Our infrastructure matches our ambition — designed to support academic, athletic, creative, and social development in equal measure."
              id="facilities-heading"
            />
          </AnimatedOnScroll>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.07}>
            {facilities.map(({ icon: Icon, name, desc }) => (
              <StaggerItem key={name}>
                <GlassCard className="p-6 h-full" hover>
                  <div className="w-11 h-11 rounded-xl bg-amber/10 flex items-center justify-center mb-5">
                    <Icon size={22} className="text-amber" aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-semibold text-text text-lg mb-3">{name}</h3>
                  <p className="text-text-muted text-sm leading-relaxed font-sans">{desc}</p>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </article>
  );
}
