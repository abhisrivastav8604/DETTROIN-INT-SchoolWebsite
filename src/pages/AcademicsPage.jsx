import { AnimatedOnScroll, StaggerContainer, StaggerItem } from '../components/ui/AnimatedOnScroll';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GlassCard } from '../components/ui/GlassCard';
import { CheckCircle2, BookOpen, FlaskConical, Calculator, Languages, Globe, Music } from 'lucide-react';

const streams = [
  {
    name: 'Science Stream',
    subjects: ['Physics', 'Chemistry', 'Biology / Mathematics', 'English (Core)', 'Computer Science / Physical Education'],
    color: 'from-blue-500/20 to-blue-600/5',
    accent: '#3B82F6',
  },
  {
    name: 'Commerce Stream',
    subjects: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics', 'English (Core)'],
    color: 'from-emerald/20 to-teal-600/5',
    accent: '#4F9E7E',
  },
  {
    name: 'Humanities Stream',
    subjects: ['History', 'Political Science', 'Economics / Sociology', 'English (Core)', 'Psychology / Fine Arts'],
    color: 'from-amber/20 to-rose/10',
    accent: '#F5A623',
  },
];

const enrichment = [
  { icon: FlaskConical, title: 'Design Thinking Lab', desc: 'Robotics, 3D printing, Arduino, and AI sandboxes open to all students from Grade 6.' },
  { icon: Calculator, title: 'Mathematical Olympiad Coaching', desc: 'Structured training for RMO, INMO, and international competitions alongside the regular curriculum.' },
  { icon: Languages, title: 'Modern Languages', desc: 'French, German, and Sanskrit offered from the middle school — with native-level conversation practice.' },
  { icon: Globe, title: 'Global Perspectives Programme', desc: 'Model UN, debating circuits, and international exchange programmes that build cross-cultural fluency.' },
  { icon: Music, title: 'Performing Arts Integration', desc: 'Theatre, dance, and music are not extracurriculars — they are timetabled, assessed, and celebrated.' },
  { icon: BookOpen, title: 'Research Methodology', desc: 'From Grade 9, students learn the principles of academic research, citation, and argument construction.' },
];

export function AcademicsPage() {
  return (
    <article>
      {/* Hero */}
      <div className="relative pt-28 pb-20 mesh-bg overflow-hidden">
        <div className="container-px relative z-10 text-center">
          <AnimatedOnScroll>
            <p className="text-xs font-semibold tracking-widest-2 uppercase text-amber mb-4">Curriculum</p>
            <span className="accent-line-center block mb-6" />
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-text leading-tight-2 max-w-4xl mx-auto">
              Academics at <span className="gradient-text italic">Vasant Valley</span>
            </h1>
            <p className="mt-6 text-text-muted text-lg max-w-2xl mx-auto leading-relaxed font-sans">
              A rigorous CBSE curriculum, enriched by programmes designed to extend every student
              beyond what a syllabus alone can offer.
            </p>
          </AnimatedOnScroll>
        </div>
      </div>

      {/* CBSE Overview */}
      <section className="section-py bg-base" aria-labelledby="cbse-heading">
        <div className="container-px">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedOnScroll variant="slideLeft">
              <SectionHeading
                eyebrow="Board Curriculum"
                title="CBSE — Done Differently"
                id="cbse-heading"
              />
              <div className="space-y-5 text-text-muted text-base leading-relaxed font-sans">
                <p>
                  Vasant Valley is affiliated to the Central Board of Secondary Education (CBSE)
                  for Classes I through XII. But affiliation to a board describes the minimum,
                  not the ambition. We use the CBSE framework as a foundation, not a ceiling.
                </p>
                <p>
                  Our teaching philosophy emphasises genuine comprehension over rote memorisation,
                  process-based assessment alongside terminal examinations, and the cultivation
                  of independent reasoning at every level.
                </p>
                <p>
                  The school runs co-educational classes in a teacher-pupil ratio that allows
                  for individualised attention. From Grade I through Grade XII, each academic
                  year is carefully structured to ensure depth rather than breadth.
                </p>
              </div>
            </AnimatedOnScroll>

            <AnimatedOnScroll variant="slideRight" delay={0.15}>
              <div className="space-y-4">
                {[
                  { range: 'Grades I – V', label: 'Primary School', desc: 'Foundation literacy, numeracy, arts integration, and project-based discovery learning.' },
                  { range: 'Grades VI – VIII', label: 'Middle School', desc: 'Departmentalised teaching, first exposure to laboratory science, and social-emotional learning curriculum.' },
                  { range: 'Grades IX – X', label: 'Secondary School', desc: 'CBSE Board preparation structured with formative assessments, seminars, and enrichment modules.' },
                  { range: 'Grades XI – XII', label: 'Senior Secondary', desc: 'Three streams (Science, Commerce, Humanities) with elective choices and university counselling.' },
                ].map((item) => (
                  <div key={item.range} className="glass rounded-2xl p-6 flex items-start gap-5 border border-white/5">
                    <div className="w-14 h-14 rounded-xl bg-amber/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-display font-bold text-amber text-xs text-center leading-tight px-1">{item.range}</span>
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-text text-lg">{item.label}</h3>
                      <p className="text-text-muted text-sm mt-1.5 leading-relaxed font-sans">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedOnScroll>
          </div>
        </div>
      </section>

      {/* Streams */}
      <section className="section-py bg-surface" aria-labelledby="streams-heading">
        <div className="container-px">
          <AnimatedOnScroll>
            <SectionHeading
              eyebrow="Grade XI–XII"
              title="Senior Secondary Streams"
              subtitle="Three richly structured streams — each with curated electives and university-placement guidance."
              center
              id="streams-heading"
            />
          </AnimatedOnScroll>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {streams.map((stream) => (
              <StaggerItem key={stream.name}>
                <div className={`glass rounded-3xl p-8 h-full bg-gradient-to-br ${stream.color} border border-white/5`}>
                  <h3 className="font-display font-semibold text-text text-2xl mb-6" style={{ color: stream.accent }}>
                    {stream.name}
                  </h3>
                  <ul className="space-y-3">
                    {stream.subjects.map((s) => (
                      <li key={s} className="flex items-center gap-3">
                        <CheckCircle2 size={16} style={{ color: stream.accent }} className="flex-shrink-0" aria-hidden="true" />
                        <span className="text-text-muted text-sm font-sans">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Enrichment */}
      <section id="curriculum" className="section-py bg-base" aria-labelledby="enrichment-heading">
        <div className="container-px">
          <AnimatedOnScroll>
            <SectionHeading
              eyebrow="Beyond the Syllabus"
              title="Enrichment Programmes"
              subtitle="Learning doesn't stop at the board syllabus. These programmes extend students into real-world challenge, creativity, and global citizenship."
              id="enrichment-heading"
            />
          </AnimatedOnScroll>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
            {enrichment.map(({ icon: Icon, title, desc }) => (
              <StaggerItem key={title}>
                <GlassCard className="p-7 h-full" hover>
                  <div className="w-11 h-11 rounded-xl bg-amber/10 flex items-center justify-center mb-5">
                    <Icon size={22} className="text-amber" aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-semibold text-text text-lg mb-3">{title}</h3>
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
