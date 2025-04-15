import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Metadata } from "next";
import ContactForm from "@/components/contact-form";

export default function CreationSiteInternet() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <header className="flex flex-col items-center justify-center gap-4 py-4 md:py-8">
        <span className="text-primary uppercase">
          Concrétisez votre projet web
        </span>
        <h1 className="text-xl font-semibold md:text-3xl lg:text-5xl">
          Création de{" "}
          <strong className="text-primary font-semibold">Site Internet</strong>{" "}
          à Blois
        </h1>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/services">Services</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Création de Site Internet</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <section className="relative container mx-auto flex flex-col gap-8 px-4 py-10 sm:px-6 md:py-18">
        <div className="flex w-full flex-col items-center gap-8 md:flex-row md:gap-12">
          <div className="flex-1 p-0 md:p-8">
            <Image
              src="/illustration-developpeur-web.svg"
              alt="Illustration développeur web freelance à Blois - Création de site internet Wordpress et sur mesure"
              className="float-animation w-full"
              width={568}
              height={568}
              priority
            />
          </div>
          <div className="flex min-w-0 flex-1 flex-col items-start gap-6">
            <h2 className="text-lg font-semibold md:text-2xl lg:text-3xl">
              La création de{" "}
              <strong className="text-primary font-semibold">
                site internet
              </strong>{" "}
              : un outil essentiel pour votre visibilité
            </h2>
            <p>
              La création de site internet est devenue incontournable pour
              booster votre visibilité et toucher vos clients, que vous soyez à
              Blois ou au-delà. Un site web bien pensé est plus qu’une vitrine :
              c’est un outil stratégique pour valoriser votre activité, attirer
              des prospects et renforcer votre crédibilité. À l’heure où le
              digital domine, investir dans une présence en ligne est essentiel
              pour rester compétitif.
            </p>
            <p>
              Chez AllainWeb, je vous accompagne dans la réalisation de sites
              internet adaptés à vos objectifs, avec une expertise ancrée à
              Blois. Que vous souhaitiez un site rapide à mettre en place ou une
              solution entièrement personnalisée, je transforme vos idées en
              projets concrets. Cette page détaille mes services : des sites
              WordPress pratiques et autonomes, ou des développements sur-mesure
              pour des besoins uniques. Site vitrine, e-commerce ou optimisation
              pour le référencement local, je suis là pour vous guider.
            </p>
            <p>
              Un site internet, c’est votre premier pas vers une croissance
              durable. Découvrez ci-dessous comment je peux vous aider à
              concrétiser votre projet.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-4 py-4 md:py-12">
          <span className="text-primary uppercase">Un site à votre image</span>
          <h2 className="text-center text-lg font-semibold md:text-2xl lg:text-3xl">
            Les services de création de site web
          </h2>
        </div>

        <div className="flex w-full flex-col-reverse items-center gap-8 md:flex-row md:gap-12">
          <div className="flex min-w-0 flex-1 flex-col items-start gap-6">
            <h3 className="text-lg font-semibold md:text-2xl lg:text-3xl">
              Création de{" "}
              <strong className="text-primary font-semibold">
                site vitrine
              </strong>{" "}
              : votre carte de visite en ligne
            </h3>
            <p>
              Un site vitrine est parfait pour présenter votre activité et
              attirer des clients à Blois. Simple et professionnel, il met en
              avant vos services et coordonnées, comme une carte de visite
              accessible 24/7. Que vous soyez artisan ou commerçant, c’est un
              outil clé pour votre visibilité.
            </p>
            <p>
              Je crée des sites vitrines modernes, responsive (adaptés mobiles)
              et optimisés pour le référencement local. Design sur mesure,
              contenu clair, formulaire de contact : tout est pensé pour
              refléter votre identité et capter votre audience.
            </p>
            <p>
              Gagnez en crédibilité avec une présence en ligne efficace et sans
              complexité.
            </p>
          </div>
          <div className="flex-1 p-4">
            <Image
              src="/creation-site-vitrine.svg"
              alt="Illustration développeur web freelance à Blois - Création de site internet vitrine"
              className="w-full"
              width={568}
              height={568}
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-8 md:flex-row md:gap-12">
          <div className="flex-1 p-4">
            <Image
              src="/creation-site-ecommerce.svg"
              alt="Illustration développeur web freelance à Blois - Création de site internet e-commerce"
              className="w-full"
              width={568}
              height={568}
            />
          </div>
          <div className="flex min-w-0 flex-1 flex-col items-start gap-6">
            <h3 className="text-lg font-semibold md:text-2xl lg:text-3xl">
              Création de{" "}
              <strong className="text-primary font-semibold">
                site e-commerce
              </strong>
              avec{" "}
              <strong className="text-primary font-semibold">WordPress</strong>{" "}
              et{" "}
              <strong className="text-primary font-semibold">
                WooCommerce
              </strong>
            </h3>
            <p>
              Envie de vendre en ligne à Blois ou ailleurs ? Un site e-commerce
              avec WordPress et WooCommerce est parfait for lancer votre
              boutique digitale. Flexible et intuitif, cet outil vous permet de
              gérer produits, paiements et livraisons en toute simplicité.
            </p>
            <p>
              Je conçois des boutiques en ligne modernes et optimisées : design
              attractif, navigation fluide, paiements sécurisés (PayPal, Stripe,
              carte bancaire) et compatibilité mobile. Votre site sera aussi
              pensé pour le référencement pour attirer vos clients via Google.
              Avec WooCommerce, vous gérez facilement votre catalogue et restez
              autonome.
            </p>
            <p>
              Démarrez votre activité en ligne avec une solution performante et
              adaptée à votre budget.
            </p>
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="relative container mx-auto flex flex-col gap-8 px-4 py-10 sm:px-6 md:py-18"
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-lg md:text-xl lg:text-2xl">
              FAQ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-base">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </section>

      <ContactForm />
    </div>
  );
}

