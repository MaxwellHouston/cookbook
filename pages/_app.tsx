import '../styles/globals.css';
import PrimaryLayout from '@/components/layout/PrimaryLayout';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrimaryLayout>
      <Component {...pageProps} />
    </PrimaryLayout>
  );
}
