import '../styles/index.css'
import { AnimatePresence } from "framer-motion";
import SEO from '../next-seo.config';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';


export default function MyApp({ Component, pageProps, router  }) {
  return (
    <AnimatePresence exitBeforeEnter>
       <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <DefaultSeo {...SEO} />
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}
