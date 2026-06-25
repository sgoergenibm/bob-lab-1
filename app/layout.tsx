import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import './globals.css';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-ibm-plex-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Agentic AI in Wealth Management | IBM watsonx',
  description:
    'Leveraging Agentic AI, we built a user-friendly chat interface that drives productivity for financial advisors by helping them better prioritize, research, and prepare for client meetings.',
  keywords: 'IBM watsonx, Agentic AI, Wealth Management, Financial Advisor, AI Assistant',
  openGraph: {
    title: 'Agentic AI in Wealth Management | IBM watsonx',
    description:
      'Driving productivity for financial advisors with AI-powered prioritization, research, and scheduling.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ibmPlexSans.variable}>
      <body className={ibmPlexSans.className}>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
