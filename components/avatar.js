import Image from 'next/image';
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
    <div class="">
      <div class="flex flex-wrap justify-between mx-10 align-middle  ">
        <div>
          <motion.div variants={fadeInUp} key="modal-morestories-3" class="flex flex-wrap  ">
            <div class="flex flex-wrap sm:flex-nowrap">
              <motion.div
                key="modal-morestories-4"
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                class="place-content-end hidden md:block	">
                <Image
                  alt="Icon-article-design-blog-3D-2"
                  className="rounded-full "
                  height={100}
                  width={100}
                  priority="true"
                  quality="100"
                  src={'/static/images/Icon-Argent-Blog-Vente-En-Ligne.png'}
                />
              </motion.div>
              <div class="flex flex-col justify-center items-start pl-2 pl-2 sm:pl-10 sm:pr-20">
                <h2 className="text-base font-bold tracking-tighter leading-tight">
                  Killian cartignies
                      </h2>
                <h3 className="text-sm pt-2 text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a massa nec lacus consequat feugiat. Aliquam euismod ligula ac ex viverra dapibus. Quisque pretium consectetur libero.
                </h3>
              </div>
              <div class=" my-auto">



              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
