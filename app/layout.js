import './globals.css';
import '@benai/liquid-glass/styles.css';
import { Agentation } from 'agentation';

const TITLE = 'Web Design for UAE Home Automation Firms | Pixsl Studio';
const DESCRIPTION =
  'Websites that win premium projects for UAE home automation and built-environment firms. Figma-first design, live in 10 to 14 days, from AED 4,000. Book a free call.';

export const metadata = {
  metadataBase: new URL('https://pixsl.pro'),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'web design Dubai',
    'website design UAE',
    'website design for home automation companies',
    'smart home company website',
    'website redesign Dubai',
    'ecommerce website Dubai',
  ],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://pixsl.pro',
    siteName: 'Pixsl Studio',
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AE">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@500,700,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === 'development' && <Agentation />}
      </body>
    </html>
  );
}