export const metadata: Metadata = {
  title:
    "Création de Site Internet à Blois - Développeur Web Freelance - Allain Web",
  description:
    "Création de sites internet à Blois par un développeur web freelance : sites vitrines, e-commerce avec WordPress et WooCommerce, solutions sur mesure optimisées pour le SEO.",
  openGraph: {
    title: "Création de Site Internet à Blois - Allain Web",
    description:
      "Besoin d’un site vitrine ou e-commerce ? Julien Allain, développeur web freelance à Blois, vous propose des solutions personnalisées avec WordPress ou sur mesure.",
    images: ["https://www.allainweb.fr/illustration-developpeur-web.svg"],
    url: "https://www.allainweb.fr/services/creation-site-internet",
  },
  twitter: {
    card: "summary_large_image",
    title: "Création de Site Internet à Blois - Allain Web",
    description:
      "Sites vitrines, e-commerce ou sur mesure par un développeur freelance à Blois. Contactez-moi pour votre projet web !",
    images: ["https://www.allainweb.fr/illustration-developpeur-web.svg"],
  },
};

const faqItems = [
  {
    question:
      "Pourquoi choisir un développeur web freelance pour la création de mon site internet ?",
    answer:
      "Un développeur web freelance offre une approche personnalisée, adaptée à vos besoins spécifiques, sans les frais élevés d’une agence. Vous bénéficiez d’un interlocuteur unique, réactif et flexible, qui met son expertise au service d’un site unique, optimisé pour vos objectifs et votre visibilité sur Google.",
  },
  {
    question:
      "Quels sont les avantages d’un site internet sur mesure par rapport à une solution préfabriquée comme Wix ?",
    answer:
      "Un site sur mesure offre une personnalisation totale, adaptée à vos besoins et à votre identité, contrairement aux modèles limités de Wix. Il est plus performant, évolutif et optimisé pour le référencement sur Google, garantissant une meilleure visibilité et une expérience utilisateur unique.",
  },
  {
    question:
      "Quelle est la différence entre un site préfabriqué Wix et un site WordPress créé par un freelance ?",
    answer:
      "Un site Wix est limité par des templates rigides et des options restreintes, tandis qu’un site WordPress, offre une personnalisation avancée, une flexibilité illimitée et une optimisation SEO poussée.",
  },
  {
    question: "Que choisir entre un site sur mesure et un site WordPress ?",
    answer:
      "Un site entièrement sur mesure est idéal pour des besoins très spécifiques, mais plus coûteux et long à développer. Un site WordPress, combine personnalisation, rapidité de mise en œuvre et flexibilité grâce à des thèmes et plugins adaptés, tout en restant optimisé pour le SEO et évolutif selon vos objectifs.",
  },
  {
    question:
      "Combien de temps faut-il pour créer un site internet avec un développeur web freelance ?",
    answer:
      "Le délai varie selon la complexité du projet, mais en général, un site vitrine prend entre 2 et 4 semaines, et un site plus complexe comme une boutique en ligne peut nécessiter 6 à 8 semaines. Tout dépend de vos besoins, que je définis avec vous pour respecter vos échéances.",
  },
  {
    question:
      "Comment un développeur web freelance peut-il améliorer le référencement de mon site sur Google ?",
    answer:
      "Un freelance optimise votre site avec une structure technique solide (vitesse, mobile-friendly), des mots-clés pertinents et un contenu de qualité, tout en respectant les bonnes pratiques SEO. Résultat : une meilleure position sur Google et plus de visiteurs qualifiés.",
  },
];

// Schema.org data
const schemaData = [
  {
    "@type": "Service",
    "@id": "https://www.allainweb.fr/services/creation-site-internet/#service",
    serviceType: "Création de site internet",
    provider: {
      "@type": "Organization",
      "@id": "https://www.allainweb.fr/#organization",
      name: "Allain Web",
      url: "https://www.allainweb.fr",
      logo: "https://www.allainweb.fr/logo.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "7 Résidence de Bellevue",
        addressLocality: "Seigy",
        postalCode: "41110",
        addressCountry: "FR",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "contact@allainweb.fr",
        telephone: "+33 6 50 42 52 21",
        contactType: "Customer Service",
        availableLanguage: ["French"],
      },
    },
    areaServed: {
      "@type": "Place",
      name: "Blois",
    },
    description:
      "Création de sites internet à Blois : sites vitrines, e-commerce avec WordPress et WooCommerce, et solutions sur mesure optimisées pour le référencement.",
    offers: {
      "@type": "Offer",
      name: "Création de site vitrine et e-commerce",
      description:
        "Sites vitrines modernes ou boutiques en ligne avec WordPress et WooCommerce, adaptés à vos besoins.",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
  },
  {
    "@type": "WebPage",
    "@id": "https://www.allainweb.fr/services/creation-site-internet/#webpage",
    url: "https://www.allainweb.fr/services/creation-site-internet",
    name: "Création de Site Internet - Allain Web",
    isPartOf: {
      "@id": "https://www.allainweb.fr/#website",
    },
    description:
      "Découvrez mes services de création de sites internet à Blois : vitrines, e-commerce avec WordPress, et solutions sur mesure.",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: "https://www.allainweb.fr/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://www.allainweb.fr/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Création de Site Internet",
          item: "https://www.allainweb.fr/services/creation-site-internet",
        },
      ],
    },
  },
  {
    "@type": "FAQPage",
    "@id": "https://www.allainweb.fr/services/creation-site-internet/#faqpage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];
