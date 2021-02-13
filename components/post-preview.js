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
    <div class=" border-b border-t sm:pr-10 py-10 px-10 > ">
      <Link as={`/posts/${slug}`} href="/posts/[slug] scroll={false}">
        <div class="flex flex-wrap">
          <div class="w-auto flex-shrink-0 my-auto  ">
            <div className="my-auto">
              <CoverImage
                slug={slug}
                title={title}
                src={coverImage}
                height={150}
                width={200}
              />
            </div>
          </div>
          <div class="w-full sm:w-10 md:w-3 lg:w-14 xl:w-9">
          </div>
          <div class="w-full md:w-2/3   xl:pl-7 wcorrect">
            <h3 className="block pb-3 md:pt-0 pt-5 lg:pt-0 text-lg leading-7 font-medium text-black hover:underline">
              <Link as={`/posts/${slug}`} href="/posts/[slug] scroll={false}">
                <a className="hover:underline">{title}</a>
              </Link>
            </h3>
            <p className="text-sm text-gray-500 pb-4">{excerpt}</p>
            <div class="flex justify-between">
              <div class="flex-initial flex flex-row ...">
                <div>
                  <p className="text-sm text-gray-500 sm:pr-20 hover:underline ">Lire la suite .... </p>
                </div>
                <div>
                  <div className="pl-5 pt-1 arrowanimate">
                    <svg width="18" height="18" alt="Fleche-redirection" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12H21M21 12L14 5M21 12L14 19" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </div>
                </div>
              </div>
              <div className="text-xs	pt-1 text-gray-700 flex-initial">
                <DateFormatter dateString={date} />
              </div>

            </div>
          </div>
        </div>
      </Link>
    </div>

  )
}
