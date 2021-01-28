
import MoreStories from '../components/more-stories'
import PostPreview from '../components/post-preview'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Link from 'next/link'
import Image from 'next/image';
import { NextSeo } from 'next-seo';


export default function Blog({ allPosts }) {
  return (
    <>
      <Layout>
      <NextSeo
            title="Tous les posts du blog – killian étudiant entrepreneur"
            canonical="https://blog.killiancartignies.com/posts"
            openGraph={{
              url: 'https://blog.killiancartignies.com/posts',
              title: 'Tous les posts de mon blog - killian étudiant entrepreneur'
            }}
          />

      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
            <div class="flex mt-10">
              <div class="flex-initial">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12H3M3 12L10 5M3 12L10 19" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
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
            <div className="mt-10 ">
          <Image
            alt="Spotify"
            className="rounded-lg mt-10 "
            height={60}
            width={60}
            src={'/static/images/Icon-article-design-blog-3D-2.png'}
          />
        <h2 className="text-6xl mt-5 md:text-7xl font-bold tracking-tighter leading-tight">
            L'ensemble des articles 
          </h2>
          <h3 className="pt-2 pb-10 text-gray-400">
            Découvret tous mes articles, sur l'entreprenariat étudiant    
          </h3>
        </div>
            <div>
                      
            </div>
            <MoreStories posts={allPosts} />

          </div>          
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'tag',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
