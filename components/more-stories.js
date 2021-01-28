import PostPreview from '../components/post-preview'
import NowPlaying from '../components/NowPlaying'
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
    transition: { duration: 0.6, ease:easing}
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
      <div class="sm:flex sm:flex-wrap pb-5 ">
        <div class="pb-5 lg:w-8/12">
          <div class="w-full cursor-pointer ">
              {posts.map((post) => (
                <motion.div 
                key="modal-morestories-1"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                variants={fadeInUp}>
                <PostPreview
                  key={post.slug}
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  tag={post.tag}
                  slug={post.slug}
                  excerpt={post.excerpt}
                />
                </motion.div> 
              ))}

            </div>

          </div>
        <div class="sm:w-2/4	flex-1 lg:ml-5 rounded-xl">
          <div class="">
            <motion.div variants={fadeInUp} key="modal-morestories-2">
              <div class=" w-full p-5 shadow rounded-t-lg ">
                  <h3 class="text-2xl  leading-6 font-medium text-gray-900">
                    Mes musiques
                  </h3>
              </div> 
                <div class=''>
                <NowPlaying/>
                </div>
              <div class=" mt-5 w-full p-5  shadow	 rounded-t-lg ">
                  <h3 class="text-2xl leading-6 font-medium text-gray-900">
                    Dashboard
                  </h3>
              </div> 
            </motion.div>
              <motion.div variants={fadeInUp} key="modal-morestories-3" class="w-full p-5  border border-gray-200 border-t-0">
                <div class="flex flex-wrap justify-between	">
                  <div class="">
                    <h4 class="text-lg leading-6 font-medium text-gray-500">
                      Ventes en ligne
                    </h4>
                    <h4 class="text-2xl pt-2  leading-6 font-medium text-black">
                      0€
                    </h4>
                  </div>
                  <motion.div 
                  key="modal-morestories-4"
                  initial={{ x: 10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                  class="place-content-end	">
                  <Image
                    alt="Icon-article-design-blog-3D-2"
                    className="rounded-lg mt-10 "
                    height={60}
                    width={60}
                    priority="true"
                    quality="100"
                    src={'/static/images/Icon-Argent-Blog-Vente-En-Ligne.png'}
                    />
                  </motion.div>
                </div>
              </motion.div> 
            </div>  
        </div>
      </div> 
    </section>
    </motion.div>
  )
}




