import Link from 'next/link';

export default function SpecialtyCards() {
  const pillars = [
    {
      title: 'Anxiety & Panic Regulation',
      description:
        'Understanding nervous system arousal, reducing physiological panic symptoms, and breaking free from relentless worry.',
    },
    {
      title: 'EMDR & Trauma Processing',
      description:
        'Paced trauma therapy focused on safety, grounding, and integrating single-incident or complex childhood experiences.',
    },
    {
      title: 'Burnout & High-Achiever Stress',
      description:
        'Restoring energy and boundary clarity for entrepreneurs, executives, and creatives pushed to their limits by perfectionism.',
    },
    {
      title: 'Somatic & Mindfulness Tools',
      description:
        'Connecting mind and body techniques to help you feel rooted, present, and regulated in your everyday life.',
    },
  ];

  return (
    <section className="py-28 lg:py-36 bg-sand-100/60 border-t border-sand-200/50">
      <div className="editorial-container">
        
        {/* Section Title */}
        <div className="space-y-4 mb-20 max-w-2xl">
          <span className="text-[11px] uppercase tracking-[0.16em] font-medium text-earth-accent">
            Core Foundations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal-900 leading-[1.12]">
            Foundations of Clinical Treatment
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 font-sans font-light leading-[1.8]">
            Combining practical evidence-based tools with depth-oriented psychological inquiry.
          </p>
        </div>

        {/* 4 Editorial Blocks (NO ICON CARDS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {pillars.map((item, index) => (
            <div key={index} className="space-y-4 border-l-2 border-sand-300/60 pl-6 py-2">
              <span className="text-xs font-mono text-earth-accent">0{index + 1}</span>
              <h3 className="font-serif text-2xl font-normal text-charcoal-900">
                {item.title}
              </h3>
              <p className="text-sm text-charcoal-600 font-sans font-light leading-[1.75]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
