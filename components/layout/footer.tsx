import Link from "next/link";
import { Briefcase } from "lucide-react";
import PictoIcon from "@/public/picto.svg";
import LogoIcon from "@/public/logo.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-muted-foreground relative">
      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 pt-8 md:grid-cols-2 md:pt-12 lg:grid-cols-4">
          {/* Logo et description */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-foreground flex items-center gap-2"
              aria-label="Allain Web"
            >
              <PictoIcon className="size-6 lg:size-8" />
              <LogoIcon className="w-[130px] lg:w-[160px]" />
            </Link>
            <p className="text-sm">
              Julien Allain, développeur web freelance à Blois. Création de
              sites internet, e-commerce et web design responsive pour votre
              succès en ligne.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-primary mb-4 text-lg font-semibold">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projets"
                  className="hover:text-primary transition-colors"
                >
                  Projets
                </Link>
              </li>
              {/* Uncomment si besoin
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-primary"
                >
                  Contact
                </Link>
              </li>
              */}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-primary mb-4 text-lg font-semibold">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/web-design"
                  className="hover:text-primary transition-colors"
                >
                  Web Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/creation-site-internet"
                  className="hover:text-primary transition-colors"
                >
                  Création de Site Internet
                </Link>
              </li>
              <li>
                <Link
                  href="/services/creation-site-e-commerce"
                  className="hover:text-primary transition-colors"
                >
                  Création de Site E-commerce
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-primary mb-4 text-lg font-semibold">Contact</h3>
            <address className="text-sm not-italic">
              7 Résidence de Bellevue
              <br />
              41110 Seigy, France
            </address>
            <p className="mt-2 text-sm">
              <a
                href="mailto:contact@allainweb.fr"
                className="hover:text-primary transition-colors"
              >
                contact@allainweb.fr
              </a>
            </p>
            <p className="mt-2 text-sm">
              <a
                href="tel:+33650425221"
                className="hover:text-primary transition-colors"
              >
                +33 6 50 42 52 21
              </a>
            </p>
            <div className="mt-4 flex gap-4">
              <Link
                href="https://www.linkedin.com/in/julien-allain/"
                target="_blank"
                aria-label="LinkedIn"
                className="hover:text-primary transition-colors"
              >
                <span
                  className="icon-[cib--linkedin] size-6"
                  title="LinkedIn"
                />
              </Link>
              <Link
                href="https://github.com/thesizkarn"
                target="_blank"
                aria-label="GitHub"
                className="hover:text-primary transition-colors"
              >
                <span className="icon-[cib--github] size-6" title="GitHub" />
              </Link>
              <Link
                href="https://www.malt.fr/profile/julienallain"
                target="_blank"
                aria-label="Malt"
                className="hover:text-primary transition-colors"
              >
                <Briefcase className="size-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-700 py-6 text-center text-sm">
          &copy; {currentYear} Allain Web. Tous droits réservés.{" "}
          <Link
            href="/mentions-legales"
            className="text-muted-foreground hover:text-primary"
          >
            Mentions Légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
