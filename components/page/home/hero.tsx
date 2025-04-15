import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function HomeHero() {
  return (
    <div id="hero" className="relative py-20 sm:py-32 md:py-40">
      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        <h1 className="mb-4 text-4xl font-extrabold drop-shadow-lg md:text-7xl">
          Développeur Web
          <br />
          <strong className="text-primary">Freelance à Blois</strong>
        </h1>
        <p className="text-primary mx-auto mb-8 max-w-2xl text-xl drop-shadow-sm md:text-2xl">
          Création de site internet dans la région Centre-Val de Loire.
        </p>
        <p className="max-w-[700px] text-lg">
          Je vous accompagne dans votre projet de site vitrine, boutique en
          ligne, blog, identité visuelle et refonte ou optimisation de site web
          sur CMS ou personnalisé.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3">
          <Link
            href="/services"
            className={buttonVariants({ variant: "default" })}
          >
            En savoir plus
          </Link>
          <Link
            href="/projets"
            className={buttonVariants({ variant: "secondary" })}
          >
            Voir mes projets
          </Link>
        </div>
      </div>
    </div>
  );
}
