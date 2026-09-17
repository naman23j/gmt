import Image from 'next/image';

export default function OurOffice() {
  return (
    <section id="office" className="py-28 lg:py-36 bg-sand-50 border-t border-sand-200/50">
      <div className="editorial-container">
        
        {/* Editorial Header */}
        <div className="space-y-4 mb-16 max-w-2xl">
          <span className="text-[11px] uppercase tracking-[0.16em] font-medium text-earth-accent">
            Santa Monica Practice Space
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal-900 leading-[1.12]">
            Our Office: A Calm Sanctuary for Healing
          </h2>
          <p className="reading-width text-base sm:text-lg text-charcoal-600 font-sans font-light leading-[1.8]">
            Located at <strong>123th Street 45 W, Santa Monica, CA 90401</strong>, my office is a quiet, private space designed to feel calm and grounding. With abundant natural light and a comfortable, uncluttered environment, clients often share that the space itself helps them feel at ease when they arrive.
          </p>
        </div>

        {/* 2 Photographic Showcase Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 mb-16">
          
          <div className="space-y-4">
            <div className="relative aspect-[4/3] w-full bg-sand-200 overflow-hidden">
              <Image
                src="/images/office-1.jpg"
                alt="Dr. Maya Reynolds Santa Monica Therapy Office Seating Area"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="text-xs uppercase tracking-[0.14em] text-charcoal-500 font-sans">
              Sunlit Main Seating Suite • Santa Monica Office
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative aspect-[4/3] w-full bg-sand-200 overflow-hidden">
              <Image
                src="/images/office-2.jpg"
                alt="Dr. Maya Reynolds Consultation Suite Santa Monica"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="text-xs uppercase tracking-[0.14em] text-charcoal-500 font-sans">
              Private Consultation Suite &amp; Literature Library
            </div>
          </div>

        </div>

        {/* Practice Details Footer Strip */}
        <div className="pt-8 border-t border-sand-300/60 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 text-sm text-charcoal-600 font-sans font-light">
          <div>
            <strong className="font-normal text-charcoal-900">Address:</strong> 123th Street 45 W, Santa Monica, CA 90401
          </div>
          <div>
            <strong className="font-normal text-charcoal-900">Availability:</strong> In-Person Santa Monica &amp; Telehealth across California
          </div>
        </div>

      </div>
    </section>
  );
}
