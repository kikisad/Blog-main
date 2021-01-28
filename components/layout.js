import Footer from '../components/footer'
import Meta from '../components/meta'



export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
        <div className="max-w-screen-xl mx-auto">
          <main>{children}</main>
        </div>
        <Footer />
    </>
  )
}
