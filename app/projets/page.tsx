import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Metadata } from "next";

export default function Projets() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <header className="flex flex-col items-center justify-center gap-4 py-4 md:py-8">
        <span className="text-primary uppercase">
          Ils m&apos;ont fait confiance
        </span>
        <h1 className="text-xl font-semibold md:text-3xl lg:text-5xl">
          Mes <strong className="text-primary font-semibold">projets</strong>{" "}
          réalisés
        </h1>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Projets</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <section
        id="projects"
        className="relative container mx-auto px-4 py-12 sm:px-6 md:py-24"
      >
        <p className="pb-12 text-center">
          Découvrez mes dernières réalisations en tant que développeur web
          freelance à Blois. Chaque projet, qu’il s’agisse d’un site vitrine,
          d’une boutique e-commerce ou d’un design sur mesure, est conçu pour
          répondre aux besoins spécifiques de mes clients tout en optimisant
          leur visibilité sur Google. Basé à Blois, je mets mon expertise en
          WordPress, WooCommerce et développement personnalisé au service
          d’artisans, PME et entrepreneurs pour transformer leurs idées en
          solutions digitales performantes.
        </p>
        <div className="grid grid-cols-1 gap-8 select-none md:grid-cols-3">
          <Card className="p-0 sm:p-0">
            <div>
              <div className="relative h-52 overflow-hidden rounded-t-md">
                <Image
                  src="/developpement-wordpress-site-edas.jpg"
                  alt="Développement d'un site Wordpress pour EDAS Rénovation"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="rounded-t-md object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-5 p-6">
                <h3 className="text-lg font-semibold">
                  E.D.A.S - Multi-Services Habitat
                </h3>
                <p className="text-muted-foreground text-sm">
                  Développement d’un site vitrine WordPress pour un artisan à
                  Selles-sur-Cher.
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-[10px]">
                    WordPress
                  </Badge>
                  <Badge variant="outline" className="text-[10px]">
                    Hébergement
                  </Badge>
                </div>
                <Link
                  href="https://edas-renovation.fr/"
                  className={buttonVariants({ variant: "default" })}
                  target="_blank"
                  rel="noopener"
                  aria-label="Voir le projet E.D.A.S sur un site externe"
                >
                  Voir le projet
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}

// SEO Metadata
export const metadata: Metadata = {
  title: "Projets Réalisés - Développeur Web Freelance - Allain Web",
  description:
    "Découvrez les projets réalisés par Julien Allain, développeur web freelance à Blois : sites vitrines, e-commerce avec WordPress et WooCommerce, designs sur mesure optimisés SEO.",
  openGraph: {
    title: "Projets Réalisés - Allain Web",
    description:
      "Sites vitrines, boutiques en ligne et designs personnalisés par Julien Allain, développeur freelance à Blois. Consultez mes réalisations !",
    url: "https://www.allainweb.fr/projets",
    images: ["https://www.allainweb.fr/developpement-wordpress-site-edas.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projets Réalisés - Allain Web",
    description:
      "Projets web réalisés par un développeur freelance à Blois : sites WordPress, e-commerce et plus. Voir mes travaux !",
    images: ["https://www.allainweb.fr/developpement-wordpress-site-edas.jpg"],
  },
};

// Schema.org Data
const schemaData = [
  {
    "@type": "WebPage",
    "@id": "https://www.allainweb.fr/projets/#webpage",
    url: "https://www.allainweb.fr/projets",
    name: "Projets Réalisés - Allain Web",
    isPartOf: {
      "@id": "https://www.allainweb.fr/#website",
    },
    description:
      "Portfolio des projets réalisés par Julien Allain, développeur web freelance à Blois : sites vitrines, e-commerce et designs sur mesure.",
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
          name: "Projets",
          item: "https://www.allainweb.fr/projets",
        },
      ],
    },
  },
  {
    "@type": "CreativeWork",
    "@id": "https://www.allainweb.fr/projects/edas-renovation",
    name: "E.D.A.S - Multi-Services Habitat",
    url: "https://edas-renovation.fr/",
    description:
      "Site vitrine WordPress développé pour un artisan à Selles-sur-Cher.",
    creator: {
      "@type": "Person",
      "@id": "https://www.allainweb.fr/#julien-allain",
      name: "Julien Allain",
      url: "https://www.allainweb.fr",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://www.allainweb.fr/#organization",
      name: "Allain Web",
    },
  },
];
