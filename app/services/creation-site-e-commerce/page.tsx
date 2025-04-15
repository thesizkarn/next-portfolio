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

export default function CreationSiteEcommerce() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <header className="flex flex-col items-center justify-center gap-4 py-4 md:py-8">
        <span className="text-primary uppercase">
          Lancez votre boutique en ligne
        </span>
        <h1 className="text-xl font-semibold md:text-3xl lg:text-5xl">
          Création de{" "}
          <strong className="text-primary font-semibold">
            Site E-commerce
          </strong>{" "}
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
              <BreadcrumbPage>Création de Site E-commerce</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <section className="relative container mx-auto flex flex-col gap-8 px-4 py-10 sm:px-6 md:py-18">
        <div className="flex w-full flex-col items-center gap-8 md:flex-row md:gap-12">
          <div className="flex-1 p-0 md:p-8">
            <Image
              src="/creer-site-ecommerce.svg"
              alt="Illustration développeur web freelance à Blois - Création de site e-commerce avec WordPress et WooCommerce"
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
                site e-commerce
              </strong>{" "}
              : vendez en ligne dès aujourd’hui
            </h2>
            <p>
              Un site e-commerce est la clé pour développer votre activité et
              atteindre vos clients, à Blois ou partout ailleurs. Plus qu’une
              simple boutique, c’est une plateforme qui travaille pour vous
              24/7, augmentant vos ventes et votre visibilité dans un monde de
              plus en plus connecté.
            </p>
            <p>
              Chez AllainWeb, je vous propose des solutions e-commerce sur
              mesure avec WordPress et WooCommerce. Basé à Blois, je conçois des
              boutiques en ligne intuitives, sécurisées et optimisées pour le
              référencement, adaptées à vos produits et à votre budget. Que vous
              vendiez des articles artisanaux ou des services, je transforme
              votre vision en une réalité digitale performante.
            </p>
            <p>
              Lancez votre boutique en ligne avec un partenaire local qui
              comprend vos besoins. Découvrez comment je peux vous aider
              ci-dessous.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-4 py-4 md:py-12">
          <span className="text-primary uppercase">
            Une boutique à votre mesure
          </span>
          <h2 className="text-center text-lg font-semibold md:text-2xl lg:text-3xl">
            Mes services de création e-commerce
          </h2>
        </div>

        <div className="flex w-full flex-col-reverse items-center gap-8 md:flex-row md:gap-12">
          <div className="flex min-w-0 flex-1 flex-col items-start gap-6">
            <h3 className="text-lg font-semibold md:text-2xl lg:text-3xl">
              Boutique en ligne avec{" "}
              <strong className="text-primary font-semibold">WordPress</strong>{" "}
              et{" "}
              <strong className="text-primary font-semibold">
                WooCommerce
              </strong>
            </h3>
            <p>
              WordPress et WooCommerce forment une combinaison puissante pour
              créer une boutique en ligne flexible et facile à gérer. Que vous
              ayez 10 ou 1000 produits, cette solution s’adapte à votre échelle
              et à vos ambitions.
            </p>
            <p>
              Je développe des sites e-commerce modernes : design attractif,
              navigation intuitive, paiements sécurisés (Stripe, PayPal, etc.)
              et compatibilité mobile. Votre boutique est aussi optimisée pour
              le SEO afin d’attirer plus de clients via Google. Avec
              WooCommerce, vous gérez vos stocks, commandes et promotions en
              toute autonomie.
            </p>
            <p>
              Une solution performante pour vendre en ligne, sans compromis sur
              la qualité ni le budget.
            </p>
          </div>
          <div className="flex-1 p-4">
            <Image
              src="/creation-site-ecommerce.svg"
              alt="Illustration création de site e-commerce avec WordPress et WooCommerce"
              className="float-animation w-full"
              width={568}
              height={568}
            />
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

// SEO Metadata
export const metadata: Metadata = {
  title:
    "Création de Site E-commerce à Blois - Développeur Freelance - Allain Web",
  description:
    "Création de sites e-commerce à Blois avec WordPress et WooCommerce : boutiques en ligne modernes, sécurisées et optimisées pour le SEO par un développeur web freelance.",
  openGraph: {
    title: "Création de Site E-commerce à Blois - Allain Web",
    description:
      "Lancez votre boutique en ligne avec Julien Allain, développeur freelance à Blois. Solutions WordPress et WooCommerce adaptées à vos besoins.",
    images: ["https://www.allainweb.fr/creation-site-ecommerce.svg"],
    url: "https://www.allainweb.fr/services/creation-site-e-commerce",
  },
  twitter: {
    card: "summary_large_image",
    title: "Création de Site E-commerce à Blois - Allain Web",
    description:
      "Boutiques en ligne avec WordPress et WooCommerce par un freelance à Blois. Contactez-moi pour vendre en ligne !",
    images: ["https://www.allainweb.fr/creation-site-ecommerce.svg"],
  },
};

// FAQ Data
const faqItems = [
  {
    question:
      "Pourquoi choisir un développeur web freelance pour ma boutique en ligne ?",
    answer:
      "Un freelance propose une solution personnalisée et économique par rapport à une agence. Vous avez un contact direct, réactif, qui crée une boutique adaptée à vos besoins et optimisée pour vos ventes.",
  },
  {
    question:
      "Quels sont les avantages de WooCommerce pour un site e-commerce ?",
    answer:
      "WooCommerce est flexible, intuitif et puissant. Il permet de gérer facilement vos produits, paiements et livraisons, tout en offrant des options de personnalisation et une optimisation SEO pour attirer vos clients.",
  },
  {
    question: "Combien de temps faut-il pour créer un site e-commerce ?",
    answer:
      "Un site e-commerce prend généralement entre 6 et 8 semaines selon sa complexité (nombre de produits, fonctionnalités). Je définis avec vous un planning précis pour respecter vos délais.",
  },
  {
    question: "Comment optimiser mon site e-commerce pour Google ?",
    answer:
      "J’optimise votre boutique avec une structure rapide, un design responsive, des mots-clés ciblés et un contenu pertinent, pour améliorer votre classement sur Google et attirer plus de visiteurs.",
  },
];

// Schema.org Data
const schemaData = [
  {
    "@type": "Service",
    "@id":
      "https://www.allainweb.fr/services/creation-site-e-commerce/#service",
    serviceType: "Création de site e-commerce",
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
      "Création de sites e-commerce à Blois avec WordPress et WooCommerce : boutiques en ligne modernes, sécurisées et optimisées pour le référencement.",
    offers: {
      "@type": "Offer",
      name: "Création de site e-commerce",
      description:
        "Boutiques en ligne avec WordPress and WooCommerce, design attractif et gestion autonome.",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
  },
  {
    "@type": "WebPage",
    "@id":
      "https://www.allainweb.fr/services/creation-site-e-commerce/#webpage",
    url: "https://www.allainweb.fr/services/creation-site-e-commerce",
    name: "Création de Site E-commerce - Allain Web",
    isPartOf: {
      "@id": "https://www.allainweb.fr/#website",
    },
    description:
      "Découvrez mes services de création de sites e-commerce à Blois avec WordPress et WooCommerce : boutiques optimisées et prêtes à vendre.",
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
          name: "Création de Site E-commerce",
          item: "https://www.allainweb.fr/services/creation-site-e-commerce",
        },
      ],
    },
  },
  {
    "@type": "FAQPage",
    "@id":
      "https://www.allainweb.fr/services/creation-site-e-commerce/#faqpage",
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
