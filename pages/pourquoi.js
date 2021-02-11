import Container from '../components/container'
import MoreStories from '../components/more-stories-all'
import HeroBanner from '../components/herobanner'
import Headertitre from '../components/headertitre'
import Dashboard from '../components/dashboard'

import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
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



export default function Index({ allPosts }) {
  const morePosts = allPosts.slice(0)

  return (
    <>
      <motion.div
        key="modal-index"
        initial='initial'
        animate='animate'
        exit={{ opacity: 0 }}
      >
        <Layout>
          <motion.div variants={fadeInUp} key="modal-headertitre-2" class="pl-10  pt-32">
            <h2 className="text-6xl sm:mt-5 md:text-7xl font-bold tracking-tighter leading-tight">
              Tous les articles
          </h2>
            <h3 id="articles" className="pt-2 pb-10 text-gray-500">
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
