import Head from 'next/head';
import styles from '../styles/Home.module.css';
import '../styles/globals.css';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Terapia Capilar</title>
        <meta
          name="description"
          content="Formação Terapia Capilar, conteúdo teórico, demonstração e prática"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1, minimum-scale=1"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
