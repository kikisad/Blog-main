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
    transition: { duration: 0.6, ease: easing, delay: 0.6 }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
      delay: 0.6
    }
  }
};

export default function headertitre() {
  return (
    <motion.div variants={stagger} key="modal-headertitre" class="ml-5">
      <motion.div variants={fadeInUp} key="modal-headertitre-2">
        <h2 className="text-6xl sm:mt-5 md:text-7xl font-bold tracking-tighter leading-tight">
          Articles
        </h2>
        <h3
          id="articles"
          className="pt-2 pb-10 text-gray-500 text-sm pr-10 sm:text-normal sm:pr-0 "
        >
          Tous les articles récemment publiés sur l'entreprenariat.
        </h3>
      </motion.div>
    </motion.div>
  );
}
