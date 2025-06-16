import './globals.css';
import Footer from '@/components/_organisms/footer_organisms/Footer';
import { getLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { Suspense } from 'react';
import LoaderFallback from '@/components/_molecules/loader/LoaderFallBack';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <Suspense fallback={<LoaderFallback />}>{children}</Suspense>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
