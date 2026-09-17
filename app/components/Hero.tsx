import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] pt-36 pb-20 lg:pt-44 lg:pb-28 flex flex-col justify-between bg-sand-50">
      
      <div className="editorial-container w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Eyebrow Label */}
            <div className="text-[11px] lg:text-[12px] uppercase tracking-[0.16em] font-medium text-earth-accent">
              Licensed Clinical Psychologist • Santa Monica, CA
            </div>

            {/* Main Editorial H1 Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-normal text-charcoal-900 leading-[1.08] tracking-[-0.02em]">
              Rebuild your foundation on solid ground &amp; begin to <span className="italic font-normal text-earth-accent">thrive</span>.
            </h1>

            {/* Description Paragraph */}
            <p className="reading-width text-base sm:text-lg text-charcoal-600 font-sans font-light leading-[1.8]">
              Grounded, evidence-based therapy for adults navigating anxiety, trauma, and professional burnout. Gain practical tools and deep insight in a serene, supportive environment.
            </p>

            {/* Primary Understated CTA */}
            <div className="pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center text-xs uppercase tracking-[0.14em] font-medium text-sand-50 bg-charcoal-900 hover:bg-earth-accent transition-colors px-8 py-4"
              >
                Schedule a Consultation
              </Link>
            </div>

          </div>

          {/* Right Photographic Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full bg-sand-200 overflow-hidden">
              <Image
                src="/images/hero-coastal.jpg"
                alt="Santa Monica Serene Coastal Landscape - Dr. Maya Reynolds Psychology"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
