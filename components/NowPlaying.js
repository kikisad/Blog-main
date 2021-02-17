import Image from 'next/image';
import useSWR from 'swr';
import fetcher from '../lib/fetcher';
import { motion } from "framer-motion";

let easing = [0.6, -0.05, 0.01, 0.99];


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

export default function NowPlaying() {
  const { data } = useSWR('/api/now-playing', fetcher);


  return (
    <div className="flex flex-wrap justify-center	sm:p-5">
      <motion.div
        key="modal-nowplaying-1"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Image
          alt="Spotify-musique-playeur"
          className="rounded-lg"
          height={60}
          width={60}
          quality="100"
          layout="fixed"
          src={data?.albumImageUrl || '/static/images/placeholder-non-musique.png'}
        />
      </motion.div>
      <motion.div variants={fadeInUp} key="modal-nowplaying-2">
        <div className="flex flex-col items-start pt-1  ml-6">
          <a
            className="text-gray-800 font-xs "
            href={data?.songUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data?.title ?? 'Je reviens bientôt'}
          </a>
          <p className="font-xs   text-gray-500 ">
            {data?.artist ?? 'Spotify'}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
