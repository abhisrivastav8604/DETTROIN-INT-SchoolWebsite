import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navLinks } from '../../data/nav';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const location = useLocation();
  const navRef = useRef(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [location.pathname]);

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const toggleDropdown = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled || mobileOpen ? 'navbar-solid' : 'bg-transparent'
        }`}
        role="banner"
      >
        <nav
          className="container-px flex items-center justify-between h-16 md:h-20"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            aria-label="Vasant Valley School — Home"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-amber/25 transition-shadow duration-300">
              <span className="font-display font-bold text-white text-base leading-none">V</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-semibold !text-white text-sm md:text-base tracking-wide" style={{ color: '#ffffff' }}>
                Vasant Valley
              </span>
              <span className="font-sans text-text-muted text-[10px] tracking-widest uppercase mt-0.5">
                School
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.label} className="relative">
                {link.children ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(link.label)}
                      onMouseEnter={() => setActiveDropdown(link.label)}
                      className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-sans font-medium text-text-muted hover:text-text transition-colors duration-200 focus-visible:outline-amber"
                      aria-expanded={activeDropdown === link.label}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          activeDropdown === link.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -8, scale: 0.97 }}
                          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                          onMouseLeave={() => setActiveDropdown(null)}
                          className="absolute top-full left-0 mt-2 w-52 glass rounded-xl overflow-hidden shadow-xl shadow-black/40 z-50"
                          role="menu"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.path}
                              role="menuitem"
                              className="flex items-center px-4 py-3 text-sm text-text-muted hover:text-text hover:bg-white/5 transition-colors duration-150 border-b border-white/5 last:border-0"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-lg text-sm font-sans font-medium transition-colors duration-200 ${
                        isActive
                          ? 'text-amber'
                          : 'text-text-muted hover:text-text'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-accent text-white text-sm font-semibold font-sans btn-glow hover:opacity-90 transition-opacity duration-200 focus-visible:outline-amber"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-text-muted hover:text-text focus-visible:outline-amber transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 navbar-solid flex flex-col overflow-y-auto"
            aria-label="Mobile navigation"
          >
            {/* Close button spacer */}
            <div className="h-16 flex-shrink-0" />

            <nav className="flex-1 container-px py-8">
              <ul className="space-y-1" role="list">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    {link.children ? (
                      <div>
                        <button
                          onClick={() =>
                            setMobileExpanded(mobileExpanded === link.label ? null : link.label)
                          }
                          className="w-full flex items-center justify-between py-4 px-2 text-lg font-sans font-medium text-text border-b border-white/5 focus-visible:outline-amber"
                          aria-expanded={mobileExpanded === link.label}
                        >
                          {link.label}
                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-200 ${
                              mobileExpanded === link.label ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileExpanded === link.label && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              {link.children.map((child) => (
                                <li key={child.label}>
                                  <Link
                                    to={child.path}
                                    className="flex items-center pl-6 pr-2 py-3 text-base text-text-muted hover:text-text border-b border-white/5 transition-colors"
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                          `flex py-4 px-2 text-lg font-sans font-medium border-b border-white/5 transition-colors ${
                            isActive ? 'text-amber' : 'text-text'
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Link
                  to="/admissions"
                  className="w-full flex items-center justify-center py-4 rounded-full bg-gradient-accent text-white text-base font-semibold btn-glow"
                >
                  Apply Now
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
