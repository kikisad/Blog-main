import markdownStyles from './markdown-styles.module.css';
export default function PostBody({ children }) {
  return (
    <div className="prose max-w-4xl mx-auto text-justify	font-normal text-sm leading-5 sm:text-lg sm:leading-7 lg:text-text-left	">
      <div className={markdownStyles['markdown']}>{children}</div>
    </div>
  );
}
