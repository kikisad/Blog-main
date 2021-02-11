import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image-responsive'
import PostTitle from '../components/post-title'
import Link from "next/link"


export default function PostHeader({
  title,
  coverImage,
  date,
  excerpt,
  Tpsl,
}) {
  return (
    <>
      <div className="mt-5 mb-10 ">

        <div className="ml-10">
          <div class="flex mt-10  mb-5 items-center ">
            <div class="flex-initial">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" /></svg>
            </div>
            <div class="flex-1 ml-3 align-middle">
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
          <div className=" text-xs md:mt-3 mt-3 mb-10">
            <DateFormatter dateString={date} /> - {Tpsl ?? '5'} Minutes de lecture
        </div>
        </div>
        <div className="">
          <CoverImage
            className="rounded-lg mb-10"
            title={title}
            src={coverImage}
            layout="fill"
            height={250}
            width={500}
          />
        </div>
      </div>
    </>
  )
}
