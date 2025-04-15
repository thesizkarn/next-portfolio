import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Metadata } from "next";

export default function MentionsLegales() {
  return (
    <div>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="container mx-auto px-4 sm:px-6">
        <header className="flex flex-col items-center justify-center gap-4 py-4 md:py-8">
          <h1 className="text-xl font-semibold md:text-3xl lg:text-5xl">
            Mentions Légales
          </h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Mentions Légales</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        {/* Contenu des mentions légales */}
        <section className="relative space-y-8 py-8 md:py-24">
          <article className="space-y-4">
            <h2 className="text-lg font-semibold md:text-2xl lg:text-3xl">
              Éditeur du site
            </h2>
            <p>
              Le site{" "}
              <a
                href="https://www.allainweb.fr"
                className="text-primary hover:underline"
              >
                www.allainweb.fr
              </a>{" "}
              est édité par :
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Nom :</strong> Julien Allain
              </li>
              <li>
                <strong>Statut :</strong> Entrepreneur Individuel
                (micro-entreprise)
              </li>
              <li>
                <strong>Adresse :</strong> 7 Résidence de Bellevue, 41110 Seigy,
                France
              </li>
              <li>
                <strong>Téléphone :</strong>{" "}
                <a
                  href="tel:+33650425221"
                  className="text-primary hover:underline"
                >
                  +33 6 50 42 52 21
                </a>
              </li>
              <li>
                <strong>Email :</strong>{" "}
                <a
                  href="mailto:contact@allainweb.fr"
                  className="text-primary hover:underline"
                >
                  contact@allainweb.fr
                </a>
              </li>
              <li>
                <strong>SIRET :</strong> 79888597600018
              </li>
              <li>
                <strong>Code APE :</strong> 6201Z - Programmation informatique
              </li>
            </ul>
          </article>

          <article className="space-y-4">
            <h2 className="text-lg font-semibold md:text-2xl lg:text-3xl">
              Hébergement
            </h2>
            <p>Le site est hébergé par :</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Hébergeur :</strong> Hostinger
              </li>
              <li>
                <strong>Adresse :</strong> 61 Lordou Vironos Street, 6023
                Larnaca, Chypre
              </li>
              <li>
                <strong>Contact :</strong>{" "}
                <a
                  href="mailto:support@hostinger.com"
                  className="text-primary hover:underline"
                >
                  support@hostinger.com
                </a>
              </li>
            </ul>
          </article>

          <article className="space-y-4">
            <h2 className="text-lg font-semibold md:text-2xl lg:text-3xl">
              Directeur de la publication
            </h2>
            <p>
              <strong>Responsable :</strong> Julien Allain
            </p>
          </article>

          <article className="space-y-4">
            <h2 className="text-lg font-semibold md:text-2xl lg:text-3xl">
              Propriété intellectuelle
            </h2>
            <p>
              L’ensemble des éléments (textes, images, logos, etc.) présents sur
              le site{" "}
              <a
                href="https://www.allainweb.fr"
                className="text-primary hover:underline"
              >
                www.allainweb.fr
              </a>{" "}
              est protégé par le droit d’auteur et le droit de la propriété
              intellectuelle. Toute reproduction, modification ou diffusion sans
              autorisation préalable est strictement interdite.
            </p>

            <h3 className="text-lg font-semibold md:text-xl">
              Données personnelles
            </h3>
            <p>
              Conformément au Règlement Général sur la Protection des Données
              (RGPD) et à la loi Informatique et Libertés du 6 janvier 1978
              modifiée, les données collectées via le formulaire de contact sont
              utilisées uniquement pour répondre à vos demandes. Elles ne sont
              ni vendues ni transmises à des tiers. Vous disposez d’un droit
              d’accès, de rectification, de suppression et d’opposition sur vos
              données en me contactant à{" "}
              <a
                href="mailto:contact@allainweb.fr"
                className="text-primary hover:underline"
              >
                contact@allainweb.fr
              </a>
              .
            </p>

            <h3 className="text-lg font-semibold md:text-xl">Cookies</h3>
            <p>
              Ce site n’utilise pas de cookies de suivi ou publicitaires. Aucun
              suivi analytique n’est effectué sans votre consentement préalable.
            </p>

            <h3 className="text-lg font-semibold md:text-xl">Litiges</h3>
            <p>
              En cas de litige, les parties s’engagent à tenter une résolution
              amiable avant toute action judiciaire. À défaut, le tribunal
              compétent est celui de Blois (France).
            </p>
          </article>
        </section>
      </div>
    </div>
  );
}

// SEO Metadata
export const metadata: Metadata = {
  title: "Mentions Légales - Allain Web",
  description:
    "Consultez les mentions légales de Allain Web, développeur web freelance à Blois : informations légales, contact, données personnelles et hébergement.",
  openGraph: {
    title: "Mentions Légales - Allain Web",
    description:
      "Mentions légales de Julien Allain, développeur web freelance à Blois : éditeur, hébergement, données personnelles et propriété intellectuelle.",
    url: "https://www.allainweb.fr/mentions-legales",
    images: ["https://www.allainweb.fr/logo.png"],
  },
  twitter: {
    card: "summary",
    title: "Mentions Légales - Allain Web",
    description:
      "Mentions légales de Allain Web, développeur freelance à Blois.",
    images: ["https://www.allainweb.fr/logo.png"],
  },
};

// Schema.org Data
const schemaData = {
  "@type": "WebPage",
  "@id": "https://www.allainweb.fr/mentions-legales/#webpage",
  url: "https://www.allainweb.fr/mentions-legales",
  name: "Mentions Légales - Allain Web",
  isPartOf: {
    "@id": "https://www.allainweb.fr/#website",
  },
  description:
    "Mentions légales de Julien Allain, développeur web freelance à Blois.",
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
        name: "Mentions Légales",
        item: "https://www.allainweb.fr/mentions-legales",
      },
    ],
  },
};
