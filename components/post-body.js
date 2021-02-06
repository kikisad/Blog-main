import markdownStyles from './markdown-styles.module.css'

export default function PostBody({ content }) {
  return (
    <div>
      <div class="flex">
        <div class="flex-initial sm:w-2/12">
            
        </div>
        <div class="flex-initial w-full sm:w-10/12">
        <div
            className={markdownStyles['markdown'],"prose max-w-none text-left font-normal text-lg leading-7 text-justify	lg:text-text-left	"}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
      </div>
  )
}

