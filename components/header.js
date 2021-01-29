import NextLink from 'next/link';
import { motion } from "framer-motion";
import useSound from 'use-sound';
import boopSfx from '../public/static/sounds/boop.mp3';

let easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease:easing,delay: 0.5 }
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
  const [play] = useSound(boopSfx);

  return (
    <motion.div variants={fadeInUp}  key="modal-header-1" className="bg-white ">
      <nav className=" sm:sticky sticky-nav mt-1 pt-2 pl-5 pr-9 lg:pl-4 flex justify-between items-center bg-white bg-opacity-90">

        <div class="flex flex-nowrap">
          <NextLink href="/" scroll={false}>
            <a className="p-1 text-sm sm:text-xl font-bold sm:p-4 text-gray-900 ">SideLab. Blog</a>
          </NextLink>
          <NextLink href="/apropos" scroll={false} >
            <p className="animation">
                <a href="#" className="p-1 pl-5 pr-3 text-sm sm:text-base	pb-5 sm:p-4 text-gray-900 ">
                    À propos
                    <svg viewBox="0 0 70 36">
                        <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
                    </svg>
                </a>
            </p>
          </NextLink>
          <NextLink href="https://anchor.fm/plustard" scroll={false}>
          <p className="animation">
                <a href="#" className="hidden p-1 pl-3 pr-3 text-sm sm:text-base	pb-5 sm:p-4  text-gray-900 ">
                    Podcast
                    <svg viewBox="0 0 70 36">
                        <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
                        
                    </svg>
                </a>
            </p>
          </NextLink>
        </div>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="  rounded p-3 h-10 w-10"
          onClick={play}        
          >
        </button>
      </nav>
      <main className="flex flex-col justify-center bg-white dark:bg-black px-8">
        {children}
      </main>
    </motion.div>
  );
}







