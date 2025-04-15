import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export default function Services() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <header className="flex flex-col items-center justify-center gap-4 py-4 md:py-8">
        <span className="text-primary uppercase">
          Mes solutions pour votre projet
        </span>
        <h1 className="text-xl font-semibold md:text-3xl lg:text-5xl">
          Mes <strong className="text-primary font-semibold">Services</strong> à
          Blois
        </h1>

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Services</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <section className="relative container mx-auto px-4 py-10 sm:px-6 md:py-14">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <span className="text-primary uppercase">Mes expertises</span>
          <h2 className="text-center text-lg font-semibold md:text-2xl lg:text-3xl">
            Des services sur mesure pour votre présence en ligne
          </h2>
          <p className="text-center">
            Vous cherchez à renforcer votre visibilité ou à développer votre
            activité sur internet ? En tant que développeur web freelance basé à
            Blois, je mets à votre disposition des solutions personnalisées qui
            répondent précisément à vos ambitions. Que ce soit pour concevoir un
            design unique, créer un site vitrine attractif ou développer une
            boutique en ligne performante, je vous accompagne étape par étape
            pour transformer vos idées en un projet digital réussi, tout en
            optimisant votre présence sur le web.
          </p>
        </div>
      </section>

      <section className="relative container mx-auto flex flex-col gap-8 px-4 py-10 sm:px-6 md:py-18">
        <div className="flex w-full flex-col-reverse items-center gap-8 md:flex-row md:gap-12">
          <div className="flex min-w-0 flex-1 flex-col items-start gap-6">
            <h3 className="text-lg font-semibold md:text-2xl lg:text-3xl">
              Création de{" "}
              <strong className="text-primary font-semibold">
                site internet
              </strong>
            </h3>
            <p>
              Vous avez besoin d’un site vitrine ou d’une solution unique pour
              un projet ambitieux ? Je conçois des sites internet modernes avec
              WordPress for sa facilité d’utilisation, ou sur mesure avec des
              technologies comme React ou Vue pour un design interactif côté
              utilisateur, et principalement Node pour un back-end robuste et
              performant. Chaque site est optimisé pour le SEO, assurant une
              visibilité maximale à Blois et au-delà, tout en répondant
              parfaitement à vos attentes et à celles de vos visiteurs.
            </p>
            <Link
              href="/services/creation-site-internet"
              className={buttonVariants({ variant: "default" })}
              aria-label="En savoir plus sur la création de site internet"
            >
              En savoir plus
            </Link>
          </div>
          <div className="flex-1 p-4">
            <Image
              src="/illustration-developpeur-web.svg"
              alt="Illustration création de site internet - Développeur freelance à Blois"
              className="float-animation w-full"
              width={568}
              height={568}
              priority
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-8 md:flex-row md:gap-12">
          <div className="flex-1 p-4">
            <Image
              src="/creer-site-ecommerce.svg"
              alt="Illustration création de site e-commerce - Développeur freelance à Blois"
              className="float-animation w-full"
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
            </h3>
            <p>
              Prêt à lancer votre boutique en ligne et à conquérir de nouveaux
              clients ? Avec WordPress et WooCommerce, je développe des sites
              e-commerce intuitifs, sécurisés et optimisés pour maximiser vos
              ventes, que vous soyez à Blois ou ailleurs. Chaque boutique
              bénéficie d’un design attractif, d’une navigation fluide et
              d’outils de gestion autonome, tout en étant pensée pour le
              référencement afin d’attirer un trafic qualifié directement depuis
              Google.
            </p>
            <Link
              href="/services/creation-site-e-commerce"
              className={buttonVariants({ variant: "default" })}
              aria-label="En savoir plus sur la création de site e-commerce"
            >
              En savoir plus
            </Link>
          </div>
        </div>

        <div className="flex w-full flex-col-reverse items-center gap-8 md:flex-row md:gap-12">
          <div className="flex min-w-0 flex-1 flex-col items-start gap-6">
            <h3 className="text-lg font-semibold md:text-2xl lg:text-3xl">
              <strong className="text-primary font-semibold">Web design</strong>{" "}
              responsive
            </h3>
            <p>
              Vous souhaitez offrir une identité visuelle percutante à votre
              site internet ? J’utilise Figma pour concevoir des maquettes
              responsive sur mesure, adaptées aussi bien aux écrans desktop
              qu’aux mobiles, avec un focus sur l’expérience utilisateur (UX) et
              l’interface (UI). Mes designs modernes et intuitifs captent
              l’attention de vos visiteurs, renforcent votre marque et sont
              prêts à être intégrés dans WordPress ou une solution
              personnalisée, selon vos besoins.
            </p>
            <Link
              href="/services/web-design"
              className={buttonVariants({ variant: "default" })}
              aria-label="En savoir plus sur la web design"
            >
              En savoir plus
            </Link>
          </div>
          <div className="flex-1 p-4">
            <Image
              src="/web-design-freelance.svg"
              alt="Illustration web design responsive - Développeur freelance à Blois"
              className="float-animation w-full"
              width={568}
              height={568}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// SEO Metadata
export const metadata: Metadata = {
  title: "Services Web à Blois - Développeur Web Freelance - Allain Web ",
  description:
    "Découvrez mes services à Blois : création de sites internet, sites e-commerce avec WooCommerce, et web design responsive avec Figma. Solutions sur mesure pour votre projet.",
  openGraph: {
    title: "Services Web à Blois - Allain Web",
    description:
      "Création de sites vitrines, e-commerce et web design par Julien Allain, développeur freelance à Blois. Contactez-moi pour concrétiser votre projet !",
    images: ["https://www.allainweb.fr/illustration-developpeur-web.svg"],
    url: "https://www.allainweb.fr/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services Web à Blois - Allain Web",
    description:
      "Sites internet, e-commerce et web design par un freelance à Blois. Découvrez mes solutions personnalisées !",
    images: ["https://www.allainweb.fr/illustration-developpeur-web.svg"],
  },
};

// Schema.org Data
const schemaData = [
  {
    "@type": "Service",
    "@id": "https://www.allainweb.fr/services/#service",
    serviceType: "Services de développement web et design",
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
      "Services de création de sites internet, sites e-commerce avec WordPress et WooCommerce, et web design responsive avec Figma, par un développeur freelance à Blois.",
    offers: {
      "@type": "Offer",
      name: "Création de sites et web design",
      description:
        "Solutions personnalisées : sites vitrines, e-commerce et designs responsive pour votre présence en ligne.",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
  },
  {
    "@type": "WebPage",
    "@id": "https://www.allainweb.fr/services/#webpage",
    url: "https://www.allainweb.fr/services",
    name: "Services - Allain Web",
    isPartOf: {
      "@id": "https://www.allainweb.fr/#website",
    },
    description:
      "Découvrez mes services à Blois : création de sites internet, sites e-commerce avec WooCommerce, et web design responsive avec Figma.",
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
      ],
    },
  },
];
