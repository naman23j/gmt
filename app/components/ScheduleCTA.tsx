import Image from 'next/image';
import Link from 'next/link';

export default function ScheduleCTA() {
  return (
    <>
      {/* Editorial CTA Section */}
      <section id="contact" className="py-28 lg:py-36 bg-sand-50">
        <div className="editorial-container text-center max-w-3xl mx-auto space-y-8">
          
          <span className="text-[11px] uppercase tracking-[0.16em] font-medium text-earth-accent">
            Begin Your Journey
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-normal text-charcoal-900 leading-[1.12]">
            Find a therapist who is the right fit for <span className="italic font-normal text-earth-accent">you</span>.
          </h2>

          <p className="reading-width mx-auto text-base sm:text-lg text-charcoal-600 font-sans font-light leading-[1.8]">
            If you are looking for a psychologist who combines practical tools with depth-oriented work—and who understands the realities of living and working in a fast-paced environment—I welcome you to reach out.
          </p>

          <div className="pt-4">
            <a
              href="mailto:contact@drmayareynolds.com"
              className="inline-flex items-center text-xs uppercase tracking-[0.14em] font-medium text-sand-50 bg-charcoal-900 hover:bg-earth-accent transition-colors px-9 py-4"
            >
              Book Your Consultation
            </a>
          </div>

          <div className="pt-8 text-xs uppercase tracking-[0.12em] text-charcoal-500 font-sans">
            Santa Monica Office: 123th Street 45 W, Santa Monica, CA 90401 • Secure Telehealth CA
          </div>

        </div>
      </section>

      {/* Final Full-Width Lifestyle Photography Section */}
      <section className="relative h-[450px] sm:h-[550px] lg:h-[650px] w-full bg-sand-200 overflow-hidden">
        <Image
          src="/images/hero-coastal.jpg"
          alt="Santa Monica Ocean Shoreline - Dr. Maya Reynolds Practice"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </section>
    </>
  );
}
