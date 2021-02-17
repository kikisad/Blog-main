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
    <>
      <section class="text-gray-600 body-font border-b border-t overflow-hidden">
        <Link as={`/posts/${slug}`} href="/posts/[slug] scroll={false}">
          <div class=" px-5 py-10 mx-auto ">
            <div class="-my-8 divide-y-2 divide-gray-100">
              <div class="py-8 flex flex-wrap md:flex-nowrap justify-center	 items-center">
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span class="font-semibold title-font text-gray-700 ">
                    <CoverImage
                      slug={slug}
                      title={title}
                      src={coverImage}
                      height={150}
                      width={200}
                    />
                  </span>
                </div>
                <div class="md:flex-grow ">
                  <h2 class="text-center md:text-left text-2xl font-medium text-gray-900 title-font mb-2">{title}</h2>
                  <p class="text-center md:text-left leading-relaxed">{excerpt}</p>
                  <div class="flex  justify-center md:justify-start	  ">
                    <a class=" text-gray-400 inline-flex justify-center items-center mt-4">Lire la suite ....
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>

      </section>



    </>

  )
}
