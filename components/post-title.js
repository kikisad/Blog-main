export default function PostTitle({ children }) {
  return (
    <h1 className="text-3xl md:text-5xl lg:text-6xl text-gray-800	 font-bold tracking-tighter leading-tight md:leading-none">
      {children}
    </h1>
  )
}
