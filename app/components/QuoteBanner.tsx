import Image from 'next/image';

export default function QuoteBanner() {
  return (
    <section className="relative py-32 lg:py-44 bg-charcoal-900 text-sand-50 overflow-hidden">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/images/quote-bg.jpg"
          alt="Atmospheric Ocean Horizon Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="editorial-container relative z-10 text-center max-w-4xl mx-auto space-y-8">
        
        <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light leading-[1.3] text-sand-100 italic">
          “I believe therapy works best when clients feel respected, understood, and actively involved in the process. My goal is not just symptom relief, but helping you develop insight, resilience, and a deeper relationship with yourself over time.”
        </blockquote>

        <div className="pt-4 space-y-1">
          <div className="text-xs uppercase tracking-[0.16em] font-medium text-earth-light">
            Dr. Maya Reynolds, PsyD
          </div>
          <div className="text-[11px] uppercase tracking-[0.12em] text-sand-400 font-sans">
            Licensed Clinical Psychologist • Santa Monica, CA
          </div>
        </div>

      </div>
    </section>
  );
}
