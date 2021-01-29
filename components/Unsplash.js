import useSWR from 'swr';
import format from 'comma-number';
import fetcher from '../lib/fetcher';


export default function Unsplash() {
    const { data } = useSWR('/api/unsplash', fetcher);

  const link = 'https://unsplash.com/@kikisad';

  return (
    <div>
        <p >
            <a href={link} > {data?.views ?? 'Erreur'} </a>
        </p>
    </div>
  );
}
