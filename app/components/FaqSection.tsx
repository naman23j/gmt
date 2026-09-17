'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Where is your therapy office located, and do you offer online sessions?',
      answer:
        'My office is located at 123th Street 45 W, Santa Monica, CA 90401. It is a quiet, private space designed for calm and grounding. In addition to in-person sessions in Santa Monica, I provide secure, HIPAA-compliant telehealth sessions for adult clients residing anywhere in California.',
    },
    {
      question: 'Who do you typically work with in your practice?',
      answer:
        'I specialize in working with adults navigating anxiety, panic, trauma, and professional burnout. Many of the individuals I work with are high-achieving, thoughtful, and self-aware—such as entrepreneurs, creatives, and professionals—who appear functional on the outside but internally feel overwhelmed, exhausted, or stuck in overthinking.',
    },
    {
      question: 'What therapy modalities and techniques do you use?',
      answer:
        'I take a warm, collaborative, and grounded approach. I integrate evidence-based methods tailored to your needs, including Cognitive Behavioral Therapy (CBT), EMDR (Eye Movement Desensitization & Reprocessing), mindfulness-based practices, and body-oriented (somatic) techniques to address both emotional and physiological symptoms.',
    },
    {
      question: 'How do you approach trauma and EMDR work?',
      answer:
        'Trauma work is paced carefully and intentionally. My priority is establishing safety, stabilization, and nervous system regulation so you feel grounded in your daily life—not just during our sessions. I work with single-incident trauma as well as complex, long-standing relational or childhood patterns.',
    },
    {
      question: 'How do I get started with therapy with Dr. Maya Reynolds?',
      answer:
        'You can begin by reaching out to schedule an initial consultation through the contact section on this site. We will discuss what you are experiencing, answer any questions about my practice, and determine if my approach aligns with your goals.',
    },
  ];

  return (
    <section id="faqs" className="py-28 lg:py-36 bg-sand-100/60 border-t border-sand-200/50">
      <div className="editorial-container max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="space-y-4 mb-16">
          <span className="text-[11px] uppercase tracking-[0.16em] font-medium text-earth-accent">
            Common Questions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal-900 leading-[1.12]">
            Frequently Asked Questions
          </h2>
          <p className="reading-width text-base text-charcoal-600 font-sans font-light leading-[1.8]">
            Everything you need to know about working with Dr. Maya Reynolds in Santa Monica &amp; online across CA.
          </p>
        </div>

        {/* Minimal Accordion List with Thin Borders */}
        <div className="divide-y divide-sand-300/60 border-t border-b border-sand-300/60">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-6">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left flex items-center justify-between focus:outline-none group"
                >
                  <span className="font-serif text-xl sm:text-2xl text-charcoal-900 group-hover:text-earth-accent transition-colors pr-6">
                    {faq.question}
                  </span>
                  <div className="text-charcoal-600 group-hover:text-earth-accent transition-colors flex-shrink-0">
                    {isOpen ? <Minus className="w-5 h-5 stroke-[1.5]" /> : <Plus className="w-5 h-5 stroke-[1.5]" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-4 reading-width text-base text-charcoal-600 font-sans font-light leading-[1.8] animate-in fade-in duration-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
