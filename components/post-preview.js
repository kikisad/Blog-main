import DateFormatter from '../components/date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'


export default function PostPreview({
  title,
  coverImage,
  date,
  tag,
  excerpt,
  Tpsl,
  slug,
}) {
  return (
    <div class="border-b border-t sm:mr-5 pb-10 pt-10">
      <Link as={`/posts/${slug}`} href="/posts/[slug] scroll={false}"> 
        <div class="flex flex-wrap">
          <div class="w-3/12 hidden sm:block">
            <div className="text-xs	font-bold	 pt-1 pr-2 text-gray-700">
              Temps de lecture : {Tpsl ?? '5'} Min
            </div>
            <div className="text-xs	pt-1 text-gray-700">
              <DateFormatter dateString={date} />
            </div>
            <div className="pt-2">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              {tag}
              </span>
            </div>
          </div>
          <div class="w-full sm:w-9/12 ">
            <h3 className="block pb-3 sm:pr-14 text-lg leading-7 font-medium text-black hover:underline">
              <Link as={`/posts/${slug}`} href="/posts/[slug] scroll={false}">
                <a className="hover:underline">{title}</a>
              </Link>
            </h3>
            <p className="text-sm text-gray-500 sm:pr-5 pb-4  ">{excerpt}</p>
              <div class="flex">
                <div class="flex-initial ...">
                <p className="text-sm text-gray-500 sm:pr-20 hover:underline ">Lire la suite .... </p>
                </div>
                <div class="flex-initial ...">
                  <div>
                      <div className="pl-5 pt-1 arrowanimate">
                        <svg width="18" height="18" alt="Fleche-redirection" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12H21M21 12L14 5M21 12L14 19" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                      </div>
                  </div>
                </div>

              </div>
          </div>
      </div>
    </Link>
  </div>
    
  )
}
