import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist Santa Monica CA',
  description: 'Evidence-based therapy for anxiety, panic, trauma (EMDR), and burnout in Santa Monica, CA. Offering in-person therapy and secure telehealth across California.',
  keywords: [
    'Clinical Psychologist Santa Monica',
    'Trauma Therapy Santa Monica',
    'EMDR Specialist Santa Monica CA',
    'Anxiety & Panic Counseling California',
    'Burnout Therapist for High Achievers',
    'Dr Maya Reynolds PsyD',
    'Psychologist 90401'
  ],
  authors: [{ name: 'Dr. Maya Reynolds, PsyD' }],
  openGraph: {
    title: 'Dr. Maya Reynolds, PsyD | Therapy in Santa Monica, CA',
    description: 'Specialized therapy for adults navigating anxiety, trauma, and burnout. Warm, evidence-based, grounded care in Santa Monica & online across CA.',
    url: 'https://drmayareynolds.com',
    siteName: 'Dr. Maya Reynolds Psychology Practice',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-terracotta-100 selection:text-terracotta-600">
        {children}
      </body>
    </html>
  );
}
