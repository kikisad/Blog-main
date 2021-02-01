import Image from 'next/image';
import Container from '../components/container'
import Header from '../components/header'
import Footer from '../components/footer'
import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';


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
    transition: { duration: 0.6, ease:easing}
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

    <Container>
          <NextSeo
            title="A propos de – killian étudiant entrepreneur"
            canonical="https://blog.killiancartignies.com/apropos"
            openGraph={{
              url: 'https://blog.killiancartignies.com/apropos',
              title: 'A propos de moi – killian étudiant entrepreneur'
            }}
          />
          <Header>
            <motion.div 
              key="modal-aporpos"
              initial='initial' 
              animate='animate' 
              exit={{ opacity: 0 }}
            >    
            <div className="mt-5 sm:mt-10 w-full lg:w-9/12 mx-auto ">
              <motion.div variants={fadeInUp} key="modal-aporpos-1">
                <h2 className="sm:text-5xl text-4xl md:text-6xl mt-5 md:text-7xl font-bold tracking-tighter leading-tight">
                    À propos de moi 
                </h2>
                <h3 className="pt-2 pb-10 text-gray-400">
                    Quelques petites choses à savoir sur moi   
                </h3>
              </motion.div>
              <motion.div variants={stagger} key="modal-aporpos-2" class="w-full mw-auto sm:mt-10 mb-20 lg:mt-10 lg:mb-20">
                <div class="grid grid-cols-2 md:grid-cols-3 sm:gap-x-10 sm:gap-y-14 gap-x-5 gap-y-5 items-center text-center	 ">
                <motion.div variants={fadeInUp}>
                  <Image
                    alt="Icon-article-design-blog-3D-2"
                    className="rounded-lg mt-10"
                    height={97}
                    width={100}
                    priority="true"
                    quality="100"
                    src={'/static/images/Icon-Apropos-De-moi-design-blog-3D-recherche.png'}

                    />
                     <h2 className="text-base mt-5 font-bold tracking-tighter leading-tight">
                     Entrepreneurs  
                    </h2>
                    <h3 className="text-sm pt-2 sm:px-5 pt-2 text-gray-400">
                    Enfin encore étudiant, mais entrepreneur quand même !
                    </h3>
                  </motion.div>
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
                      UI et UX Designer  
                    </h2>
                    <h3 className="text-sm pt-2 sm:px-5 pt-2 text-gray-400">
                      Je crée des interfaces offrent une expérience différente aux visiteurs.   
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
                  <motion.div variants={fadeInUp} key="modal-aporpos-5">
                  <Image
                    alt="Icon-article-design-blog-3D-2"
                    className="rounded-lg mt-10 "
                    height={97}
                    width={100}
                    priority="true"
                    quality="100"
                    src={'/static/images/Icon-article-design-blog-3D-Conique.png'}
                    />
                     <h2 className="text-base mt-5 font-bold tracking-tighter leading-tight">
                        Mini laboratoire 
                    </h2>
                    <h3 className="text-sm pt-2 sm:px-5 pt-2 text-gray-400">
                        J'aime expérimenter, et apprendre sur beaucoups de sujet 
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
                  <motion.div variants={fadeInUp} key="modal-aporpos-7">
                  <Image
                    alt="Icon-article-design-blog-3D-2"
                    className="rounded-lg mt-10 "
                    height={97}
                    width={100}
                    priority="true"
                    quality="100"
                    src={'/static/images/Icon-Apropos-De-moi-design-blog-3D-Connexion.png'}
                    />
                     <h2 className="text-base mt-5 font-bold tracking-tighter leading-tight">
                        Discutons 
                    </h2>
                    <h3 className="text-sm pt-2 sm:px-5 pt-2 text-gray-400">
                        Allons boire un café ? Je suis dispo sur Twitter @kikisad_
                    </h3>
                  </motion.div>
                </div>
              </motion.div> 
              <div>
              </div>
              

            </div>
            <Footer/>
            </motion.div>
          </Header>
          
        </Container>

  )
}
