import DateFormatter from '../components/date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'


export default function PostPreview({
  title,
  coverImage,
  date,
  tag,
  excerpt,
  slug,
}) {
  return (
    <div class="mb-5">
      <Link as={`/posts/${slug}`} href="/posts/[slug] scroll={false}"> 
      <div class=" sm:p-5 bg-white shadow rounded-xl hovercard">
        <div class="flex flex-col-reverse	 sm:flex-row ">
        <div class="w-11/12 mx-auto">
            <h3 className="block pb-3 sm:pr-14 mt-1 text-lg leading-7	font-medium text-black hover:underline">
              <Link as={`/posts/${slug}`} href="/posts/[slug] scroll={false}">
                <a className="hover:underline">{title}</a>
              </Link>
            </h3>
            <p className="text-sm text-gray-500 sm:pr-20">{excerpt}</p>
            <div class="flex flex-wrap items-center pt-4  mb-5">
                <div className="text-xs	pt-1 text-gray-700">
                 <DateFormatter dateString={date} />
                </div>
                <div className="pl-5 ">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {tag}
                  </span>
                </div>
                <div className="pl-5 pt-1 arrowanimate">
                  <svg width="18" height="18" alt="Fleche-redirection" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12H21M21 12L14 5M21 12L14 19" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
            </div>

        </div>
        <div class=" mb-5 place-self-center sm:hidden">
            <div className="">
                <CoverImage
                  slug={slug}
                  title={title}
                  src={coverImage}
                  height={150}
                  width={255}
                />
            </div>
          </div>
      </div>
    </div>
    </Link>

  </div>
    
  )
}
