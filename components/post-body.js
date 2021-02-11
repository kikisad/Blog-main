import markdownStyles from './markdown-styles.module.css'

export default function PostBody({ content }) {
  return (
    <div class="px-10">
      <div
        className={markdownStyles['markdown'], "prose max-w-none text-left font-normal text-xs leading-5  sm:text-lg sm:leading-7 text-justify	lg:text-text-left	"}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

