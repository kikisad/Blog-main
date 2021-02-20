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
        title="A propos de moi – killian cartignies étudiant entrepreneur"
        description="Tu venx en savoir plus sur moi ? - killian cartignies étudiant entrepreneur"
        canonical="https://blog.killiancartignies.com/apropos"
        openGraph={{
          url: 'https://blog.killiancartignies.com/apropos',
          title: 'A propos de moi – killian cartignies étudiant entrepreneur'
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
          <div class="flex flex-row items-center">
            <div class="w-full sm:w-3/5 h-64 bg-gray-100 ">
              <div class="imageheroapropos object-cover mb-6 bg-gray-100 ">
                <Image
                  alt="Icon-article-design-blog-3D-2"
                  className="imageapropos "
                  layout="fill"
                  objectFit="cover"
                  priority="true"
                  quality="100"
                  src={'/static/images/3D_Image_Contact.png'}
                />
              </div>
            </div>
            <div class="w-full sm:w-2/5 pl-5 pr-5">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                </svg>
              </div>
              <h2 className="text-sm sm:text-base mt-2 font-bold tracking-tighter leading-tight">
                Me contacter
                    </h2>
              <h3 className="text-xs sm:text-sm pt-1 text-gray-400">
                <a href="mailto:killiancartignies@gmail.com" class="underline hover:text-blue-500 cursor-pointer">
                  killiancartignies@gmail.com
                </a>
              </h3>
              <div class="pt-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z" /></svg>
              </div>
              <h2 className="text-sm sm:text-base  mt-2 font-bold tracking-tighter leading-tight">
                Parisien mais Toulonnais
                    </h2>
              <h3 className="text-xs sm:text-sm pt-1 text-gray-400">
                Allons boire un café, si tu passe par <a href="https://fr.wikipedia.org/wiki/Toulon" class=" underline hover:text-blue-500 cursor-pointer">Toulon</a>
              </h3>
            </div>
          </div>
          <div class="ml-10 mr-10 mt-10">
            <h3 className="text-sm ">
              <h1 className="text-base mt-2 font-bold tracking-tighter leading-tight">
                🇫🇷🇫🇷  Je suis étudiant entrepreneur et freelance UX & UI designer  ⬇️ <br />
              </h1>
              <p>
                <br />
                J'adore crée des interfaces qui procure une expariance aux visiteurs d'application et de site internet.
                <br />
                Et mon travail consiste à améliorer/créer la meilleure expérience possible pour les visiteurs d'un site web.
                J'aime donc comprendre les besoins et rencontrer de nouvelles personnes pour améliorer de plus en plus de choses !
                <br />
                J'entreprend, et réalise des side projet pour mamuser et découvrire d'autre dmomaine.
                <br />
                <br />
              </p>
              <h2 className="text-base mt-2 font-bold tracking-tighter leading-tight">
                A aussi ! 🔥 Je suis l'un des co-fondateurs du podcast français : <a href="https://fr.wikipedia.org/wiki/Toulon" class=" underline hover:text-blue-500 cursor-pointer">🎧 Plus-Tard </a>
              </h2>
              <p>
                Je parle avec des créatifs aux métier parfois différent, sur leurs workflow, et comment il gére leurs temps.
                <br />
                <br />
                Je passe mon temps sur intrenet, et j'aime découvrir de nouvelle choses :
                <br />
                🚀 Entrepreneuriat
                <br />
                🎨 Art
                <br />
                🎧 Podcast
                <br />
                💎 NFT
                <br />
                🎯 UX & UI design
                <br />
                🖼 Conception graphique
                <br />
                🔮 Web design
                <br />
                <br />
                Je vis dans le sud de la France, dans la région de Toulon, au milieu des palmiers et des mouettes.
                <br />
                Si un jour vous passez par là, pourquoi ne pas discuter autour d'un café.
              </p>
            </h3>
          </div>


          <motion.div variants={stagger} key="modal-aporpos-2" class="w-full mw-auto mb-20 lg:mt-10 lg:mb-20 sm:mt-10  mx-auto ">
            <div class="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 sm:gap-x-6 px-12 sm:px-10 sm:gap-y-14 gap-x-5 gap-y-5 mt-10 items-center text-center	 ">

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
                <h3 className="text-sm pt-2  sm:px-5 pt-2 text-gray-400">
                  Quelque un des domaine qui me passionnes : La crypto, les montres, la typographie, les podcasts…
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
                  Entrepreneurs
                    </h2>
                <h3 className="text-sm pt-2 sm:px-5 pt-2 text-gray-400">
                  Entrepreneur oui mais créateurs. J'adore les "side projets", imaginée, crée, construire, vendre, recommencer.
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
                  Entreprnedre et crée des idées à mon images, qui reponde au besoin d'aujourd'hui mais aussi de demain.
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
