import markdownStyles from './markdown-styles.module.css';
export default function PostBody({ children }) {
  return (
    <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-4xl mx-auto px-5 md:px-0 md:text-justify font-normal text-xs textxxs sm:text-sm leading-2 sm:text-lg sm:leading-7 lg:text-text-left	">
      <div className={markdownStyles['markdown']}>{children}</div>
    </div>
  );
}
