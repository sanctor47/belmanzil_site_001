import { Navigation } from '@/components/navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter, Noto_Sans_Arabic } from 'next/font/google';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const notoArabic = Noto_Sans_Arabic({ subsets: ['arabic'], variable: '--font-arabic' });

const dirMap = {
  en: 'ltr',
  ar: 'rtl',
};

export const metadata: Metadata = {
  title: 'BelManzil - Egypt\'s First Home Dental Service',
  description: 'Professional dental care delivered to your home. Expert treatments, advanced technology, and personalized service in the comfort of your own space.',
  keywords: 'home dental care, dental services, Egypt, Cairo, dentist, oral surgery, dental implants',
  authors: [{ name: 'BelManzil Team' }],
  openGraph: {
    title: 'BelManzil - Home Dental Care',
    description: 'Professional dental care delivered to your home',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_EG',
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: 'en' | 'ar' };
}) {
  const direction = dirMap[locale] ?? 'ltr';
  console.log('Current locale:', locale, 'Direction:', direction);
  return (
    <html lang={locale} dir={direction} className={`${inter.variable} ${notoArabic.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-inter antialiased bg-white text-smoky-black">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html >
  );
}