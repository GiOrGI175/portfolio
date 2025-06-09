import './globals.css';
import Footer from '@/components/_organisms/footer_organisms/Footer';
import { getLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

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
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
