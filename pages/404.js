import Link from 'next/link';
import { NextSeo } from 'next-seo';

import Container from '../components/container';
import Header from '../components/header';
import Footer from '../components/footer';
import { motion } from 'framer-motion';


export default function NotFound() {
  return (
    <Container>
      <NextSeo
        title="Erreur 404 – Killian "
        canonical="https://blog.killiancartignies.com/404"
        openGraph={{
          url: 'https://blog.killiancartignies.com/404',
          title: 'Erreur 404 – killian'
        }}
      />
      <motion.div
        key="modal-404"
        key="3"
        initial='initial'
        animate='animate'
        exit={{ opacity: 0 }}
      >
        <Header>
          <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 mt-20">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
              451 Erreur – Je pense que vous êtes sur la mauvaise page
        </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Il semble que vous avez trouvé quelque chose qui existait auparavant, ou vous avez épelé quelque chose
              de faux. Je suppose que vous avez fait une faute d'orthographe. Pouvez-vous revérifier
              cette URL ?
        </p>
            <Link href="/">
              <a className="p-1 py-5 sm:p-4 w-64 font-bold mx-auto bg-gray-100 dark:bg-gray-900 text-center rounded-md text-black dark:text-white">
                Retour à l'accueil
          </a>
            </Link>
          </div>
        </Header>
        <Footer />
      </motion.div>
    </Container>
  );
}
