import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const footerLinks = {
  'Explore': [
    { label: 'About Us', path: '/about' },
    { label: 'Learning Experience', path: '/learning' },
    { label: 'Academics', path: '/academics' },
    { label: 'Campus & Facilities', path: '/campus' },
  ],
  'Admissions': [
    { label: 'How to Apply', path: '/admissions' },
    { label: 'Key Dates', path: '/admissions#dates' },
    { label: 'Enquire Now', path: '/contact' },
    { label: 'FAQs', path: '/admissions#faqs' },
  ],
  'Community': [
    { label: 'News & Events', path: '/news' },
    { label: 'Contact Us', path: '/contact' },
  ],
};

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5" role="contentinfo">
      {/* Top gradient accent */}
      <div className="h-px bg-gradient-accent" />

      <div className="container-px py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group" aria-label="Vasant Valley School Home">
              <div className="w-10 h-10 rounded-xl bg-gradient-accent flex items-center justify-center">
                <span className="font-display font-bold text-white text-lg">V</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-semibold text-text text-base">Vasant Valley School</span>
                <span className="font-sans text-text-muted text-[10px] tracking-widest uppercase mt-0.5">
                  Est. 1990 · Vasant Kunj, New Delhi
                </span>
              </div>
            </Link>

            <p className="text-text-muted text-sm leading-relaxed max-w-xs mb-8">
              A CBSE day school committed to nurturing independent, ethical, and globally aware citizens —
              guided by eight pillars of holistic learning since 1990.
            </p>

            {/* Contact Info */}
            <address className="not-italic space-y-3 text-sm text-text-muted mb-8">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-amber mt-0.5 flex-shrink-0" />
                <span>Vasant Kunj, New Delhi — 110070, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={15} className="text-amber flex-shrink-0" />
                <a href="tel:+911126145678" className="hover:text-text transition-colors">
                  +91 11 2614 5678
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={15} className="text-amber flex-shrink-0" />
                <a href="mailto:info@vasantvalley.edu.in" className="hover:text-text transition-colors">
                  info@vasantvalley.edu.in
                </a>
              </div>
            </address>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={`Vasant Valley School on ${label}`}
                  className="w-9 h-9 glass rounded-lg flex items-center justify-center text-text-muted hover:text-amber hover:border-amber/30 transition-all duration-200 focus-visible:outline-amber"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="font-sans font-semibold text-text text-sm tracking-wide mb-5">
                {heading}
              </h3>
              <ul className="space-y-3" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-text-muted hover:text-text hover:translate-x-1 inline-block transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Vasant Valley School, New Delhi. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="#" className="text-text-muted text-xs hover:text-text transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-text-muted text-xs hover:text-text transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
