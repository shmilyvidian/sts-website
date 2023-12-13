import Footer from '@/app/_components//Footer';
import Header from '@/app/_components//Header';
import ScrollToTop from '@/app/_components//ScrollToTop';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { Locale } from '../types';
import { locales } from '@/i18nconfig';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import 'node_modules/react-modal-video/css/modal-video.css';
import '../styles/index.css';

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  if (locales.includes(locale) === false) {
    return notFound();
  }

  unstable_setRequestLocale(locale);
  let messages;
  try {
    messages = (await import(`../_translations/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header lang={locale} />
            {children}
            <Footer />
            <ScrollToTop />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
