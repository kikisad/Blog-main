import Image from 'next/image';
import CoverImage from '../components/cover-image'
import { motion } from "framer-motion";
import Link from 'next/link'


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
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease:easing }
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


export default function Herobanner() {
  return (
    <motion.div variants={stagger} key="modal-herobanner" >

      <div class="flex flex-wrap-reverse md:flex-nowrap">
        <motion.div variants={fadeInUp} key="modal-herobanner-2"  class="pl-7 w-full lg:w-1/2 ">
          <h1 class="text-4xl md:text-3xl font-black text-gray-600 pr-5 pt-5 md:pt-10 lg:pt-28 xl:pt-48 herotxtpaddontop">
          <div>
              Je raconter ma vie
              <div class="inline bg-gray-100">
              &#160;d'étudiant entrepreneur à toulon&#160;
              </div>
          </div>
          </h1>
          <br/>
          <motion.div variants={fadeInUp} key="modal-herobanner-2"  class="flex " >
            <div class="flex-initial ">
              <h2 class="text-sm	font-normal	 text-gray-600">
                Un petit blog, pour tenir mes objectifs ! 
              <br/>
            </h2>
            </div>
          </motion.div>
          <div class="flex flex-wrap pt-7 pb-20">
            <motion.div
                  key="modal-herobanner-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.99 }}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ 
                    duration: 0.3,
                    ease: easing,
                  }}
            >
              <div class="bg-gray-600 text-white font-black rounded p-4 mr-10 text-xxs mt-0 sm:mt-0 xl:mt-0 ">
              <Link 
                  href="/#articles"
                  aria-label="Lien vers mes articles"
                  type="button"
              >
                <a>Jette un œil à mes articles</a>
              </Link>
              </div>
            </motion.div>
            <motion.div 
                  key="modal-herobanner-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.99 }}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ 
                    duration: 0.3,
                    ease: easing,
                  }} 
                  class=""
            >
              <div class="border border-gray-600 text-gray-600 font-black rounded p-4 mr-10 text-xxs mt-5 md:mt-5 lg:mt-0 BtnPaddingTop">
                  <div class="flex items-center">
                    <div class="flex-initial pr-3">
                      <svg width="14" height="14" alt="Fleche-redirection" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12H21M21 12L14 5M21 12L14 19" stroke="#4B5563" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                      </div>
                      <div class="flex-initial ">
                      <Link 
                          href="https://anchor.fm/plustard"
                          aria-label="Lien externe vers le podcast"
                          type="button"
                      >
                        <a>Découvre mon podcast</a>
                      </Link>
                    </div>
                  </div>
              </div>
            </motion.div>
        </div>
        </motion.div>

        <motion.div 
                  key="modal-herobanner-5"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, }}  
                  class="  w-full   lg:w-1/2 "
        >
        <Image
          alt="Illustration-laboratoir-numérique-idées"
          className="rounded-lg"
          height={650}
          width={800}
          priority="true"
          quality="100"
          src={'/static/images/Illustration-Imagination-laboratoire-blog.png'}
          />
        </motion.div>

    </div>
    </motion.div>
  )
}

