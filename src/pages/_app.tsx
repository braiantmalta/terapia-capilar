import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/system';
import { theme } from '../styles/theme';
import styles from '../styles/Home.module.css';
import '../styles/globals.css';

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
          rel="preconnect"
          href="https://fonts.gstatic.com"
          // crossOrigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;500;700&family=Prata&display=swap"
          rel="stylesheet"
        />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Prata:300,400,500,700&display=swap"
          rel="stylesheet"
        /> */}
        {/* <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        /> */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1, minimum-scale=1"
        />
      </Head>
      <ThemeProvider theme={theme} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
