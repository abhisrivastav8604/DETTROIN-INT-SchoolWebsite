import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  icon,
}) {
  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-sm',
    lg: 'px-9 py-4 text-base',
  };

  const variants = {
    primary:
      'bg-gradient-accent text-white font-semibold btn-glow hover:opacity-90 disabled:opacity-50',
    secondary:
      'glass-light border border-white/10 text-text font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300',
    ghost:
      'text-text-muted hover:text-text font-medium transition-colors duration-200 hover:underline decoration-amber underline-offset-4',
    outline:
      'border border-amber/40 text-amber font-medium hover:border-amber hover:bg-amber/5 transition-all duration-300',
  };

  const baseClass = `inline-flex items-center gap-2 rounded-full font-sans tracking-wide transition-all duration-300 focus-visible:outline-amber ${sizes[size]} ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
        <Link to={to} className={baseClass}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
        <a href={href} className={baseClass} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClass}
    >
      {content}
    </motion.button>
  );
}
