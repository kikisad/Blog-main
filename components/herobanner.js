import Image from 'next/image';
import CoverImage from '../components/cover-image';
import { motion } from 'framer-motion';
import Link from 'next/link';

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

export default function Herobanner() {
  return (
    <motion.div variants={stagger} key="modal-herobanner">
      <div class="">
        <motion.div
          variants={fadeInUp}
          key="modal-herobanner-2"
          class="m-auto w-full px-10 pt-32"
        >
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-tight pr-10">
            <div>
              Je raconte ma vie, &#160;
              <div class="inline bg-gray-200">
                d'entrepreneur toulonnais !&#160;
              </div>
              &#160;👋🎙
            </div>
          </h1>
          <br />
          <motion.div
            variants={fadeInUp}
            key="modal-herobanner-2"
            class="flex pb-10 "
          >
            <div class="flex-initial ">
              <h2 class="text-sm	font-normal	 text-gray-600">
                Dans un petit blog, histoire de tenir mes objectifs !{' '}
                <spam class="underline cursor-pointer hover:text-gray-400	">
                  (Aka le tableau de la mort)
                </spam>
                <br />
              </h2>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          key="modal-herobanner-2"
          class=" w-full"
        >
          <div class="imageheroheader object-cover mb-6 bg-gray-100 ">
            <Image
              alt="Icon-article-design-blog-3D-2"
              className="imageheader"
              layout="fill"
              objectFit="cover"
              priority="true"
              quality="100"
              src={'/static/images/3D_scene_total_8.png'}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
