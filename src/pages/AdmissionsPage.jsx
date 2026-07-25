// Admissions page — process steps, key dates, validated form, FAQ accordion
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedOnScroll, StaggerContainer, StaggerItem } from '../components/ui/AnimatedOnScroll';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { CheckCircle2, ChevronDown, ChevronUp, Send, AlertCircle } from 'lucide-react';

const steps = [
  { step: '01', title: 'Submit Expression of Interest', desc: 'Complete the online enquiry form with the child\'s current class level and preferred joining year. No documents needed at this stage.' },
  { step: '02', title: 'School Visit & Interaction', desc: 'Attend a guided campus tour and an informal conversation between the child and our admissions team. This is not a formal assessment — it is a chance to get to know each other.' },
  { step: '03', title: 'Entrance Assessment', desc: 'A written assessment aligned to the child\'s current grade — testing reading comprehension, mathematical reasoning, and creative expression in age-appropriate formats.' },
  { step: '04', title: 'Offer of Admission', desc: 'Successful candidates receive a letter of offer. Provisional places are held for 14 days pending document submission and fee confirmation.' },
  { step: '05', title: 'Enrolment Confirmation', desc: 'Submit required documents, pay the registration fee, and confirm enrolment. Welcome to the Vasant Valley community.' },
];

const dates = [
  { event: 'Applications Open (2026–27)', date: '15 September 2025' },
  { event: 'Campus Visit Days', date: 'October – November 2025' },
  { event: 'Entrance Assessment Window', date: 'December 2025 – January 2026' },
  { event: 'Offers Released', date: 'February 2026' },
  { event: 'Enrolment Deadline', date: '31 March 2026' },
  { event: 'New Student Orientation', date: 'May 2026' },
];

