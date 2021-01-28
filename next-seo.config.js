const title = "Blog sur l'entreprenariat étudiant";
const description =
  'Étudiant Entrepreneur, je raconter mes aventures et mes expériance sur la réalisation de mes projets sur se blog ';

const SEO = {
  title,
  description,
  canonical: 'https://blog.killiancartignies.com',
  openGraph: {
    type: 'website',
    locale: 'fr_FRA',
    url: 'https://blog.killiancartignies.com',
    title,
    description,
    images: [
      {
        url: 'https://blog.killiancartignies.com/static/images/banner.jpg',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@Kikisad_',
    site: '@Kikisad_',
    cardType: 'summary_large_image'
  }
};

export default SEO;
