import Image from 'next/image';
import useSWR from 'swr';
import fetcher from '../lib/fetcher';

export default function NowPlaying() {
  const { data } = useSWR('/api/now-playing', fetcher);


  return (
    <div className="flex flex-wrap sm:flex-nowrap border border-gray-200 border-t-0 w-full p-5 mb-8 ">
      <Image
        alt="Spotify-musique-playeur"
        className="rounded-lg"
        height={60}
        width={60}
        quality="100"
        layout="fixed"
        src={data?.albumImageUrl || '/static/images/placeholder-non-musique.png'}
      />
      <div className="flex flex-col justify-center items-start ml-3">
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
    </div>
  );
}