const faqs = [
  { q: 'What is the age criterion for admission to Grade I?', a: 'The child must complete 6 years of age by 31 March of the academic year in which admission is sought.' },
  { q: 'Does the school accept mid-year admissions?', a: 'Mid-year admissions are considered on a case-by-case basis subject to seat availability and successful assessment.' },
  { q: 'Is there a waiting list?', a: 'Yes. Applicants not offered a place in the current cycle are offered a position on a priority waitlist for subsequent years, subject to renewal.' },
  { q: 'What documents are required at the enrolment stage?', a: 'Birth certificate, previous school report cards (Grade II onwards), Transfer Certificate from the last school, and two passport-size photographs.' },
  { q: 'Does Vasant Valley offer financial aid or scholarships?', a: 'The school maintains a merit-cum-means scholarship fund for students in Grades VI and above. Applications are reviewed annually by a committee.' },
];

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 focus-visible:outline-amber"
        aria-expanded={open}
      >
        <span className="font-sans font-medium text-text text-sm leading-relaxed">{q}</span>
        {open ? <ChevronUp size={18} className="text-amber flex-shrink-0" /> : <ChevronDown size={18} className="text-text-muted flex-shrink-0" />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-text-muted text-sm leading-relaxed font-sans">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function EnquiryForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', grade: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Full name is required.';
    if (!form.email.trim()) e.email = 'Email address is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email.';
    if (!form.grade) e.grade = 'Please select a grade.';
    if (!form.message.trim()) e.message = 'Please include a brief message.';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const inputClass = (field) =>
    `w-full bg-surface-3 border rounded-xl px-4 py-3 text-text text-sm font-sans placeholder-text-muted/50 focus:outline-none focus:ring-2 transition-all duration-200 ${
      errors[field]
        ? 'border-rose/50 focus:ring-rose/30'
        : 'border-white/8 focus:ring-amber/30 focus:border-amber/30'
    }`;

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-3xl p-12 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-emerald/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={32} className="text-emerald" />
        </div>
        <h3 className="font-display text-2xl font-semibold text-text mb-3">Enquiry Received</h3>
        <p className="text-text-muted text-sm font-sans max-w-xs mx-auto leading-relaxed">
          Thank you for your interest in Vasant Valley School. Our admissions team will respond within two working days.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Admissions enquiry form" className="glass rounded-3xl p-8 lg:p-10 space-y-5">
      <h3 className="font-display text-2xl font-semibold text-text mb-2">Submit an Enquiry</h3>
      <p className="text-text-muted text-sm font-sans">We'll get back to you within two working days.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="adm-name" className="block text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">Full Name *</label>
          <input id="adm-name" type="text" placeholder="Parent / Guardian Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className={inputClass('name')} aria-describedby={errors.name ? 'adm-name-err' : undefined} />
          {errors.name && <p id="adm-name-err" className="mt-1.5 text-rose text-xs flex items-center gap-1"><AlertCircle size={12} />{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="adm-email" className="block text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">Email Address *</label>
          <input id="adm-email" type="email" placeholder="you@example.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className={inputClass('email')} aria-describedby={errors.email ? 'adm-email-err' : undefined} />
          {errors.email && <p id="adm-email-err" className="mt-1.5 text-rose text-xs flex items-center gap-1"><AlertCircle size={12} />{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="adm-phone" className="block text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">Phone Number</label>
          <input id="adm-phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className={inputClass('phone')} />
        </div>
        <div>
          <label htmlFor="adm-grade" className="block text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">Grade Applying For *</label>
          <select id="adm-grade" value={form.grade} onChange={e => setForm({...form, grade: e.target.value})} className={`${inputClass('grade')} appearance-none`} aria-describedby={errors.grade ? 'adm-grade-err' : undefined}>
            <option value="">Select Grade</option>
            {['Grade I', 'Grade II', 'Grade III', 'Grade IV', 'Grade V', 'Grade VI', 'Grade VII', 'Grade VIII', 'Grade IX', 'Grade X', 'Grade XI', 'Grade XII'].map(g => <option key={g} value={g}>{g}</option>)}
          </select>
          {errors.grade && <p id="adm-grade-err" className="mt-1.5 text-rose text-xs flex items-center gap-1"><AlertCircle size={12} />{errors.grade}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="adm-msg" className="block text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">Message *</label>
        <textarea id="adm-msg" rows={4} placeholder="Tell us a bit about your child and any specific questions you have…" value={form.message} onChange={e => setForm({...form, message: e.target.value})} className={`${inputClass('message')} resize-none`} aria-describedby={errors.message ? 'adm-msg-err' : undefined} />
        {errors.message && <p id="adm-msg-err" className="mt-1.5 text-rose text-xs flex items-center gap-1"><AlertCircle size={12} />{errors.message}</p>}
      </div>

      <Button type="submit" variant="primary" size="md" className="w-full justify-center">
        Send Enquiry
        <Send size={16} />
      </Button>
    </form>
  );
}

export function AdmissionsPage() {
  return (
    <article>
      {/* Hero */}
      <div className="relative pt-28 pb-20 mesh-bg overflow-hidden">
        <div className="container-px relative z-10 text-center">
          <AnimatedOnScroll>
            <p className="text-xs font-semibold tracking-widest-2 uppercase text-amber mb-4">Join the Community</p>
            <span className="accent-line-center block mb-6" />
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-text leading-tight-2 max-w-4xl mx-auto">
              Admissions at <span className="gradient-text italic">Vasant Valley</span>
            </h1>
            <p className="mt-6 text-text-muted text-lg max-w-xl mx-auto leading-relaxed font-sans">
              We look for curious, engaged learners. Here's how to begin.
            </p>
          </AnimatedOnScroll>
        </div>
      </div>

      {/* Process */}
      <section className="section-py bg-base" aria-labelledby="process-heading">
        <div className="container-px">
          <AnimatedOnScroll>
            <SectionHeading
              eyebrow="How to Apply"
              title="The Admissions Process"
              subtitle="A straightforward, humane process — designed to understand the whole child, not just test scores."
              id="process-heading"
            />
          </AnimatedOnScroll>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <AnimatedOnScroll key={step.step} delay={i * 0.07}>
                <div className="glass rounded-2xl p-6 lg:p-8 flex items-start gap-6 border border-white/5 hover:border-amber/15 transition-all duration-200 group">
                  <div className="font-display text-4xl font-bold gradient-text flex-shrink-0 leading-none mt-1">{step.step}</div>
                  <div>
                    <h3 className="font-display font-semibold text-text text-xl mb-2 group-hover:text-amber transition-colors duration-200">{step.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed font-sans">{step.desc}</p>
                  </div>
                </div>
              </AnimatedOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Key Dates + Form */}
      <section id="dates" className="section-py bg-surface" aria-labelledby="dates-heading">
        <div className="container-px">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedOnScroll variant="slideLeft">
              <SectionHeading
                eyebrow="2026–27 Academic Year"
                title="Key Dates"
                id="dates-heading"
              />
              <div className="glass rounded-2xl overflow-hidden border border-white/5">
                <table className="w-full" aria-label="Admissions key dates">
                  <thead>
                    <tr className="border-b border-white/5">
                      <th scope="col" className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-wide text-text-muted font-sans">Event</th>
                      <th scope="col" className="text-right px-6 py-4 text-xs font-semibold uppercase tracking-wide text-text-muted font-sans">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dates.map((d, i) => (
                      <tr key={d.event} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? 'bg-white/[0.01]' : ''}`}>
                        <td className="px-6 py-4 text-sm font-sans text-text-muted">{d.event}</td>
                        <td className="px-6 py-4 text-sm font-sans text-amber text-right font-medium">{d.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedOnScroll>

            <AnimatedOnScroll variant="slideRight" delay={0.15}>
              <EnquiryForm />
            </AnimatedOnScroll>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="section-py bg-base" aria-labelledby="faq-heading">
        <div className="container-px max-w-3xl mx-auto">
          <AnimatedOnScroll>
            <SectionHeading
              eyebrow="Common Questions"
              title="Frequently Asked"
              center
              id="faq-heading"
            />
          </AnimatedOnScroll>
          <AnimatedOnScroll delay={0.1}>
            <div className="glass rounded-3xl px-8 py-2 border border-white/5">
              {faqs.map((faq) => (
                <FAQ key={faq.q} {...faq} />
              ))}
            </div>
          </AnimatedOnScroll>
        </div>
      </section>
    </article>
  );
}
