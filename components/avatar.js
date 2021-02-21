import Image from 'next/image';
import { motion } from 'framer-motion';

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

export default function Avatar() {
  return (
    <div class="max-w-4xl mx-auto ">
      <div class="flex flex-wrap mx-auto p-3">
        <div>
          <motion.div
            variants={fadeInUp}
            key="modal-morestories-3"
            class="flex flex-wrap  "
          >
            <div class="flex flex-wrap sm:flex-nowrap">
              <motion.div
                key="modal-morestories-4"
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                class="place-content-end hidden md:block my-auto	"
              >
                <Image
                  alt="Icon-article-design-blog-3D-2"
                  className="rounded-full "
                  height={100}
                  width={100}
                  priority="true"
                  quality="100"
                  src={
                    '/static/images/Photo_auteur_blog_Killian_Cartignies.png'
                  }
                />
              </motion.div>
              <div class="flex flex-col justify-center items-start pl-2 sm:pl-10 ">
                <span class="px-4 py-1 inline-flex text-xs mb-2 leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Auteur
                </span>
                <h2 className="text-base font-bold tracking-tighter leading-tight">
                  Killian cartignies
                </h2>
                <h3 className="text-sm pt-2 text-gray-400">
                  Explorateur d'univers artistique et entrepreneurs, spécialisé
                  dans l'expérience utilisateur. Je conçois et crée des
                  interfaces web et mobile répondant au besoin d'aujourd'hui.
                </h3>
              </div>
              <div class=" my-auto"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
