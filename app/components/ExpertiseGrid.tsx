export default function ExpertiseGrid() {
  const specialties = [
    { name: 'Cognitive Behavioral Therapy (CBT)', category: 'Modality' },
    { name: 'EMDR Therapy (Trauma Processing)', category: 'Modality' },
    { name: 'Mindfulness-Based Practices', category: 'Approach' },
    { name: 'Body-Oriented (Somatic) Techniques', category: 'Approach' },
    { name: 'Single-Incident & Acute Trauma', category: 'Specialty' },
    { name: 'Complex Relational & Childhood Trauma', category: 'Specialty' },
    { name: 'Panic Attacks & Agoraphobia Relief', category: 'Specialty' },
    { name: 'Chronic Worry & Generalized Anxiety', category: 'Specialty' },
    { name: 'Professional Burnout & Exhaustion', category: 'Specialty' },
    { name: 'Perfectionism & High Internal Pressure', category: 'Focus' },
    { name: 'Entrepreneurs & Creative Professionals', category: 'Population' },
    { name: 'In-Person & CA Telehealth', category: 'Practice' },
  ];

  return (
    <section id="expertise" className="py-28 lg:py-36 bg-sand-100/60 border-b border-sand-200/50">
      <div className="editorial-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Statement Left Heading */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.16em] font-medium text-earth-accent">
              Clinical Expertise
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal-900 leading-[1.12]">
              Evidence-Based Modalities &amp; Clinical Focus
            </h2>
            <p className="reading-width text-base text-charcoal-600 font-sans font-light leading-[1.8]">
              Integrating proven psychological frameworks with body-oriented techniques to address both the emotional and physiological dimensions of stress and trauma.
            </p>
          </div>

          {/* Visually Light List with Thin Rule Separators (NO HEAVY CARDS) */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-sand-300/60 border-t border-b border-sand-300/60">
              {specialties.map((item, index) => (
                <div
                  key={index}
                  className="py-4 sm:py-5 flex items-center justify-between group hover:pl-2 transition-all duration-300"
                >
                  <span className="font-serif text-xl sm:text-2xl text-charcoal-900 group-hover:text-earth-accent transition-colors">
                    {item.name}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.16em] font-medium text-charcoal-500 font-sans">
                    {item.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
