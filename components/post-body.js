import markdownStyles from './markdown-styles.module.css';
export default function PostBody({ children }) {
  return (
    <div className="prose prose-lg max-w-5xl mx-auto px-5 md:px-8 md:text-justify font-normal text-xs textxxs sm:text-sm leading-2 sm:text-lg sm:leading-7 lg:text-text-left	">
      <div className={markdownStyles['markdown']}>{children}</div>
    </div>
  );
}
