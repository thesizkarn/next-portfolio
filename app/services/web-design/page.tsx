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

export default function WebDesign() {
  return (
    <div>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <header className="flex flex-col items-center justify-center gap-4 py-4 md:py-8">
        <span className="text-primary uppercase">
          Donnez vie à votre identité visuelle
        </span>
        <h1 className="text-xl font-semibold md:text-3xl lg:text-5xl">
          Services de{" "}
          <strong className="text-primary font-semibold">Web Design</strong> à
          Blois
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
              <BreadcrumbPage>Web Design</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <section className="relative container mx-auto flex flex-col gap-8 px-4 py-10 sm:px-6 md:py-18">
        <div className="flex w-full flex-col items-center gap-8 md:flex-row md:gap-12">
          <div className="flex-1 p-0 md:p-8">
            <Image
              src="/web-design-freelance.svg"
              alt="Illustration développeur web freelance à Blois - Web design responsive avec Figma"
              className="float-animation w-full"
              width={568}
              height={568}
              priority
            />
          </div>
          <div className="flex min-w-0 flex-1 flex-col items-start gap-6">
            <h2 className="text-lg font-semibold md:text-2xl lg:text-3xl">
              Le{" "}
              <strong className="text-primary font-semibold">web design</strong>{" "}
              : une première impression qui compte
            </h2>
            <p>
              Le design de votre site internet est bien plus qu’une simple
              esthétique : c’est le reflet de votre marque et la première chose
              que vos visiteurs remarquent. Un design soigné et intuitif inspire
              confiance et incite à l’action, que ce soit à Blois ou ailleurs.
            </p>
            <p>
              Chez AllainWeb, je crée des designs sur mesure, adaptés à vos
              besoins et à votre audience. Basé à Blois, j’utilise Figma pour
              concevoir des maquettes fonctionnelles, optimisées pour desktop et
              mobile (responsive). Que vous ayez besoin d’un site vitrine ou
              d’une boutique e-commerce, je vous propose une identité visuelle
              unique qui capte l’attention.
            </p>
            <p>
              Donnez à votre projet web une allure professionnelle dès le
              départ. Découvrez mes services de web design ci-dessous.
            </p>
          </div>
        </div>
      </section>

      <section className="relative container mx-auto flex flex-col items-center justify-center gap-4 px-4 py-4 sm:px-6 md:py-12">
        <span className="text-primary uppercase">
          Un design qui vous ressemble
        </span>
        <h2 className="text-center text-lg font-semibold md:text-2xl lg:text-3xl">
          Mes services de web design
        </h2>
      </section>

      <section className="relative container mx-auto flex flex-col gap-8 px-4 py-10 sm:px-6 md:py-16">
        <div className="flex w-full flex-col-reverse items-center gap-8 md:flex-row md:gap-12">
          <div className="flex min-w-0 flex-1 flex-col items-start gap-6">
            <h3 className="text-lg font-semibold md:text-2xl lg:text-3xl">
              Design responsive avec{" "}
              <strong className="text-primary font-semibold">Figma</strong>
            </h3>
            <p>
              Un site doit être beau et fonctionnel, quel que soit l’écran. Je
              conçois des designs responsive, parfaitement adaptés aux
              ordinateurs de bureau et aux mobiles, pour offrir une expérience
              utilisateur fluide et cohérente.
            </p>
            <p>
              Grâce à Figma, je réalise des maquettes interactives qui vous
              permettent de visualiser et tester votre site avant son
              développement. Du wireframe à la version finale, chaque détail est
              pensé pour refléter votre identité et répondre aux attentes de vos
              visiteurs. Mes designs sont modernes, intuitifs et prêts à être
              intégrés dans WordPress ou une solution sur mesure.
            </p>
            <p>
              L’UX (expérience utilisateur) et l’UI (interface utilisateur) sont
              au cœur de mon approche. L’UX garantit une navigation simple et
              agréable, tandis que l’UI soigne l’aspect visuel pour séduire vos
              visiteurs. Ensemble, ils augmentent l’engagement et la fidélité de
              vos clients.
            </p>
            <p>
              Un design qui séduit et convertit, créé avec soin pour votre
              projet.
            </p>
          </div>
          <div className="flex-1 p-4">
            <Image
              src="/creation-maquette-site.svg"
              alt="Illustration web design responsive avec Figma - Développeur freelance à Blois"
              className="w-full"
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
  title: "Web Design à Blois - Développeur Freelance avec Figma - Allain Web",
  description:
    "Services de web design à Blois : designs responsive desktop et mobile avec Figma, par un développeur freelance. Maquettes fonctionnelles pour votre site.",
  openGraph: {
    title: "Web Design à Blois - Allain Web",
    description:
      "Besoin d’un design unique pour votre site ? Julien Allain, freelance à Blois, crée des maquettes responsive avec Figma pour desktop et mobile.",
    images: ["https://www.allainweb.fr/web-design-illustration.svg"],
    url: "https://www.allainweb.fr/services/web-design",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design à Blois - Allain Web",
    description:
      "Designs responsive avec Figma par un freelance à Blois. Contactez-moi pour un site qui vous ressemble !",
    images: ["https://www.allainweb.fr/web-design-illustration.svg"],
  },
};

// FAQ Data
const faqItems = [
  {
    question: "Pourquoi faire appel à un freelance pour le web design ?",
    answer:
      "Un freelance offre une approche sur mesure, avec une attention personnalisée à votre projet. À Blois, je vous propose un design unique, sans les coûts élevés d’une agence, tout en restant réactif à vos besoins.",
  },
  {
    question:
      "Qu’est-ce qu’un design responsive et pourquoi est-ce important ?",
    answer:
      "Un design responsive s’adapte à tous les écrans (desktop, mobile, tablette). C’est essentiel pour offrir une expérience fluide à vos visiteurs et améliorer votre référencement sur Google.",
  },
  {
    question: "Comment Figma améliore-t-il la création de mon site ?",
    answer:
      "Figma permet de concevoir des maquettes interactives que vous pouvez tester avant développement. Cela garantit un design fidèle à vos attentes, optimisé pour l’utilisateur.",
  },
  {
    question: "Combien de temps faut-il pour concevoir un design de site ?",
    answer:
      "Cela dépend de la complexité, mais une maquette simple prend 1 à 2 semaines, tandis qu’un projet plus détaillé peut nécessiter 3 à 4 semaines. Je vous tiens informé à chaque étape.",
  },
];

// Schema.org Data
const schemaData = [
  {
    "@type": "Service",
    "@id": "https://www.allainweb.fr/services/web-design/#service",
    serviceType: "Web Design",
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
      "Services de web design à Blois : création de designs responsive (desktop et mobile) avec Figma, maquettes fonctionnelles pour sites internet.",
    offers: {
      "@type": "Offer",
      name: "Web Design Responsive",
      description:
        "Designs sur mesure avec Figma, adaptés à tous les écrans, pour sites vitrines ou e-commerce.",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
  },
  {
    "@type": "WebPage",
    "@id": "https://www.allainweb.fr/services/web-design/#webpage",
    url: "https://www.allainweb.fr/services/web-design",
    name: "Web Design - Allain Web",
    isPartOf: {
      "@id": "https://www.allainweb.fr/#website",
    },
    description:
      "Découvrez mes services de web design à Blois : designs responsive avec Figma pour desktop et mobile, adaptés à vos projets web.",
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
          name: "Web Design",
          item: "https://www.allainweb.fr/services/web-design",
        },
      ],
    },
  },
  {
    "@type": "FAQPage",
    "@id": "https://www.allainweb.fr/services/web-design/#faqpage",
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
