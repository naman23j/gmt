import Image from 'next/image';
import Link from 'next/link';

export default function ServicesGrid() {
  const services = [
    {
      number: '01',
      title: 'Anxiety & Panic Relief',
      subtitle: 'Finding relief from constant worry & somatic tension',
      description:
        'Tailored care for adults feeling "functional" on the outside while quietly struggling with panic attacks, constant overthinking, sleep disruption, or persistent bracing.',
      image: '/images/hero-coastal.jpg',
    },
    {
      number: '02',
      title: 'Trauma & EMDR Recovery',
      subtitle: 'Healing single-incident & complex patterns',
      description:
        'Paced, evidence-based trauma processing integrating EMDR and body-oriented methods. Focused on safety, stabilization, and daily nervous system regulation.',
      image: '/images/office-1.jpg',
    },
    {
      number: '03',
      title: 'Burnout & Perfectionism',
      subtitle: 'Restoring balance for high-achieving adults',
      description:
        'Designed for entrepreneurs, creatives, and professionals experiencing high internal pressure, perfectionist exhaustion, and disconnection from self.',
      image: '/images/office-2.jpg',
    },
  ];

  return (
    <section id="services" className="py-28 lg:py-36 bg-sand-50">
      <div className="editorial-container">
        
        {/* Section Header */}
        <div className="space-y-4 mb-20 max-w-2xl">
          <span className="text-[11px] uppercase tracking-[0.16em] font-medium text-earth-accent">
            Who I Work With
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal-900 leading-[1.12]">
            Specialized Care Tailored to Your Journey
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 font-sans font-light leading-[1.8]">
            Sessions are structured enough to feel supportive and safe, while leaving space for reflection, depth, and lasting insight.
          </p>
        </div>

        {/* 3 Editorial Content Blocks (NO SaaS Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-14">
          {services.map((service, index) => (
            <div key={index} className="space-y-6 group">
              
              {/* Image Block */}
              <div className="relative aspect-[4/3] w-full bg-sand-200 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
              </div>

              {/* Number & Title */}
              <div className="space-y-2">
                <div className="text-xs uppercase tracking-[0.16em] font-medium text-earth-accent">
                  {service.number} • {service.subtitle}
                </div>
                <h3 className="font-serif text-2xl font-normal text-charcoal-900 group-hover:text-earth-accent transition-colors">
                  {service.title}
                </h3>
              </div>

              {/* Paragraph Description */}
              <p className="text-sm text-charcoal-600 font-sans font-light leading-[1.75]">
                {service.description}
              </p>

              {/* Editorial Underline Link */}
              <div className="pt-2">
                <Link href="#contact" className="editorial-link">
                  Learn More
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
