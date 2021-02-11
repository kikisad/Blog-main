import NextLink from 'next/link';
import { motion } from "framer-motion";


let easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing, delay: 0.5 }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
      delay: 0.5
    }
  }
};

export default function Header({ children }) {

  return (
    <motion.div variants={fadeInUp} key="modal-header-1" className="bg-white px-10 ">
      <nav className="pt-6 pb-8   bg-white bg-opacity-90">
        <div class="flex justify-between">
          <div>
            <NextLink href="/" scroll={false}>
              <a className="font-bold text-gray-900 ">Blog.</a>
            </NextLink>
          </div>
          <div>
            <NextLink href="/apropos" scroll={false} >
              <a href="#" className="pl-5 pr-3 ">
                À propos
                </a>
            </NextLink>
            <NextLink href="https://anchor.fm/plustard" scroll={false}>
              <a href="#" className=" ">
                Podcast
                </a>
            </NextLink>
          </div>
        </div>
      </nav>
      <main className="">
        {children}
      </main>
    </motion.div>
  );
}







