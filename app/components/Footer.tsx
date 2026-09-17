import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-900 text-sand-300 pt-20 pb-14 border-t border-charcoal-800">
      <div className="editorial-container space-y-16">
        
        {/* Multi-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Brand & Subtitle */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl md:text-3xl font-normal text-sand-50 block">
                Dr. Maya Reynolds, PsyD
              </span>
              <span className="text-[10px] uppercase tracking-[0.16em] text-earth-light font-sans font-medium">
                Licensed Clinical Psychologist • Santa Monica, CA
              </span>
            </Link>

            <p className="reading-width text-sm text-sand-300/80 font-sans font-light leading-[1.75]">
              Providing grounded, evidence-based therapy for adults navigating anxiety, trauma (EMDR), and professional burnout in Santa Monica and across California via telehealth.
            </p>
          </div>

          {/* Location Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-lg font-normal text-sand-50">
              Santa Monica Practice Space
            </h4>
            <div className="text-sm text-sand-300 font-sans font-light space-y-1 leading-relaxed">
              <p>123th Street 45 W</p>
              <p>Santa Monica, CA 90401</p>
              <p className="text-xs text-earth-light pt-2">In-Person &amp; Secure Telehealth Sessions</p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-lg font-normal text-sand-50">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs uppercase tracking-[0.12em] font-sans font-medium text-sand-300">
              <li>
                <Link href="#about" className="hover:text-earth-light transition-colors">
                  About Dr. Maya
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-earth-light transition-colors">
                  Services &amp; Who We Help
                </Link>
              </li>
              <li>
                <Link href="#expertise" className="hover:text-earth-light transition-colors">
                  Clinical Expertise
                </Link>
              </li>
              <li>
                <Link href="#office" className="hover:text-earth-light transition-colors">
                  Our Office
                </Link>
              </li>
              <li>
                <Link href="#faqs" className="hover:text-earth-light transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 border-t border-charcoal-800 space-y-4 text-xs text-sand-400 font-sans font-light leading-relaxed">
          <p>
            <strong>Emergency Disclaimer:</strong> If you are experiencing a life-threatening mental health crisis, please dial 911 or visit your local emergency room. You can also contact the 24/7 Suicide &amp; Crisis Lifeline by calling or texting 988.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 text-sand-400">
            <div>
              © {currentYear} Dr. Maya Reynolds, PsyD. All rights reserved.
            </div>
            <div className="flex space-x-6 text-[11px] uppercase tracking-[0.1em]">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
