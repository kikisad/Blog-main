import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

export default function CoverImage({ title, src, slug, height, width }) {
  const image = (
    <Image
      src={src}
      alt={`Img_couverture_${title}`}
      className={cn('shadow-sm', {
        'hover:shadow-md transition-shadow duration-200 rounded-lg': slug,
      })}
      layout="fixed"
      width={width}
      height={height}
      quality={100}

    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
          image
        )}
    </div>
  )
}
