import NextLink from 'next/link';
import { motion } from "framer-motion";
import Image from 'next/image';



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
    <motion.div variants={fadeInUp} key="modal-header-1" className="bg-white  ">
      <nav className="pt-3 pb-2  px-5 md:px-0 bg-white bg-opacity-90">
        <div class="flex justify-between items-center">
          <div>
            <NextLink href="/" scroll={false}>
              <a className="font-bold text-gray-900 ">
                <Image
                  alt="Icon-article-design-blog-3D-2"
                  className="rounded-full "
                  height={40}
                  width={40}
                  priority="true"
                  quality="100"
                  src={'/static/images/logo_Killian_cartignies_face.gif'}
                />
              </a>
            </NextLink>
          </div>
          <div class="">
            <NextLink href="/apropos" scroll={false} >
              <a href="#" className="pl-5 pr-3 ">
                À propos
                </a>
            </NextLink>
            <NextLink href="https://anchor.fm/plustard" scroll={false}>
              <a href="#" className=" pr-3 ">
                Podcast
                </a>
            </NextLink>
            <NextLink href="/Touslesarticles" scroll={false}>
              <a href="#" className=" ">
                Articles
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







