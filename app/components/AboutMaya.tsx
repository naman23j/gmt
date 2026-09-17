import Image from 'next/image';
import Link from 'next/link';

export default function AboutMaya() {
  return (
    <section id="about" className="py-28 lg:py-36 bg-sand-50">
      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Large Visually Dominant Portrait Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[3/4] w-full bg-sand-200 overflow-hidden">
              <Image
                src="/images/dr-maya.jpg"
                alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist Santa Monica"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Asymmetric Editorial Text Block */}
          <div className="lg:col-span-6 space-y-8">
            
            <div className="text-[11px] uppercase tracking-[0.16em] font-medium text-earth-accent">
              Meet Your Psychologist
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal-900 leading-[1.12]">
              A Warm, Grounded, &amp; Collaborative Approach
            </h2>

            <div className="reading-width space-y-6 text-base sm:text-lg text-charcoal-600 font-sans font-light leading-[1.8]">
              <p>
                I’m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering impact of past experiences.
              </p>
              <p>
                Sessions are structured enough to feel supportive and safe, while still leaving space for depth and reflection. I integrate evidence-based methods such as <strong>Cognitive Behavioral Therapy (CBT)</strong>, <strong>EMDR</strong>, <strong>mindfulness practices</strong>, and <strong>body-oriented techniques</strong> to address both the emotional and physiological sides of what you are experiencing.
              </p>
              <p>
                Trauma work is an essential part of my practice. Whether navigating single-incident events or complex childhood patterns, my approach is carefully paced with an emphasis on safety, stabilization, and daily regulation.
              </p>
            </div>

            <div className="pt-2">
              <Link href="#office" className="editorial-link">
                Explore The Santa Monica Practice Space
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
