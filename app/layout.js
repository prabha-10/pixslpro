import './globals.css';
import '@benai/liquid-glass/styles.css';
import { Agentation } from 'agentation';

const TITLE = 'Web Design & Development Services | Pixsl Studio';
const DESCRIPTION =
  'From idea to launched website in two weeks. Website design, development, and rescue on a fixed quote. You approve a working preview, then we build. Book a call.';

export const metadata = {
  metadataBase: new URL('https://pixsl.pro'),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'web design and development services',
    'website design',
    'web development',
    'website rescue',
    'website redesign',
    'ecommerce website',
    'custom software',
    'website maintenance',
    'portfolio website',
  ],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://pixsl.pro',
    siteName: 'Pixsl Studio',
    locale: 'en_US',
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
    <html lang="en">
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
