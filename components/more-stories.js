import PostPreview from '../components/post-preview'
import NowPlaying from '../components/NowPlaying'
import Unsplash from '../components/Unsplash'

import Image from 'next/image';
import { motion } from "framer-motion";

let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
      delay: 2
    }
  }
};

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

export default function MoreStories({ posts }) {
  return (
    <motion.div variants={stagger} key="modal-morestories">
      <section>
        <div class="">
          <div class="pb-5 flex flex-row">
            <div class="w-full cursor-pointer ">
              {posts.map((post) => (
                <motion.div
                  key={post.slug}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  variants={fadeInUp}>
                  <PostPreview
                    key={post.slug}
                    title={post.title}
                    coverImage={post.coverImage}
                    date={post.date}
                    tag={post.tag}
                    Tpsl={post.Tpsl}
                    slug={post.slug}
                    excerpt={post.excerpt}
                  />
                </motion.div>
              ))}
            </div>
            <div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}




