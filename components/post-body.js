import markdownStyles from './markdown-styles.module.css'

export default function PostBody({ content }) {
  return (
    <div>
      <div
        className={markdownStyles['markdown'],"prose max-w-none text-left font-normal text-lg leading-7 text-justify	lg:text-text-left	"}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      </div>
  )
}

