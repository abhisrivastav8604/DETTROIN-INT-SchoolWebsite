export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  light = false,
  gradientWord,
}) {
  // Optionally wrap a specific word in gradient styling
  const renderTitle = () => {
    if (!gradientWord) return title;
    const parts = title.split(gradientWord);
    return parts.reduce((acc, part, i) => {
      if (i < parts.length - 1) {
        return [
          ...acc,
          part,
          <span key={i} className="gradient-text">
            {gradientWord}
          </span>,
        ];
      }
      return [...acc, part];
    }, []);
  };

  return (
    <div className={`mb-12 md:mb-16 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <p
          className={`text-xs font-semibold tracking-widest-2 uppercase mb-4 ${
            light ? 'text-amber/80' : 'text-amber'
          }`}
        >
          {eyebrow}
        </p>
      )}
      {center ? (
        <span className="accent-line-center mb-6 block" />
      ) : (
        <span className="accent-line mb-6 block" />
      )}
      <h2
        className={`font-display font-semibold leading-tight-2 ${
          light ? 'text-white' : 'text-text'
        } text-3xl sm:text-4xl lg:text-5xl`}
      >
        {renderTitle()}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 max-w-2xl text-base sm:text-lg leading-relaxed ${
            light ? 'text-white/70' : 'text-text-muted'
          } ${center ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
