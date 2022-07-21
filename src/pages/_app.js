import Head from 'next/head';
import Header from '@containers/Header';
import '@styles/tailwind.css';
import { useRouter } from 'next/router';
import { ProviderAuth } from '@hooks/use-auth';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ProviderAuth>
      <Head>
        <title>SporTown</title>
        <meta name="description" content="Gimnasio de Quetzaltenango SporTown" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {router.pathname == '/signup' || router.pathname == '/login' ? null : <Header />}
      <Component {...pageProps} />
    </ProviderAuth>
  );
}

export default MyApp;
