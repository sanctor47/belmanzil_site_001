import { Navigation } from '@/components/navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Footer } from '@/components/footer';
import { Montserrat } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';


const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Belmanzil - Egypt\'s First Home Dental Service',
  description: 'Professional dental care delivered to your home. Expert treatments, advanced technology, and personalized service in the comfort of your own space.',
  keywords: 'home dental care, dental services, Egypt, Cairo, dentist, oral surgery, dental implants',
  authors: [{ name: 'Belmanzil Team' }],
  openGraph: {
    title: 'Belmanzil - Home Dental Care',
    description: 'Professional dental care delivered to your home',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_EG',
  },
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.className} antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-inter antialiased bg-white text-smoky-black">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <GoogleAnalytics gaId="G-5GKDGTR5CC" />
      </body>
    </html>
  );
}
