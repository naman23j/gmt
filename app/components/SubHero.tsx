import Image from 'next/image';

export default function SubHero() {
  return (
    <section className="py-28 lg:py-36 bg-sand-100/60 border-y border-sand-200/50">
      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Large Photographic Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full bg-sand-200 overflow-hidden">
              <Image
                src="/images/office-1.jpg"
                alt="Dr. Maya Reynolds Therapy Office Room Santa Monica"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Editorial Content Block */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="text-[11px] uppercase tracking-[0.16em] font-medium text-earth-accent">
              A Space for Reflection &amp; Depth
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal-900 leading-[1.12]">
              Feeling “functional” on the outside, but quietly overwhelmed within?
            </h2>

            <div className="reading-width space-y-6 text-base sm:text-lg text-charcoal-600 font-sans font-light leading-[1.8]">
              <p>
                Many of the individuals I work with are thoughtful, self-aware, and high-achieving—yet internally feel exhausted, stuck in overthinking, or emotionally on edge.
              </p>
              <p>
                You may be navigating constant worry, body tension, difficulty sleeping, or a persistent sense that you are bracing for something to go wrong. Others are processing earlier life experiences that continue to impact relationships, self-worth, or peace of mind.
              </p>
              <p className="text-charcoal-900 font-normal border-l-2 border-earth-accent pl-4 py-1">
                Therapy can become a quiet space to slow down, reconnect, and cultivate sustainable ways of living and working.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
