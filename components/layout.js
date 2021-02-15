import Footer from '../components/footer'
import Header from '../components/header'
import NextLink from 'next/link';
import Image from 'next/image';

import Logonav from '../components/logonav'
import { motion } from "framer-motion";


let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

const fadeInUp = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 1, ease: easing, delay: 0 }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: easing,
      delay: 0
    }
  }
};




export default function Layout({ preview, children }) {
  return (
    <>
      <div class="block lg:hidden ">
        <div class="max-w-screen-md mx-auto">
          <div class="sticky sticky-nav "><Header /></div>

          {children}
        </div>
      </div>
      <div class="hidden lg:block z-50 ">
        <div class="flex flex-nowrap max-w-screen-xl-plus mx-auto">
          <div class="w-1/6  ">
            <div class="sticky sticky-nav">
              <motion.div variants={fadeInUp} key="modal-navigation-1">
                <nav className=" absolute w-full text-center align-center pt-5 ">
                  <div class="">
                    <div class="">
                      <NextLink href="/" scroll={false} >
                        <a className="p-1 text-sm sm:text-xl font-bold sm:p-4 text-gray-900 ">
                          <Image
                            alt="Icon-article-design-blog-3D-2"
                            className="rounded-full"
                            height={60}
                            width={60}
                            priority="true"
                            quality="100"
                            src={'/static/images/logo_Killian_cartignies_face.gif'}
                          />
                        </a>
                      </NextLink>
                    </div>
                  </div>
                </nav>
              </motion.div>
            </div>
          </div>

          <div class="w-full max-w-screen-lg-plus mx-auto">
            <div>{children}</div>
          </div>

          <div class="w-1/6 ">
            <motion.div variants={stagger} key="modal-navigation-stagger" class="sticky sticky-nav">
              <div class="">
                <nav className=" absolute w-full text-center pt-5 ">
                  <div class="flex flex-col ...">
                    <motion.div key="modal-navigation-2"
                      initial={{ y: -60, opacity: 0 }}
                      animate={{ y: 0, opacity: 1, ease: easing, duration: 1 }}
                      transition={{ delay: 0, ease: easing, duration: 1 }}
                    >
                      <div class="py-2">
                        <NextLink href="/apropos" scroll={false} >
                          <a className="p-1 pl-5 pr-3 text-sm sm:text-base font-bold		pb-5 sm:p-4 text-gray-900 hover:text-red-300  ">
                            À propos
                    </a>
                        </NextLink>
                      </div>
                    </motion.div>

                    <motion.div
                      key="modal-navigation-3"
                      initial={{ y: -60, opacity: 0 }}
                      animate={{ y: 0, opacity: 1, ease: easing, duration: 1 }}
                      transition={{ delay: 0.3, ease: easing, duration: 1 }}
                    >
                      <div class="py-2">
                        <NextLink href="https://anchor.fm/plustard" scroll={false}>
                          <a className="p-1 pl-3 pr-3 text-sm sm:text-base font-bold	pb-5 sm:p-4  text-gray-900 hover:text-red-300  ">
                            Podcast
                    </a>
                        </NextLink>
                      </div>
                    </motion.div>

                    <motion.div
                      key="modal-navigation-4"
                      initial={{ y: -60, opacity: 0 }}
                      animate={{ y: 0, opacity: 1, ease: easing, duration: 1 }}
                      transition={{ delay: 0.6, ease: easing, duration: 1 }}
                    >
                      <div class="py-2">
                        <NextLink href="/pourquoi" scroll={false}>
                          <a className="p-1 pl-3 pr-3 text-sm sm:text-base font-bold		pb-5 sm:p-4  text-gray-900 hover:text-red-300  ">
                            All posts
                    </a>
                        </NextLink>
                      </div>
                    </motion.div>

                  </div>
                </nav>
              </div>
            </ motion.div >
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
