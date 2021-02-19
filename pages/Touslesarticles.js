import MoreStories from '../components/more-stories-all'
import { NextSeo } from 'next-seo';
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import { motion } from "framer-motion";
let easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing

    }
  }
};



export default function Touslesarticles({ allPosts }) {
  const morePosts = allPosts.slice(0)

  return (
    <>
      <NextSeo
        title="Listes de tous les articles du blog – killian étudiant entrepreneur"
        description="Listes de l'ensemble des articles du blog – killian cartignies étudiant entrepreneur"
        canonical="https://blog.killiancartignies.com/pourquoi"
        openGraph={{
          url: 'https://blog.killiancartignies.com/pourquoi',
          title: 'Listes de tous les articles du blog – killian étudiant entrepreneur'
        }}
      />
      <motion.div
        key="modal-index"
        initial='initial'
        animate='animate'
        exit={{ opacity: 0 }}
      >
        <Layout>
          <motion.div variants={fadeInUp} key="modal-headertitre-2" class="pl-10  pt-32">
            <h2 className="text-3xl sm:mt-5 md:text-7xl font-bold tracking-tighter leading-tight">
              Tous les articles
          </h2>
            <h3 id="articles" className="pr-10 pt-2 pb-10 text-gray-500">
              L'ensemble des articles sur des sujets qui m'interesse !
          </h3>
          </motion.div>
          <MoreStories posts={morePosts} />
        </Layout>
      </motion.div>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'tag',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
