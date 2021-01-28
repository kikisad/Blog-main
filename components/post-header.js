import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image-responsive'
import PostTitle from '../components/post-title'
import Link from "next/link"


export default function PostHeader({
  title,
  coverImage,
  date,
  excerpt,
}) 
{
  return (
    <>
      <div className="mt-10 mb-10 ">
      <div className="rounded-lg pb-8">
      </div>
      <div className="">
          <div class="flex mb-5 items-center ">
              <div class="flex-initial">
              <svg width="16" height="16" alt="Fleche-redirection" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12H3M3 12L10 5M3 12L10 19" stroke="#9CA3AF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </div>
              <div class="flex-1 ml-3 align-middle font-bold text-gray-400">
              <Link
                    href={{
                      pathname: "/",
                    }}
                  >
                <a>Acceuil </a>
              </Link>
              </div>
            </div>
        <PostTitle>
          {title}
        </PostTitle>
        <div className=" text-xs mt-5">
          <DateFormatter dateString={date} />
        </div>
        <div className="mt-10">
        <CoverImage 
        className="rounded-lg mb-10"
        title={title} 
        src={coverImage} 
        height={250} 
        width={500} 
        />
        </div>
      </div>
      </div>
    </>
  )
}
