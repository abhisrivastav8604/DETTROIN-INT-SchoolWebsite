import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin, Youtube, Send, AlertCircle, CheckCircle2 } from 'lucide-react';
import { AnimatedOnScroll } from '../components/ui/AnimatedOnScroll';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';

const contactInfo = [
  { icon: MapPin, label: 'Address', value: 'Vasant Kunj, New Delhi — 110070, India', href: null },
  { icon: Phone, label: 'General Enquiries', value: '+91 11 2614 5678', href: 'tel:+911126145678' },
  { icon: Mail, label: 'Email', value: 'info@vasantvalley.edu.in', href: 'mailto:info@vasantvalley.edu.in' },
  { icon: Mail, label: 'Admissions', value: 'admissions@vasantvalley.edu.in', href: 'mailto:admissions@vasantvalley.edu.in' },
  { icon: Clock, label: 'Office Hours', value: 'Mon–Fri: 8:00 AM – 4:00 PM', href: null },
];

const socials = [
  { icon: Instagram, label: 'Instagram', handle: '@vasantvalleyschool', href: '#' },
  { icon: Facebook, label: 'Facebook', handle: 'Vasant Valley School', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', handle: 'Vasant Valley School', href: '#' },
  { icon: Youtube, label: 'YouTube', handle: 'Vasant Valley School', href: '#' },
];

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim()) e.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email.';
    if (!form.subject.trim()) e.subject = 'Please enter a subject.';
    if (!form.message.trim()) e.message = 'Please include a message.';
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
      errors[field] ? 'border-rose/50 focus:ring-rose/30' : 'border-white/8 focus:ring-amber/30 focus:border-amber/30'
    }`;

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-3xl p-12 text-center h-full flex flex-col items-center justify-center"
      >
        <div className="w-16 h-16 rounded-full bg-emerald/20 flex items-center justify-center mb-6">
          <CheckCircle2 size={32} className="text-emerald" />
        </div>
        <h3 className="font-display text-2xl font-semibold text-text mb-3">Message Sent</h3>
        <p className="text-text-muted text-sm font-sans max-w-xs mx-auto leading-relaxed">
          Thank you for reaching out. We'll respond within two working days.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form" className="glass rounded-3xl p-8 lg:p-10 space-y-5 h-full">
      <h3 className="font-display text-2xl font-semibold text-text mb-1">Send us a message</h3>
      <p className="text-text-muted text-sm font-sans">We'll respond within two working days.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="ct-name" className="block text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">Your Name *</label>
          <input id="ct-name" type="text" placeholder="Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className={inputClass('name')} aria-describedby={errors.name ? 'ct-name-err' : undefined} />
          {errors.name && <p id="ct-name-err" className="mt-1.5 text-rose text-xs flex items-center gap-1"><AlertCircle size={12} />{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="ct-email" className="block text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">Email Address *</label>
          <input id="ct-email" type="email" placeholder="you@example.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className={inputClass('email')} aria-describedby={errors.email ? 'ct-email-err' : undefined} />
          {errors.email && <p id="ct-email-err" className="mt-1.5 text-rose text-xs flex items-center gap-1"><AlertCircle size={12} />{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="ct-subject" className="block text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">Subject *</label>
        <input id="ct-subject" type="text" placeholder="How can we help?" value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} className={inputClass('subject')} aria-describedby={errors.subject ? 'ct-subject-err' : undefined} />
        {errors.subject && <p id="ct-subject-err" className="mt-1.5 text-rose text-xs flex items-center gap-1"><AlertCircle size={12} />{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="ct-msg" className="block text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">Message *</label>
        <textarea id="ct-msg" rows={5} placeholder="Your message…" value={form.message} onChange={e => setForm({...form, message: e.target.value})} className={`${inputClass('message')} resize-none`} aria-describedby={errors.message ? 'ct-msg-err' : undefined} />
        {errors.message && <p id="ct-msg-err" className="mt-1.5 text-rose text-xs flex items-center gap-1"><AlertCircle size={12} />{errors.message}</p>}
      </div>

      <Button type="submit" variant="primary" size="md" className="w-full justify-center">
        Send Message
        <Send size={16} />
      </Button>
    </form>
  );
}

export function ContactPage() {
  return (
    <article>
      {/* Hero */}
      <div className="relative pt-28 pb-20 mesh-bg overflow-hidden">
        <div className="container-px relative z-10 text-center">
          <AnimatedOnScroll>
            <p className="text-xs font-semibold tracking-widest-2 uppercase text-amber mb-4">Get in Touch</p>
            <span className="accent-line-center block mb-6" />
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-text leading-tight-2 max-w-3xl mx-auto">
              We'd love to <span className="gradient-text italic">hear from you</span>
            </h1>
            <p className="mt-6 text-text-muted text-lg max-w-xl mx-auto leading-relaxed font-sans">
              Whether you have a question about admissions, a request for information, or simply want to visit the campus — our team is here to help.
            </p>
          </AnimatedOnScroll>
        </div>
      </div>

      {/* Contact Info + Form */}
      <section className="section-py bg-base" aria-label="Contact information and form">
        <div className="container-px">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Info Column */}
            <AnimatedOnScroll variant="slideLeft">
              <div>
                <SectionHeading
                  eyebrow="Contact Details"
                  title="Find us"
                />
                <div className="space-y-5 mb-10">
                  {contactInfo.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-amber/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-amber" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-text-muted font-sans mb-0.5">{label}</p>
                        {href ? (
                          <a href={href} className="text-text text-sm font-sans hover:text-amber transition-colors duration-200">{value}</a>
                        ) : (
                          <p className="text-text text-sm font-sans">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-sans font-semibold text-text text-sm mb-5">Follow Us</h3>
                  <div className="space-y-3">
                    {socials.map(({ icon: Icon, label, handle, href }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={`Vasant Valley School on ${label}`}
                        className="flex items-center gap-4 group"
                      >
                        <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-text-muted group-hover:text-amber group-hover:border-amber/30 transition-all duration-200 focus-visible:outline-amber border border-white/5">
                          <Icon size={18} />
                        </div>
                        <div>
                          <p className="text-xs text-text-muted font-sans">{label}</p>
                          <p className="text-sm text-text font-sans group-hover:text-amber transition-colors duration-200">{handle}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedOnScroll>

            {/* Form */}
            <AnimatedOnScroll variant="slideRight" delay={0.15}>
              <ContactForm />
            </AnimatedOnScroll>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="section-py bg-surface" aria-label="School location map">
        <div className="container-px">
          <AnimatedOnScroll>
            <SectionHeading
              eyebrow="Location"
              title="Visit the Campus"
              subtitle="Our campus is located in the heart of Vasant Kunj, easily accessible from across South and Central Delhi."
              center
            />
          </AnimatedOnScroll>
          <AnimatedOnScroll delay={0.15}>
            <div className="rounded-3xl overflow-hidden border border-white/8 h-[400px] relative">
              <iframe
                title="Vasant Valley School location — Vasant Kunj, New Delhi"
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.1260%2C28.5140%2C77.1620%2C28.5380&amp;layer=mapnik&amp;marker=28.5247%2C77.1466"
                width="100%"
                height="100%"
                className="grayscale contrast-75 opacity-80"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
              />
              <div className="absolute bottom-4 left-4 glass rounded-xl px-4 py-3 text-sm font-sans">
                <p className="text-text font-semibold">Vasant Valley School</p>
                <p className="text-text-muted text-xs">Vasant Kunj, New Delhi — 110070</p>
              </div>
            </div>
          </AnimatedOnScroll>
        </div>
      </section>
    </article>
  );
}
