import NextLink from 'next/link';
import { motion } from "framer-motion";
import useSound from 'use-sound';
import boopSfx from '../public/static/sounds/boop.mp3';

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

export default function logonav({ children }) {

    return (
        <nav className=" absolute bg-white bg-opacity-90 overflow-hidden	">
            <div class="flex flex-nowrap max-w-screen-xl-plus mx-auto">
                <div class=" bg-gray-100 ">
                    <NextLink href="/" scroll={false}>
                        <a className="p-1 text-sm sm:text-xl font-bold sm:p-4 text-gray-900 ">Blog.</a>
                    </NextLink>
                </div>
                <div class="w-full mx-auto"></div>
                <div class=" bg-red-100 ">
                    <div class="flex flex-col ...">
                        <div>
                            <NextLink href="/apropos" scroll={false} >
                                <a href="#" className="p-1 pl-5 pr-3 text-sm sm:text-base	pb-5 sm:p-4 text-gray-900 ">
                                    À propos
                                    <br />
                                    À propos
                                    <br />
                                    À propos
                                    <br />
                                    À propos
                                    <br />
                                    À propos
                                    <br />
                                </a>
                            </NextLink>
                        </div>
                        <div>
                            <NextLink href="https://anchor.fm/plustard" scroll={false}>
                                <a href="#" className="p-1 pl-3 pr-3 text-sm sm:text-base	pb-5 sm:p-4  text-gray-900 ">
                                    Podcast
                                </a>
                            </NextLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}







