// app/page.tsx
import HomeHero from "@/components/page/home/hero";
import HomeServiceCards from "@/components/page/home/service-cards";
import HomeAbout from "@/components/page/home/about";
import HomeProjectCards from "@/components/page/home/project-cards";
import HomeSeparator from "@/components/page/home/separator";
import HomeSkills from "@/components/page/home/skills";
import ContactForm from "@/components/contact-form";
import { Metadata } from "next";

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <HomeHero />
      <HomeServiceCards />
      <HomeAbout />
      <HomeProjectCards />
      <HomeSeparator />
      <HomeSkills />
      <ContactForm />
    </div>
  );
}

// SEO Metadata
export const metadata: Metadata = {
  title: "Développeur Web Freelance à Blois - Allain Web ",
  description:
    "Développeur Web Freelance à Blois, Julien Allain, réalise tout type de projet web comme la création de site internet (site vitrine, WordPress, e-commerce ou plus encore).",
  openGraph: {
    title: "Développeur Web Freelance à Blois - Allain Web",
    description:
      "Julien Allain, développeur web freelance à Blois, crée des sites vitrines, boutiques e-commerce avec WordPress et designs sur mesure optimisés pour le SEO.",
    url: "https://www.allainweb.fr",
    images: ["https://www.allainweb.fr/logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Allain Web - Développeur Web Freelance à Blois",
    description:
      "Sites vitrines, e-commerce et designs par Julien Allain, freelance à Blois. Contactez-moi pour votre projet web !",
    images: ["https://www.allainweb.fr/logo.png"],
  },
};

// Schema.org Data
const schemaData = [
  {
    "@type": "Organization",
    "@id": "https://www.allainweb.fr/#organization",
    name: "Allain Web",
    url: "https://www.allainweb.fr",
    logo: "https://www.allainweb.fr/logo.png",
    description:
      "Développeur Web Freelance à Blois, Julien Allain, réalise tout type de projet web comme la création de site internet (site vitrine, WordPress, e-commerce ou plus encore).",
    address: {
      "@type": "PostalAddress",
      streetAddress: "7 Résidence de Bellevue",
      addressLocality: "Seigy",
      postalCode: "41110",
      addressCountry: "FR",
    },
    openingHours: "Mo-Fr 09:00-17:00",
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@allainweb.fr",
      telephone: "+33 6 50 42 52 21",
      contactType: "Customer Service",
      availableLanguage: ["French"],
    },
    sameAs: [
      "https://www.linkedin.com/in/julien-allain/",
      "https://www.malt.fr/profile/julienallain",
      "https://github.com/TheSizkarn",
    ],
  },
  {
    "@type": "WebSite",
    "@id": "https://www.allainweb.fr/#website",
    url: "https://www.allainweb.fr",
    name: "Développeur Web Freelance à Blois - Allain Web",
    publisher: {
      "@id": "https://www.allainweb.fr/#organization",
    },
    description:
      "Portfolio de Julien Allain, développeur web freelance à Blois, spécialisé dans la création de sites internet, e-commerce et web design.",
  },
];
