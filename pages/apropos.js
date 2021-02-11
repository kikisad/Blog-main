import Image from 'next/image';
import Container from '../components/container'
import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import Layout from '../components/layout'



let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delay: 2
    }
  }
};

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing

    }
  }
};

export default function apropos() {
  return (

    <Layout>
      <NextSeo
        title="A propos de – killian étudiant entrepreneur"
        canonical="https://blog.killiancartignies.com/apropos"
        openGraph={{
          url: 'https://blog.killiancartignies.com/apropos',
          title: 'A propos de moi – killian étudiant entrepreneur'
        }}
      />

      <motion.div
        key="modal-aporpos"
        initial='initial'
        animate='animate'
        exit={{ opacity: 0 }}
      >
        <div className="">
          <motion.div variants={fadeInUp} key="modal-aporpos-1" class="ml-10 ">
            <h2 className="sm:text-5xl text-4xl md:text-6xl pt-32 md:text-7xl font-bold tracking-tighter leading-tight">
              À propos de moi
                </h2>
            <h3 className="pt-2 pb-10 pr-20 sm:pr-0 text-gray-400">
              Quelques petites choses à savoir sur moi
                </h3>
          </motion.div>
          <div class="flex flex-row">
            <div class="w-full sm:w-3/5 h-64 bg-gray-100">

            </div>
            <div class="w-full sm:w-2/5 pl-5 pr-5">
              <h2 className="text-base mt-5 font-bold tracking-tighter leading-tight">
                Entrepreneurs
                    </h2>
              <h3 className="text-sm pt-2 text-gray-400">
                Enfin encore étudiant, mais entrepreneur quand même !
              </h3>
              <h2 className="text-base mt-5 font-bold tracking-tighter leading-tight">
                Me contacter
                    </h2>
              <h3 className="text-sm pt-2 text-gray-400">
                Enfin encore étudiant, mais entrepreneur quand même !
              </h3>


            </div>

          </div>
          <div class="ml-10 mr-10 mb-20 mt-10">
            <h3 className="text-sm pt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in sem lectus. Fusce malesuada egestas massa. In condimentum lacus nisl, vitae porta leo pellentesque a. Maecenas aliquam posuere eleifend. Curabitur lobortis orci at risus vestibulum placerat. Aenean in dignissim tortor. Suspendisse a odio tincidunt, posuere risus vel, laoreet tortor. Sed sit amet ornare nulla. Praesent nec dapibus urna. Fusce at risus justo. Vivamus dapibus placerat interdum. Curabitur elementum dignissim velit eget accumsan.
          </h3>
          </div>


          <motion.div variants={stagger} key="modal-aporpos-2" class="w-full mw-auto mb-20 lg:mt-10 lg:mb-20 sm:mt-10  mx-auto ">
            <div class="grid grid-cols-2 md:grid-cols-3 sm:gap-x-10 sm:gap-y-14 gap-x-5 gap-y-5 items-center text-center	 ">

              <motion.div variants={fadeInUp} key="modal-aporpos-3" >
                <Image
                  alt="Icon-article-design-blog-3D-2"
                  className="rounded-lg mt-10 "
                  height={97}
                  width={100}
                  priority="true"
                  quality="100"
                  src={'/static/images/Icon-Apropos-De-moi-design-blog-3D-Elastique.png'}

                />
                <h2 className="text-base mt-5 font-bold tracking-tighter leading-tight">
                  Explorateurs
                    </h2>
                <h3 className="text-sm pt-2 sm:px-5 pt-2 text-gray-400">
                  Technologie, crypto, montre, vidéo, typographie, podcast…
                    </h3>
              </motion.div>
              <motion.div variants={fadeInUp} key="modal-aporpos-4" >
                <Image
                  alt="Icon-article-design-blog-3D-2"
                  className="rounded-lg mt-10 "
                  height={97}
                  width={100}
                  priority="true"
                  quality="100"
                  src={'/static/images/Icon-Apropos-De-moi-design-blog-3D-message-Vert.png'}
                />
                <h2 className="text-base mt-5 font-bold tracking-tighter leading-tight">
                  Explorateurs
                    </h2>
                <h3 className="text-sm pt-2 sm:px-5 pt-2 text-gray-400">
                  Technologie, crypto, montre, vidéo, typographie, podcast…
                    </h3>
              </motion.div>

              <motion.div variants={fadeInUp} key="modal-aporpos-6">
                <Image
                  alt="Icon-article-design-blog-3D-2"
                  className="rounded-lg mt-10 "
                  height={97}
                  width={100}
                  priority="true"
                  quality="100"
                  src={'/static/images/Icon-Apropos-De-moi-design-blog-3D-bousole.png'}
                />
                <h2 className="text-base mt-5 font-bold tracking-tighter leading-tight">
                  Ma philosophie
                    </h2>
                <h3 className="text-sm pt-2 sm:px-5 pt-2 text-gray-400">
                  Apporter un petit plus, pour crée une émotion par l'image
                    </h3>
              </motion.div>
            </div>
          </motion.div>
          <div>
          </div>


        </div>
      </motion.div>
    </Layout>

  )
}
