import { motion } from 'framer-motion';

export function GlassCard({
  children,
  className = '',
  hover = true,
  glow = false,
  onClick,
}) {
  const base = `glass rounded-2xl ${hover ? 'pillar-card cursor-pointer' : ''} ${
    glow ? 'gradient-border' : ''
  } ${className}`;

  if (onClick) {
    return (
      <motion.div
        className={base}
        onClick={onClick}
        whileHover={hover ? { scale: 1.01 } : undefined}
        whileTap={hover ? { scale: 0.99 } : undefined}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={base}
      whileHover={hover ? { scale: 1.01 } : undefined}
    >
      {children}
    </motion.div>
  );
}
