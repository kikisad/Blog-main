import NowPlaying from '../components/NowPlaying'
import Unsplash from '../components/Unsplash'

import Image from 'next/image';
import { motion } from "framer-motion";
let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.05,
            delay: 2
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


export default function Dashboard() {
    return (



        <div class="mt-10 pl-10 sm:pl-0">
            <div class="flex flex-wrap sm:justify-around ">
                <div class="">
                    <NowPlaying />
                </div>
                <div class=" lg:w-0.5 lg:h-24 lg:bg-gray-200 lg:mx-6 "> </div>
                <div>
                    <motion.div variants={fadeInUp} key="modal-morestories-3" class="flex flex-wrap sm:p-5 pb-7 pr-10 sm:pb-0 sm:pr-0 ">
                        <div class="flex flex-nowrap overflow-hidden">
                            <motion.div
                                key="modal-morestories-4"
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                class="place-content-end">
                                <Image
                                    alt="Icon-article-design-blog-3D-2"
                                    className="rounded-lg "
                                    height={60}
                                    width={60}
                                    priority="true"
                                    quality="100"
                                    src={'/static/images/Icon-Argent-Blog-Vente-En-Ligne.png'}
                                />
                            </motion.div>
                            <div class="flex flex-col justify-center items-start ml-3">
                                <h4 class="text-gray-800 font-xs ">
                                    Ventes en ligne
                            </h4>
                                <h4 class="font-xs   text-gray-500 ">
                                    0€
                            </h4>
                            </div>

                        </div>
                    </motion.div>
                </div>
                <div class=" lg:w-0.5 lg:h-24 lg:bg-gray-200 lg:mx-6"> </div>
                <div>
                    <motion.div variants={fadeInUp} key="modal-morestories-6" class="w-full sm:p-5 pb-10 sm:pb-0 ">
                        <div class="flex flex-wrap justify-between	">
                            <motion.div
                                key="modal-morestories-8"
                                initial={{ Y: 30, opacity: 0 }}
                                animate={{ Y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                class="place-content-end">
                                <Image
                                    alt="Icon-article-design-blog-3D-2"
                                    className="rounded-lg lg:mt-10 "
                                    height={60}
                                    width={60}
                                    priority="true"
                                    quality="100"
                                    src={'/static/images/Icon-unsplsh-photo.png'}
                                />
                            </motion.div>
                            <div class="flex flex-col justify-center items-start ml-3 pr-5">
                                <h4 class="text-gray-800 font-xs ">
                                    Vues Unsplash
                            </h4>
                                <h4 class="font-xs   text-gray-500 ">
                                    <Unsplash />
                                </h4>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}